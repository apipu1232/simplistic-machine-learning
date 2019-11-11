# [Part 2.5] Support Vector Machine

<div class="img-caption">
    <img src="../img/content_images/25_svm/svm1.png"/><br><br>
</div>

Support Vector Machine หรือ SVM เป็นอัลกอริทึมที่ช่วยในการจำแนกข้อมูล (Classification) โดยแบ่งข้อมูลที่มีการ Label ไว้ด้วย Hyperplane <br> โดยที่ SVM นั้น เหมาะกับ dataset ที่มี feature เยอะๆ แต่ขนาดข้อมูลไม่เยอะมาก นอกจากนี้ SVM ยังมีข้อดีตรงที่ไม่ค่อยเกิดปัญหา overfitting ด้วย

## Hyperplane
บางท่านอาจจะสงสัยว่า hyperplane คืออะไร hyperplane คือระนาบที่มีมิติน้อยกว่า spaceที่ล้อมรอบตัวมันอยู่ ถ้าspace เป็น 3d hyperplaneคือ ระนาบ 2 มิติ, ถ้าspace เป็น2d hyperplane คือ เส้นตรง 1 มิติ

## จะเลือกโมเดลไหนดี ?

<div class="img-caption">
    <img src="../img/content_images/25_svm/svm0.png"/><br><br>
</div>

คำถามก็คือแล้วเราจะเลือกโมเดลไหนดี สีเขียว หรือ สีน้ำเงิน ? <br> คำตอบคือเราควรจะเลือกโมเดลที่ไม่ overfitting หรือโมเดลที่ไม่จำรูปแบบของข้อมูล training มากเกินไป จากตัวอย่างจะเห็นว่าเส้นสีน้ำเงิน จะมีจุดหนึ่งที่ linear model อยู่ใกล้กับข้อมูลแต่ละคลาสมากเกินไป นั่นคือ ถ้ามีข้อมูลใหม่ที่อยู่ห่างออกไปสักเล็กน้อยก็จะทำนายผิดไปพลาดไป ดังนั้นในตัวอย่างนี้จึงควรจะเลือกโมเดลสีเขียว

## Margin
วิธีการที่ใช้ในการหาเส้นแบ่งที่ดีที่สุดคือการเพิ่มเส้นขอบ(margin) ให้กับเส้นแบ่งทั้งสองข้าง และสัมผัสกับค่าข้อมูลใน feature space ที่ใกล้ที่สุด ดังนั้นเส้นแบ่งที่มีขอบกว้างทุดสุดจึงเป็นเส้นแบ่งที่ดีที่สุด และเรียกตำแหน่งที่ใกล้ที่สุดจากการเพิ่มขอบนี้ว่า Support Vector

## Kernel function

<div class="img-caption">
    <img src="../img/content_images/25_svm/svm-kernel.png"/><br><br>
</div>

คือการมี kernel function ที่สามารถเปลี่ยนข้อมูลที่มีมิติ (dimension) ที่ต่ำกว่าให้มีมีติสูงขึ้นเพื่อให้การแบ่งข้อมูลแบบ linear model ได้ ดังแสดงตัวอย่างในรูป จะเห็นว่าในรูป (a) จะมีข้อมูลอยู่ 2 คลาส คือสี่เหลี่ยม และ วงกลม
### แล้วเราจะแบ่ง 2 คลาสนี้ยังไงล่ะ?
จากรูป (a) จะเห็นว่า ไม่สามารถแบ่งข้อมูลได้ด้วยจุดจุดเดียว สิ่งที่ kernel function ทำก็คือ การเพิ่มมิติเข้าไป จากรูป (b) ได้ทำการเพิ่ม feature x<sup>2</sup> ซึ่งแสดงการกระจายตัวของข้อมูล เข้าไป ทำให้สามารถแบ่งข้อมูลออกเป็น 2 คลาสได้ด้วยเส้นตรงเพียงเส้นเดียว
### ถ้าเป็น 2 มิติ จะทำยังไงดี

<div class="img-caption">
    <img src="../img/content_images/25_svm/svm-kernel2.png"/><br><br>
</div>

จากรูป เราไม่สามารถลากเส้นตรงเพื่อแบ่ง 2 คลาสในรูปนี้ได้ สิ่งที่เราจะทำก็คือเพิ่มแกน z เข้าไป โดยที่กำหนดให้ z = x<sup>2</sup> + y<sup>2</sup> หากเขียนให้อยู่ในรูปของแกน z จะสามารถขีดเส้นเพื่อแบ่งคลาสได้แล้ว

<div class="img-caption">
    <img src="../img/content_images/25_svm/svm-kernel3.png"/><br><br>
</div>

เมื่อแปลงกลับมาให้อยู่ในมิติเดิม จะได้ดังรูปข้างล่าง

<div class="img-caption">
    <img src="../img/content_images/25_svm/svm-kernel4.png"/><br><br>
</div>

หาก plot ให้อยู่ในรูป3มิติ จะได้เป็น

<div class="img-caption">
    <img src="../img/content_images/25_svm/svm-kernel5.png"/><br><br>
</div>
