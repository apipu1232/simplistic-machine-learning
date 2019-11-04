# [Part 1.7] Unsupervised Learning : การเรียนรู้แบบไม่มีผู้สอน

สำหรับ Unsupervised Learning นั้นก็ตามความหมายมันเลยครับ Unsupervised จะเป็นการเล่นกับข้อมูลที่เป็น Unlabeled Data ซึ่งก็คือการที่เราโยนข้อมูลดิบไปให้คอมพิวเตอร์มันเรียนเองเลย!! แล้วการที่เราไม่บอกอะไรให้กับคอมพิวเตอร์เลยแล้วเราจะได้อะไรเป็นผลลัพธ์หล่ะ?

## ประเภทของ Unsupervised Learning

เราสามารถแบ่งประเภทของ Unsupervised Learning ได้เป็น 3 รูปแบบหลักๆ ได้แก่ Clustering, Assosiation Rule Learning, Dimension Reduction (Generalization) แต่สำหรับบทความนี้เราจะพูดถึงแค่ 2 ตัวแรกเท่านั้นครับคือ Clustering และ Assosiation Rule Learning

### Clustering

<div class="img-caption">
    <img src="../img/content_images/17_unsupervised/Clustering.jpg"/><br><br>
    <p>Source: <a href="https://vas3k.com/blog/machine_learning/">https://vas3k.com/blog/machine_learning/</a></p>
</div><br>

เป็นการแบ่งข้อมูลให้เป็นกลุ่มจากชุดข้อมูลที่เรามี ซึ่งหลายคนอาจสงสัยว่า Clustering นี่มันต่างจาก Classification ยังไง ลองดูตัวอย่างด้านล่างนี้ได้เลย

<center>
    <table class="tg">
    <tr>
        <th class="tg-0pky">ID</th>
        <th class="tg-0pky">Name</th>
        <th class="tg-0pky">Height (m)</th>
        <th class="tg-0pky">Weight (kg)</th>
        <th class="tg-0pky">Gender</th>
        <th class="tg-0pky">Nationality</th>
    </tr>
    <tr>
        <td class="tg-0pky">001</td>
        <td class="tg-0pky">Yabuki Nako</td>
        <td class="tg-0pky">149</td>
        <td class="tg-0pky">40</td>
        <td class="tg-0pky">Female</td>
        <td class="tg-0pky">Japanese</td>
    </tr>
    <tr>
        <td class="tg-0pky">002</td>
        <td class="tg-0pky">Han Seung-woo</td>
        <td class="tg-0pky">184</td>
        <td class="tg-0pky">63</td>
        <td class="tg-0pky">Male</td>
        <td class="tg-0pky">Korean</td>
    </tr>
    <tr>
        <td class="tg-0pky">003</td>
        <td class="tg-0pky">Jo Yuri</td>
        <td class="tg-0pky">160</td>
        <td class="tg-0pky">45</td>
        <td class="tg-0pky">Female</td>
        <td class="tg-0pky">Korean</td>
    </tr>
    <tr>
        <td class="tg-0pky">004</td>
        <td class="tg-0pky">Choi Yena</td>
        <td class="tg-0pky">163</td>
        <td class="tg-0pky">45</td>
        <td class="tg-0pky">Female</td>
        <td class="tg-0pky">Korean</td>
    </tr>
    <tr>
        <td class="tg-0pky">005</td>
        <td class="tg-0pky">Lee Jinhyuk</td>
        <td class="tg-0pky">185</td>
        <td class="tg-0pky">60</td>
        <td class="tg-0pky">Male</td>
        <td class="tg-0pky">Korean</td>
    </tr>
    <tr>
        <td class="tg-0pky">006</td>
        <td class="tg-0pky">Kim Chaewon</td>
        <td class="tg-0pky">163</td>
        <td class="tg-0pky">42</td>
        <td class="tg-0pky">Female</td>
        <td class="tg-0pky">Korean</td>
    </tr>
    <tr>
        <td class="tg-0pky">007</td>
        <td class="tg-0pky">Choi Byung-chan</td>
        <td class="tg-0pky">185</td>
        <td class="tg-0pky">62</td>
        <td class="tg-0pky">Male</td>
        <td class="tg-0pky">Korean</td>
    </tr>
    <tr>
        <td class="tg-0pky">008</td>
        <td class="tg-0pky">Lee Ji-hoon</td>
        <td class="tg-0pky">164</td>
        <td class="tg-0pky">54</td>
        <td class="tg-0pky">Male</td>
        <td class="tg-0pky">Korean</td>
    </tr>
    <tr>
        <td class="tg-0pky">009</td>
        <td class="tg-0pky">Honda Hitomi</td>
        <td class="tg-0pky">158</td>
        <td class="tg-0pky">44</td>
        <td class="tg-0pky">Female</td>
        <td class="tg-0pky">Japanese</td>
    </tr>
    <tr>
        <td class="tg-0pky">010</td>
        <td class="tg-0pky">Jang Wonyoung</td>
        <td class="tg-0pky">169</td>
        <td class="tg-0pky">47</td>
        <td class="tg-0pky">Female</td>
        <td class="tg-0pky">Korean</td>
    </tr>
    </table>
