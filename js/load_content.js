hljs.initHighlightingOnLoad()
let md = window.markdownit({
  langPrefix: "",
  html: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + "</code></pre>"
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
  }
})

function router() {
  // Lazy load view element:
  let el = document.getElementById("content-data")
  // Current route url (getting rid of '#' in hash as well):
  let url = location.hash.slice(1) || "/"
  render(url.slice(1), el)
}

async function render(url, el) {
  let result = await fetch(`../content/${url}.md`).then(r => {
    if (r.status === 200) {
      return r.text()
    }
    return `<p class="content-text-loading">ไม่พบหน้าที่ต้องการ</p>`
  })

  result = await md.render(result)
  el.innerHTML = result
  $('html,body').scrollTop(0);

  var allSide = document.querySelectorAll('#sideMenu li')
  var activePage = document.querySelector(`a[href$="${url}"]`).parentElement;
  for(let i = 0; i < allSide.length; i++){
    allSide[i].classList.remove("activeList")
  }
  activePage.classList.add("activeList")
}

// Listen on hash change:
window.addEventListener("hashchange", router)
// Listen on page load:
window.addEventListener("load", router)
