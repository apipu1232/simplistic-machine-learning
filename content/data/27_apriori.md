# [Part 2.7] Apriori Algorithm: มาหาความสัมพันธ์ของสินค้ากันเถอะ

จากที่เราได้ติดค้างกันไว้ในหัวข้อ Unsupervised Learning ในส่วนของ Association Rule Learning การที่ผู้ชายวัยกลางคนนั้นซื้อเบียร์แล้วไปซื้อผ้าอ้อมนั้นมันหมายความว่า เบียร์กับผ้าอ้อมนั้นมีความสัมพันธ์กันจริงหรือ?ก่อนอื่นเรามารู้จักคำศัพท์ต่างๆ ที่เกี่ยวข้องกันก่อนดังนี้

## Support Count

Support Count คือจำนวนเหตุการณ์ของที่เราสนใจ (ก็อันเดียวกับ Event นั้นแหละ)

<br>
<div class="img-caption">
    <img src="../img/content_images/27_apriori/eq01.png"/><br><br>
</div><br>

เราลองมาหา Support Count จากตารางนี้กัน

<div class="img-caption">
    <img src="../img/content_images/27_apriori/table01.png"/><br><br>
</div><br>

จะได้ว่า

* SupportCount(Beer) = 3

* SupportCount(Apple, Cereal) = 2

* SupportCount(Eggs) = 3

* SupportCount(Eggs, Cereal) = 2

## Support

Support คืออัตราส่วนระหว่าง SupportCount กับจำนวนเหตุการณ์ทางหมดซึ่งในที่นี้ก็คือจำนวน TransID (Sample Space) หรือจริงๆ แล้วมันก็คือวิธี Probability ธรรมดานั่นแหละ

<div class="img-caption">
    <img src="../img/content_images/27_apriori/eq02.png"/><br><br>
</div><br>

<div class="img-caption">
    <img src="../img/content_images/27_apriori/table02.png"/><br><br>
</div><br>

* Support(Beer) = 3/4 = 0.75

* Support(Apple, Cereal) = 2/4 = 0.5

* Support(Eggs) = 3/4 = 0.75

* Support(Eggs, Cereal) = 2/4 = 0.5

## Minimum Support & Frequent Item Set

**Frequent Item Set** คือเซตของสินค้าที่ถูกซื้อบ่อย โดยที่เราจะกำหนดจาก **Minimum Support**

<div class="img-caption">
    <img src="../img/content_images/27_apriori/table03.png"/><br><br>
</div><br>

### ตัวอย่าง

#### หากเรากำหนดให้ Minimum Support เป็น 50%

เราก็จะได้ Frequent Item Set เป็น {Apple}, {Beer}, {Cereal}, {Eggs}, {Apple, Cereal}, {Beer, Cereal}, {Beer, Eggs}, {Cereal, Eggs}, {Beer, Cereal, Eggs}

#### หากเรากำหนดให้ Minimum Support เป็น 75%

เราก็จะได้ Frequent Item Set เป็น {Beer}, {Cereal}, {Eggs}, {Beer, Eggs}

เราสามารถทราบได้ว่าสินค้าชนิดใดถูกซื้อพร้อมกันบ่อย โดยพิจารณาจาก Frequent Item Set แต่ว่า Frequent Item Set นั้นไม่มีการบอกว่าสินค้าใดเป็นต้นเหตุให้สินค้าอีกชิ้นถูกซื้อ (เซตไม่มีลำดับ)

## Confidence

<div class="img-caption">
    <img style="width: 15vw;" src="../img/content_images/27_apriori/lhs_rhs.png"/><br><br>
</div><br>

Confidence คือค่าความเชื่อมั่นของกฎความสัมพันธ์ เป็นการบอกว่าความน่าจะเป็นที่ถ้าสินค้าที่เป็นข้อตั้ง (Premise) หรือ LHS (Left-hand side) ถูกซื้อ แล้วสินค้าที่เป็นข้อสรุป (Conclusion) หรือ RHS (Right-hand side) จะถูกซื้อตามด้วย ซึ่งเราสามารถคำนวณค่า Confident ได้จาก

<div class="img-caption">
    <img style="width: 50vw;" src="../img/content_images/27_apriori/eq03.png"/><br><br>
</div><br>

ถ้าได้อ่านเรื่อง Naïve Bayes ไปหรือมีความรู้เรื่อง Probability อยู่แล้วคุณอาจจะรู้สึกคุ้นๆ กับสมการนี้ จริงๆ แล้วสมการนี้มีก็คือสมการ Conditional Probability ธรรมดานี่แหละ

<div class="img-caption">
    <img style="width: 20vw;" src="../img/content_images/27_apriori/eq04.png"/><br><br>
    <p>Conditional Probability</p>
</div><br>

ตัวอย่างเช่น หากเราต้องการรู้ว่าโอกาสที่ลูกค้าที่ซื้อ Cereal แล้วไปซื้อ Beer ต่อนั้นเป็นเท่าไหร่