</center><br>

หากเราต้องการแบ่งกลุ่มคน 10 คนตามตารางนี้ เราควรจะเลือกแบ่งตามอะไรดี? ในกรณีแบบนี้นั้นขึ้นอยู่กับว่าตัวผู้ใช้นั้นต้องการอะไรยกตัวอย่างเช่น

#### หากเราต้องการแบ่งกลุ่มตามส่วนสูงจำนวน 2 กลุ่ม

เราก็อาจจะบอกว่าคนที่น้ำหนักน้อยกว่าหรือเท่ากับ 165 ให้เป็นกลุ่มแรก และคนที่นำหนักมากกว่า 165 ให้เป็นกลุ่มสอง เราก็จะสามารถแบ่งได้ดังนี้

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <h5>กลุ่มที่ 1</h5>
            <table class="tg">
                <tr>
                    <th class="tg-0pky">ID</th>
                    <th class="tg-0pky">Name</th>
                    <th class="tg-0pky">Height (m)</th>
                    <th class="tg-0pky">Weight (kg)</th>
                    <th class="tg-0pky">Gender</th>
                    <th class="tg-0pky">Nationality</th>
                </tr>
                <tr>
                    <td class="tg-0pky">001</td>
                    <td class="tg-0pky">Yabuki Nako</td>
                    <td class="tg-0pky">149</td>
                    <td class="tg-0pky">40</td>
                    <td class="tg-0pky">Female</td>
                    <td class="tg-0pky">Japanese</td>
                </tr>
                <tr>
                    <td class="tg-0pky">003</td>
                    <td class="tg-0pky">Jo Yuri</td>
                    <td class="tg-0pky">160</td>
                    <td class="tg-0pky">45</td>
                    <td class="tg-0pky">Female</td>
                    <td class="tg-0pky">Korean</td>
                </tr>
                <tr>
                    <td class="tg-0pky">004</td>
                    <td class="tg-0pky">Choi Yena</td>
                    <td class="tg-0pky">163</td>
                    <td class="tg-0pky">45</td>
                    <td class="tg-0pky">Female</td>
                    <td class="tg-0pky">Korean</td>
                </tr>
                <tr>
                    <td class="tg-0pky">006</td>
                    <td class="tg-0pky">Kim Chaewon</td>
                    <td class="tg-0pky">163</td>
                    <td class="tg-0pky">42</td>
                    <td class="tg-0pky">Female</td>
                    <td class="tg-0pky">Korean</td>
                </tr>
                <tr>
                    <td class="tg-0pky">008</td>
                    <td class="tg-0pky">Lee Ji-hoon</td>
                    <td class="tg-0pky">164</td>
                    <td class="tg-0pky">54</td>
                    <td class="tg-0pky">Male</td>
                    <td class="tg-0pky">Korean</td>
                </tr>
                <tr>
                    <td class="tg-0pky">009</td>
                    <td class="tg-0pky">Honda Hitomi</td>
                    <td class="tg-0pky">158</td>
                    <td class="tg-0pky">44</td>
                    <td class="tg-0pky">Female</td>
                    <td class="tg-0pky">Japanese</td>
                </tr>
            </table>
        </div>
        <div class="col-lg-6 col-md-12">
            <h5>กลุ่มที่ 2</h5>
            <table class="tg">
                <tr>
                    <th class="tg-0pky">ID</th>
                    <th class="tg-0pky">Name</th>
                    <th class="tg-0pky">Height (m)</th>
                    <th class="tg-0pky">Weight (kg)</th>
                    <th class="tg-0pky">Gender</th>
                    <th class="tg-0pky">Nationality</th>
                </tr>
                <tr>
                    <td class="tg-0pky">002</td>
                    <td class="tg-0pky">Han Seung-woo</td>
                    <td class="tg-0pky">184</td>
                    <td class="tg-0pky">63</td>
                    <td class="tg-0pky">Male</td>
                    <td class="tg-0pky">Korean</td>
                </tr>
                <tr>
                    <td class="tg-0pky">005</td>
                    <td class="tg-0pky">Lee Jinhyuk</td>
                    <td class="tg-0pky">185</td>
                    <td class="tg-0pky">60</td>
                    <td class="tg-0pky">Male</td>
                    <td class="tg-0pky">Korean</td>
                </tr>
                <tr>
                    <td class="tg-0pky">007</td>
                    <td class="tg-0pky">Choi Byung-chan</td>
                    <td class="tg-0pky">185</td>
                    <td class="tg-0pky">62</td>
                    <td class="tg-0pky">Male</td>
                    <td class="tg-0pky">Korean</td>
                </tr>
                <tr>
                    <td class="tg-0pky">010</td>
                    <td class="tg-0pky">Jang Wonyoung</td>
                    <td class="tg-0pky">169</td>
                    <td class="tg-0pky">47</td>
                    <td class="tg-0pky">Female</td>
                    <td class="tg-0pky">Korean</td>
                </tr>
            </table>
        </div>
    </div>
