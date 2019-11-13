# [Part 3.1] Linear Regression with Python



บทนี้จะเป็นMachine Learningภาคปฎิบัตินะครับ โดยเราจะใช้MLมาพยากรณ์ค่าตัวเลขกัน

เครื่องมือของเราคือ

- ภาษาpython(เพราะมี libraries  Machine Learningให้เลือกใช้ได้เลย)
- Jupyter Notebook (Text Editor)







**โจทย์** จากข้อมูลพื้นที่บ้านและราคาบ้านที่กำหนดให้จงหาราคาบ้านที่พื้นที่5000ตร.ม.

 

| พื้นที่บ้าน(ตร.ม) | ราคาบ้าน(บาท) |
| :----------: | :----------: |
|     2600     |   550,000    |
|     3000     |   565,000    |
|     3200     |   610,000    |
|     3600     |   680,000    |
|     4000     |   725,000    |





**วิธีทำ**

1.import librariesที่ต้องใช้เข้ามาก่อน

<div class="img-caption">
    <img src="../img/content_images/31_linear_regression(python)/lr-code1.JPG"/><br><br>
</div>

> numpy , pandas เอาไว้ใช้สำหรับจัดการข้อมูลของเรา
>
> sklearn เป็นlibrary ที่รวบรวมML แบบต่างๆเอาไว้ให้ใช้ ในที่นี้เรานำlinear modelมาใช้



2.นำdataที่เราจะใช้มาไว้ในตัวแปร จะได้หยิบใช้สะดวก

<div class="img-caption">
    <img src="../img/content_images/31_linear_regression(python)/lr-code2.JPG"/><br><br>
</div>)

<div class="img-caption">
    <img src="../img/content_images/31_linear_regression(python)/lr-code3.JPG"/><br><br>
</div>



3.แบ่งattributeเป็นFeatureกับ Label

<div class="img-caption">
    <img src="../img/content_images/31_linear_regression(python)/lr-code4.JPG"/><br><br>
</div>



4.สร้างlearning algorithmมาไว้ในตัวแปร จากนั้นโยนข้อมูลเข้าไปเทรน

<div class="img-caption">
    <img src="../img/content_images/31_linear_regression(python)/lr-code5.JPG"/><br><br>
</div>

> (ถ้าเทรนโมเดลสำเร็จจะขึ้นแบบนี้)
>
<div class="img-caption">
    <img src="../img/content_images/31_linear_regression(python)/lr-code6.JPG"/><br><br>
</div>



5. สร้างข้อมูล 5000 ขึ้นมาทดสอบ ตามโจทย์

<div class="img-caption">
    <img src="../img/content_images/31_linear_regression(python)/lr-code7.JPG"/><br><br>
</div>

> เหตุผลที่เราต้องreshape เพราะนั่นเป็นรูปแบบอาร์เรย์ที่โมเดลเรารับค่าได้



6.นำข้อมูลไปให้โมเดลเราพยากรณ์

<div class="img-caption">
    <img src="../img/content_images/31_linear_regression(python)/lr-code8.JPG"/><br><br>
</div>

ผลลัพธ์

<div class="img-caption">
    <img src="../img/content_images/31_linear_regression(python)/lr-code9.JPG"/><br><br>
</div>











และนี่คือcodeทั้งหมดของเรา

<div class="img-caption">
    <img src="../img/content_images/31_linear_regression(python)/lr-codeX.JPG"/><br><br>
</div>