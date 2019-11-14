# [Part 1.8] Reinforcement Learning: การเรียนรู้แบบเสริมกำลัง

Reinforcement Learning นั้นจะแตกต่างจาก Machine Learning 2 แบบก่อนหน้านี้ที่เราพูดถึงเพราะ Reinforcement Learning เราจะไม่จำเป็นต้องใช้ Data ในการเรียนรู้! แล้ว Reinforcement Learning มันเรียนรู้อะไรแล้วมีประโยชน์ยังไง

<div class="img-caption">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/UZHTNBMAfAA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>OpenAI Five ในเกม Dota 2</p>
</div>

<div class="img-caption">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cUTMhmVh1qs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>DeepMind ในเกม Starcraft 2</p>
</div>

AI ทั้ง 2 จากคลิปข้างต้นนี้นั้นมีความสามารถในการเล่นเกมสูงเทียบเคียงกับระดับ Professional Player

OpenAI Five ชนะผู้เล่นที่เป็นมนุษย์ทั้งหมด 7215 ครั้งโดยแพ้เพียงแค่ 44 ครั้งเท่านั้น (คิดเป็น Win Rate 99.4%) ซึ่งหลายๆ ทีมที่ OpenAI Five ชนะนั้นล้วนเป็นผู้เล่นระดับสูงทั้งสิ้น

ซึ่งทั้ง OpenAI Five และ DeepMind นั้นล้วนเกิดมาจาก Machine Learning ประเภท Reinforcement Learning ทั้งสิ้น

## Reinforcement Learning Process (แบบคร่าวๆ)

การทำ Reinforcement Learning นั้นเราจะอาศัย Model ทางคณิตศาสตร์ตัวหนึ่งที่ชื่อว่า Markov Decision Process (MDP)

<div class="img-caption">
    <img src="../img/content_images/18_reinforcement/img01.png"/><br><br>
    <p>Markov Decision Process</p>
</div>

**Agent** ก็คือ ตัว AI ของเราที่คอยดูว่า ถ้าสถานะการณ์ (state) แบบนั้นแบบนี้ควรเลือกทำอะไร (action) โดยเราจะบอกว่าอะไรควรทำไม่ควรทำ ก็จะตัดสินใจจากประสบการณ์

**Environment** คือ สภาพแวดล้อมที่ Agent จะทำ action อะไรบางอย่างด้วย

การฝึก AI ให้มีประสิทธิภาพเยอะขึ้น เราก็ให้ Agent ทำการลองกระทำ action กับ state ไปเรื่อยๆ เพื่อเป็นประสบการณ์ให้การตัดสินใจครั้งต่อๆ ไปดียิ่งขึ้นเรื่อยๆ