</div><br>

จะเห็นได้ว่าเราสามารถแบ่งกลุ่มข้อมูลได้โดยที่ไม่ต้องกำหนด Label ให้กับข้อมูล (ส่วนสูงที่เราเลือกมานั้นคือ Feature) แน่นอนว่าหากเราเปลี่ยน Feature เป็นอย่างอื่นเช่น ส่วนสูง, เพศ เราก็จะได้ผลลัพธ์จากการแบ่งกลุ่มที่ไม่เหมือนกับแบบนี้ ทั้งนี้ทั้งนั้นก็ขึ้นอยู่กับว่าจุดประสงค์ของเรานั้นมันคืออะไร โดยจะมีตัวอย่างและคำอธิบายเพิ่มเติมในหัวข้อ **K-Means Clustering**

### Association Rule Learning

<div class="img-caption">
    <img src="../img/content_images/17_unsupervised/Association.jpg"/><br><br>
    <p>Source: <a href="https://vas3k.com/blog/machine_learning/">https://vas3k.com/blog/machine_learning/</a></p>
</div><br>

คือการหาความสัมพันธ์ระหว่างสิ่งของคนละสิ่งกันว่ามีความสัมพันธ์อะไรซ่อนอยู่หรือไม่ยกตัวอย่างเช่น การที่ผู้ชายวัยกลางคนคนนึงนั้นได้ไปซื้อเบียร์ที่ซุปเปอร์มาร์เกตในวันศุกร์นั้น เขามักจะซื้อผ้าอ้อมติดมือมาด้วย(?) หมายความว่าเบียร์กับผ้าอ้อมนั้นมีความสัมพันธ์อะไรบางอย่างกันอยู่งั้นหรือ (เราจะมาไขปริศนาเรื่องนี้กันในหัวข้อเรื่อง: Apriori Algorithm)