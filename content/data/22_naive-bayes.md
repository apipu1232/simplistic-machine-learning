# [Part 2.2] Naïve Bayes: ความน่าจะเป็นแบบเบย์ๆ

Naïve Bayes เป็นหนึ่งในวิธีการทำ Classification ที่เป็นที่นิยมมาก ซึ่ง Naïve Bayes นั้นมีพื้นฐานมาจากเรื่อง Proability นี่แหละ เพราะฉะนั้นเรามาทวนเรื่อง Probability กันก่อนเลยดีกว่า

<div class="img-caption">
    <img src="../img/content_images/22_naive-bayes/weather.png"/><br><br>
    <p>Source: <a href="http://dataminingtrend.com/2014/naive-bayes/">http://dataminingtrend.com/2014/naive-bayes/</a></p>
</div><br>

## Basic Probability

จากตารางข้างต้น หากต้องการทราบว่าความน่าจะเป็นที่ฝนจะตกนั้นมีค่าเป็นเท่าใด เราก็สามารถคำนวณง่ายๆ จากสูตร
<div class="img-caption">
    <img style="width: 15vw;" src="../img/content_images/22_naive-bayes/eq01.png"/><br><br>
</div><br>

โดยที่

* P(E): ความน่าจะเป็นของเหตุการณ์ที่เราสนใจ (Proability)

* n(E): จำนวนครั้งที่เกิดเหตุการณ์ที่เราสนใจ (Event)

* n(S): จำนวนครั้งที่เกิดเหตุการณ์ทั้งหมด (Sample Space)

จะได้ว่า
<div class="img-caption">
    <img style="width: 15vw;" src="../img/content_images/22_naive-bayes/ans01.png"/><br><br>
</div><br>

## Conditional Proability

หลังจากที่เราหาค่าความน่าจะเป็นอย่างง่ายๆ ได้แล้วต่อไปถ้าหากเราอยากหาความน่าจะเป็นที่ถ้าฝนตกแล้วมีลมด้วยหล่ะ? เรามาดู ความน่าจะเป็นแบบมีเงื่อนไขกัน
<div class="img-caption">
    <img style="width: 30vw;" src="../img/content_images/22_naive-bayes/eq02.png"/><br><br>
</div><br>

โดยที่

* P(A | B): ความน่าจะเป็นที่**ถ้า**ฝนตก**แล้ว**จะมีลม (Conditional Proability)<br>
***P(A | B) อ่านว่า P(A) given B***

* n(A ∩ B): ความน่าจะเป็นที่ฝนตก**และ**มีลม (Joint Probability)

* n(B): ความน่าจะเป็นที่ฝนจะตก (Proability)

<br>
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-4 p-5 col-md-12 img-caption">
            <img style="height: 60%; width: 120%;" src="../img/content_images/22_naive-bayes/ans021.png"/><br><br>
            <p>หาความน่าจะเป็นที่ฝนจะตก</p>
        </div>
        <div class="col-lg-4 p-5 col-md-12 img-caption">
            <img style="height: 60%; width: 120%;" src="../img/content_images/22_naive-bayes/ans022.png"/><br><br>
            <p>หาความน่าจะเป็นที่ฝนจะตกและมีลม</p>
        </div>
        <div class="col-lg-4 p-5 col-md-12 img-caption">
            <img style="height: 60%; width: 120%;" src="../img/content_images/22_naive-bayes/ans023.png"/><br><br>
            <p>หาความน่าจะเป็นที่ถ้าฝนตกแล้วจะมีลม</p>
        </div>
    </div>
</div>

## Bayes Theorem

หลังจากที่ปูพื้นกันมานาน ในที่สุดก็เข้าเรื่องของ Bayes กันสักที

จากสมการ Conditional Probability

<div class="img-caption">
    <img style="width: 30vw;" src="../img/content_images/22_naive-bayes/eq02.png"/><br><br>
</div><br>

สมการนี้จะเป็นการหาความน่าจะเป็นที่จะเกิดเหตุการณ์ A เมื่อเกิดเหตุการณ์ B (ถ้า B เกิดแน่ๆ แล้วโอกาสที่ A จะเกิดด้วยมีเท่าไหร่) ถ้าหากเราทำการมองย้อนกลับเป็น ความน่าจะเป็นที่จะเกิดเหตุการณ์ B เมื่อเกิดเหตุการณ์ A ดู เราก็จะได้ว่า

<div class="img-caption">
    <img style="width: 30vw;" src="../img/content_images/22_naive-bayes/eq03.png"/><br><br>