<div class="img-caption">
    <img src="../img/content_images/27_apriori/table02.png"/><br><br>
</div><br>

เราก็คำนวณได้จาก

<div class="img-caption">
    <img style="width: 60vw;" src="../img/content_images/27_apriori/eq05.png"/><br><br>
</div><br>

จะได้ว่า

<div class="img-caption">
    <img style="width: 40vw;" src="../img/content_images/27_apriori/eq06.png"/><br><br>
</div><br>

หมายความว่าโอกาสที่ลูกค้าที่ซื้อ Cereal แล้วไปซื้อ Beer ต่อนั้นมี 2/3 หรือประมาณ 66%

แบบนี้ก็หมายความว่า เราสามารถรู้ความสัมพันธ์ของสินค้าคนละสินค้าโดยมีลำดับได้แล้ว (สินค้าใดเป็นต้นเหตุให้อีกสินค้าถูกซื้อ)

หลายๆ คนอาจจะรู้สึกว่าค่า Confidence นั้นมันดีมากๆ แล้วแต่มันก็ยังมีข้อเสียอยู่

<div class="img-caption">
    <img style="width: 30vw;" src="../img/content_images/27_apriori/table04.png"/><br><br>
</div><br>

ลองดูตัวอย่างจาก Transaction นี้ครับ หากเราลองหาค่า Confidence ของ Coffee กับ Lattè เราจะได้ออกมาแบบนี้

<div class="img-caption">
    <img style="width: 30vw;" src="../img/content_images/27_apriori/table05.png"/><br><br>
</div><br>

ค่า Confidence ของ {Cake} => {Lattè} มีค่าสูงถึง 1 เลยที่เดียว นั้นแสดงว่า Cake ทำให้ Lattè นั้นขายดีขึ้นงั้นหรอ?

ในความเป็นจริงมัน**ไม่ใช่**แบบนั้นเพราะจริงๆ แล้ว Lattè นั้นขายดีอยู่แล้ว! เพราะ Cake กับ Lattè นั้น**ไม่**ได้มีความสัมพันธ์หรือเกี่ยวข้องกันเลย แล้วเราจะรู้ได้อย่างไรหล่ะ?

## Lift

Lift จะเป็นค่าที่ใช้ในการบอกว่า(เซตของ)สินค้าทั้งสองนั้นมีความสัมพันธ์หรือเกี่ยวข้องกันหรือไม่ เราสามารถหาค่า Lift ได้จากสมการนี้

<div class="img-caption">
    <img style="width: 50vw;" src="../img/content_images/27_apriori/eq07.png"/><br><br>
</div><br>

โดยค่า Lift จะมี 3 ช่วงดังนี้

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-4 col-md-12 img-caption">
            <img style="width: 15vw;" src="../img/content_images/27_apriori/eq08.png"/><br><br>
            <p>LHS กับ RHS มีความสัมพันธ์กันในเชิงบวก (Positive Correlation)</p>
        </div>
        <div class="col-lg-4 col-md-12 img-caption">
            <img style="width: 15vw;" src="../img/content_images/27_apriori/eq09.png"/><br><br>
            <p>LHS กับ RHS มีความสัมพันธ์กันในเชิงลบ (Negative Correlation)</p>
        </div>
        <div class="col-lg-4 col-md-12 img-caption">
            <img style="width: 15vw;" src="../img/content_images/27_apriori/eq10.png"/><br><br>
            <p>LHS กับ RHS ไม่มีความสัมพันธ์กัน (Independent)</p>
        </div>
    </div>
</div>

โดยหากเราหาค่า Lift ของ Cake กับ Lattè เราจะได้ว่า

<div class="img-caption">
    <img style="width: 30vw;" src="../img/content_images/27_apriori/table06.png"/><br><br>
</div><br>

ค่า Lift ของ Cake กับ Lattè นั้นเป็น 1 ซึ่งก็หมายความว่าทั้งสองสินค้านี้ไม่ได้มีความสัมพันธ์กันนั่นเอง (Lattè นั้นขายดีอยู่แล้ว)

<div class="img-caption">
    <img style="width: 30vw;" src="../img/content_images/27_apriori/table07.png"/><br><br>
</div><br>

หลังจากที่เราได้รู้จักคำศัพท์ต่างๆ ไปแล้วหากเราพิจารณาจาก Transaction ตารางนี้ หากเราทำซุปเปอร์มาร์เกต เราก็อาจจะตัดสินใจที่จะนำ Apple ไปวางขายอยู่ใกล้ๆ กับ Cereal เพราะค่า Lift ของทั้งสองสินค้านั้นมีค่ามากกว่า 1 ซึ่งหมายความว่ามีความสัมพันธ์ต่อกันในเชิงบวก (Apple ทำให้ Cereal ขายดีขึ้น)