# [Part 1.6] Supervised Learning : การเรียนรู้แบบมีผู้สอน

การเรียนรู้แบบมีผู้สอนในที่นี้หมายความว่า ? เรากำลังพูดถึง Machine Learning อยู่เพราะฉะนั้นผู้เรียนก็คงต้องเป็นคอมพิวเตอร์นี่แหละ แต่ว่าใครเป็นคนสอนกันหล่ะ ? แน่นอนว่าก็ต้องเป็นมนุษย์นี่แหละครับ ว่าแต่ว่ามนุษย์สอนอะไรให้คอมพิวเตอร์หล่ะ การสอนในที่นี้มันคือการที่เราบอก Label ของข้อมูลให้คอมพิวเตอร์รู้ว่า Attribute นั้นคือคำตอบของข้อมูลนะ

<center>
    <table class="tg">
    <tr>
        <th class="tg-0pky">color</th>
        <th class="tg-0pky">weight (gram)</th>
        <th class="tg-0pky">shape</th>
        <th class="tg-0pky">is_apple</th>
    </tr>
    <tr>
        <td class="tg-0pky">red</td>
        <td class="tg-0pky">182</td>
        <td class="tg-0pky">round</td>
        <td class="tg-0pky">true</td>
    </tr>
    <tr>
        <td class="tg-0pky">red</td>
        <td class="tg-0pky">178</td>
        <td class="tg-0pky">round</td>
        <td class="tg-0pky">true</td>
    </tr>
    <tr>
        <td class="tg-0pky">red</td>
        <td class="tg-0pky">180</td>
        <td class="tg-0pky">round</td>
        <td class="tg-0pky">true</td>
    </tr>
    <tr>
        <td class="tg-0pky">yellow</td>
        <td class="tg-0pky">183</td>
        <td class="tg-0pky">curved</td>
        <td class="tg-0pky">true</td>
    </tr>
    </table>
</center><br>

จากตารางด้านบนนี้หากเราต้องการที่จะสร้างโมเดลที่จะทำนายว่าข้อมูลผลไม้ที่จะรับเข้ามานั้นเป็นแอปเปิ้ลหรือไม่เราก็คงจะเลือก attribute color, weight, shape เป็น feature เพื่อที่จะใช้ในการสอน (Train) โดยกำหนดให้ attribute is_apple เป็นคำตอบ (Label นั้นแหละ)

หากจะให้สรุป Workflow ของ Supervised Learning ก็จะออกมาได้ประมาณนี้ครับ<br>

<div class="img-caption">
    <img src="../img/content_images/16_supervised/Supervised Learning Workflow.jpg"/><br><br>
    <p>Supervised Learning Workflow</a></p>
</div><br>

โดยที่

* Train Dataset :  ข้อมูลที่ใช้สำหรับการ Train Model

* Machine Learning Algorithm :  Algorithm ที่ใช้ในการ Train Model

* Trained Model - Model: ที่ถูกสร้างหลังจากการ Train

* Test Dataset :  ข้อมูลที่จะใช้ในการทดสอบประสิทธิภาพ Model

* Expected Result : ผลลัพธ์ที่คาดหวัง

## ประเภทของ Supervised Learning

นอกจากการที่เราสามารถแบ่ง Machine Learning ได้ออกมาหลากหลายประเภทแล้ว Supervised Learning นั้นก็สามารถแบ่งออกมาได้อีก 2 ประเภทย่อยๆ ได้อีกดังนี้

### Classification

<div class="img-caption">
    <img src="../img/content_images/16_supervised/Classification.jpg"/><br><br>
    <p>Source: <a href="https://vas3k.com/blog/machine_learning/">https://vas3k.com/blog/machine_learning/</a></p>
</div><br>

คือการจำแนกประเภทหรือในที่นี้ก็คือ Class (Label) นั่นแหละ ซึ่งพวกตัวอย่างหรือสถานการณ์ที่ผู้เขียนเคยยกตัวอย่างมาก่อนหน้านี้นั้นเป็นแบบ Classification ทั้งหมดเลย (e.g. โปรแกรมทำนายรูปสัตว์, โปรแกรมทำนายว่าฝนจะตกหรือไม่ เป็นต้น) ซึ่ง**การทำ Classification นั้นจะทำกับข้อมูลแบบ Discrete และข้อมูลจำพวก Categorical ทั้งหมด** โดยจะมีตัวอย่างการทำ Classification และคำอธิบายเพิ่มเติม สามารถดูได้จากหัวข้อเรื่อง **Naive Bayes**, **K-Nearest Neighborhood (KNN)**, **Decision Tree**, **Support Vector Machine (SVM)**

### Regression

<div class="img-caption">
    <img src="../img/content_images/16_supervised/Regression.png"/><br><br>
    <p>Source: <a href="https://en.wikipedia.org/wiki/Linear_regression">https://en.wikipedia.org/wiki/Linear_regression</a></p>
</div><br>

คือการหาสมการถดถอยหรือถ้าให้อธิบายง่ายๆ ก็คือการหาสมการบางอย่างที่จะทำให้ใช้งานกับงานที่เราต้องการโดยให้เกิดความผิดพลาด (Error) น้อยที่สุด (e.g. การสร้างสมการทำนายราคาหุ้น เป็นต้น) ซึ่ง**การทำ Regression นั้นจะทำกับข้อมูลแบบ Continuous เท่านั้น** โดยจะมีตัวอย่างการทำ Regression และคำอธิบายเพิ่มเติม สามารถดูได้จากหัวข้อเรื่อง **Linear Regression**