</div><br>

จะเห็นได้ว่าสองสมการนี้มีส่วนที่เหมือนกันอยู่คือ P(A ∩ B) โดยถ้าหากเราลองย้ายข้างสมการโดยให้ P(A ∩ B) เป็นคำตอบเราจะได้ออกมาเป็น

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-6 p-5 col-md-12 img-caption">
            <img style="width: 30vw;" src="../img/content_images/22_naive-bayes/eq041.png"/><br><br>
            <p>P(B) given A</p>
        </div>
        <div class="col-lg-6 p-5 col-md-12 img-caption">
            <img style="width: 30vw;" src="../img/content_images/22_naive-bayes/eq042.png"/><br><br>
            <p>P(A) given B</p>
        </div>
    </div>
</div>

ซึ่งจะหมายความว่า

<div class="img-caption">
    <img src="../img/content_images/22_naive-bayes/eq05.png"/><br><br>
</div><br>

จัดรูปใหม่จะได้เป็น

<div class="img-caption">
    <img src="../img/content_images/22_naive-bayes/eq06.png"/><br><br>
    <p>Bayes Theorem</p>
</div><br>

ก็จะได้เป็นสมการที่เรียกว่า Bayes Theorem ออกมานั่นเอง โดยที่แต่ละส่วนจะมีชื่อเรียกดังนี้

* P(B | A): ความน่าจะเป็นที่ข้อมูลที่มี ***attribute เป็น A*** จะมี ***class เป็น B*** (Posterior Probability)

* P(A | B): ความน่าจะเป็นที่ข้อมูลที่มี ***class เป็น B*** จะมี ***attribute เป็น A*** (Likelihood)

* P(B): ความน่าจะเป็นของข้อมูล ***class B*** (Prior Probability)

หากเรานำข้อมูลจากตารางด้านบนมา Train เป็น Model เราก็จะได้ผลลัพธ์เป็นดังนี้ (ให้ attribute play เป็น label)

<div class="img-caption">
    <img src="../img/content_images/22_naive-bayes/model.png"/><br><br>
    <p>Source: <a href="http://dataminingtrend.com/2014/naive-bayes/">http://dataminingtrend.com/2014/naive-bayes/</a></p>
</div><br>

ที่นี้เรามาลองทดสอบ Model นี้กันโดยเราจะทำการป้อนข้อมูลเป็น

* outlook (a1): sunny

* temperature (a2): hot

* humidity (a3): high

* windy (a4): FALSE

โดยกำหนดให้ B คือ class (yes / no)

หากเราต้องการจะหา P(B | A) เราก็สามารถหาได้จาก P (B | A) = (P (A | B) * P (B)) / P (A)

แต่เนื่องจากว่าเรามี Attribute หลายอันเราจึงต้องนำความน่าจะเป็นของ Attribute ทั้งหมดมาคูณกันจะทำให้ได้ว่า

P(A | B) = P(a1 | B) * P(a2 | B) * P(a3 | B) * P(a4 | B)

P(A) = P(a1) * P(a2) * P(a3) * P(a4)

การที่เราจะรู้ได้ว่าคำตอบของข้อมูลที่เราป้อนเข้ามาเป็น Class ใด เราจะต้องหาทั้ง P(B = Yes | A) และ P(B = No | A) แล้วดูว่าค่าของ Class ไหนมากกว่ากัน ให้ถือว่า Class นั้นคือคำตอบ ซึ่งจากสมการด้านบนเราจะเห็นว่าส่วนของ P(A) นั้นซ้ำกัน เราจึงไม่จำเป็นต้องคิดให้เสียเวลา

<hr>

P(B = Yes | A) = P(a1 = sunny | B = Yes) * P(a2 = hot | B = Yes) * P(a3 = high | B = Yes) * P(a4 = FALSE | B = Yes) * P(B)

P(B = Yes | A) = 0.22 * 0.22 * 0.33 * 0.67 * 0.64

P(B = Yes | A) = 0.0068

<hr>

P(B = No | A) = P(a1 = sunny | B = No) * P(a2 = hot | B = No) * P(a3 = high | B = No) * P(a4 = FALSE | B = No) * P(B)

P(B = No | A) = 0.60 * 0.40 * 0.80 * 0.40 * 0.36

P(B = No | A) = 0.0276

<hr>

พบว่า P(B = No | A) > P(B = Yes | A) ซึ่งนั่นหมายความว่าข้อมูลที่เราป้อนเข้ามานี้มี Class เป็น No