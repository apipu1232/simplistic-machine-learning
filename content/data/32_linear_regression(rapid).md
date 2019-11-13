# [Part 3.2] Linear Regression with RapidMiner Studio



บทนี้จะเป็นMachine Learningภาคปฎิบัตินะครับ โดยเราจะใช้MLมาพยากรณ์ค่าตัวเลขกัน

เครื่องมือของเราคือ

- RapidMiner Studio(สามารถนำMLมาใช้ได้แบบไม่ต้องเขียนcode)



**โจทย์** จากข้อมูลพื้นที่บ้านและราคาบ้านที่กำหนดให้จงหาราคาบ้านที่พื้นที่5000ตร.ม.



| พื้นที่บ้าน(ตร.ม) | ราคาบ้าน(บาท) |
| :----------: | :----------: |
|     2600     |   550,000    |
|     3000     |   565,000    |
|     3200     |   610,000    |
|     3600     |   680,000    |
|     4000     |   725,000    |



**วิธีทำ**

1.เปิดโปรแกรมRapidMiner Studioขึ้นมา แล้วเราก็จะเห็นโปรแกรมหน้าตาแบบนี้

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid1.JPG"/><br><br>
</div>

2.ไปimportข้อมูลที่เราจะใช้จากแท็บ Repository

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid2.JPG"/><br><br>
</div>

> (หน้าตาข้อมูลที่เราจะใช้)
>
<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid3.JPG"/><br><br>
</div>

>
> ​															  ข้อมูลสำหรับเทรนโมเดล
>

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid4.JPG"/><br><br>
</div>

>
> ​															  ข้อมูลสำหรับทดสอบโมเดล

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid5.JPG"/><br><br>
</div>



3.ลากข้อมูลลงไปในworkspaceของเรา หรือก็คือแท็บProcess

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid6.JPG"/><br><br>
</div>



4.ตัวโปรแกรมยังไม่รู้ว่าข้อมูลของเราcolumnไหนเป็นLabelทำให้เทรนโมเดลไม่ได้ เราจึงต้องเซตค่าให้มันก่อน

ด้วยOperatorที่ชื่อ **Set Role**

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid7.JPG"/><br><br>
</div>

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid8.JPG"/><br><br>
</div>

ยัง ยังไม่เสร็จ เราต้องไปคลิกที่Set Roleแล้วตั้งค่าSet Roleอีกที ด้วยแท็บParameter

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid9.JPG"/><br><br>
</div>



5.หลังจากเตรียมข้อมูลของเราพร้อมแล้วก็ไปหยิบโมเดลมาเทรนได้เลย!

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid10.JPG"/><br><br>
</div>

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid11.JPG"/><br><br>
</div>

> ค....แค่นี้แหละ แต่ถ้าเราอยากเห็นหน้าตาโมเดลที่เราเทรนออกมา 
>
> สามารถเอาโหนดที่ชื่อmodไปต่อกับres 
>
> แล้วกดRunดูได้

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid12.JPG"/><br><br>
</div>

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid13.JPG"/><br><br>
</div>



<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid14.JPG"/><br><br>
</div>



6.นำมาโมเดลไปใช้งาน โดยเราจะนำข้อมูลtestมาSet Roleให้เรียบร้อย แล้วใช้Operatorที่ชื่อ **Apply Model**

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid15.JPG"/><br><br>
</div>



<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid16.JPG"/><br><br>
</div>



**ผลลัพธ์** 

<div class="img-caption">
    <img src="../img/content_images/21_linear_regression(rapid)/lr-rapid17.JPG"/><br><br>
</div>

ที่column **prediction(Price)**คือค่าที่โมเดลเราพยากรณ์ออกมา เมื่อ Area = 5000