# [Part 2.6] K-Means Clustering

K-Means Clustering นั้นเป็นหนึ่ง Algorithm สำหรับการทำ Clustering ที่เป็นที่นิยมมากตัวหนึ่ง ซึ่งกระบวนการคิดนั้นไม่ได้ยากเลย ซึ่งใช้เพียงแค่คณิตศาสตร์ระดับมัธยมเท่านั้น ลองไปดูวิธีการกันเลย

สมมติว่าเรามีข้อมูล(อะไรซักอย่าง?) อยู่ชุดหนึ่งที่มีค่า Attribute อยู่ 2 อย่างโดยเรานำชุดข้อมูลดังกล่าวมาทำ Scatter Plot บนระนาบ 2 มิติออกมาหน้าตาเป็นแบบนี้

<div class="img-caption">
    <img style="width: 30vw;" src="../img/content_images/26_k-means/011.png"/><br><br>
</div><br>

## Step 0: Assign K (Cluster amount) & Centroids point

ขั้นแรกในการทำ K-Means Clustering คือการกำหนดว่าเราต้องการจะแบ่งข้อมูลจากชุดข้อมูลของเราแยกออกมาเป็นกี่กลุ่มโดยทั่วไปจะเรียกค่าของจำนวนกลุ่มว่าค่า K ซึ่งในตัวอย่างนี้เราจะกำหนดให้ค่า K เป็น 3 จากนั้นให้เราทำการกำหนดค่าเริ่มต้นที่เป็นตัวแทนของแต่ละกลุ่ม (โดยทั่วไปจะสุ่มไปบนตำแหน่งใดๆ บนกราฟ) โดยเราจะเรียกค่าที่เป็นตัวแทนของกลุ่มว่า Centroid

หากสังเกตุในรูปแล้วก็จะพบว่ามีการกำหนดจุดสี 3 สี (แดง เขียว น้ำเงิน) เรียบร้อยแล้ว โดยทั้ง 3 จุดนี้จะเป็นตัวแทนของกลุ่มข้อมูลแต่ละกลุ่มที่เราต้องการจะแบ่ง

## Step 1: Grouping

<div class="container-fluid">
    <div class="row">
        <div class="img-caption col-lg-6 col-md-12">
            <img style="width: 25vw;" src="../img/content_images/26_k-means/021.png"/><br><br>
        </div><br>
        <div class="img-caption col-lg-6 col-md-12">
            <img style="width: 25vw;" src="../img/content_images/26_k-means/022.png"/><br><br>
        </div><br>
    </div>
</div>

จากนั้นให้เรานำข้อมูลทุกตัวหาระยะห่างเทียบกับจุด Centroid ทั้ง 3 จุด แล้วให้นำข้อมูลตัวนั้นๆ ไปจับกลุ่มกับจุด Centroid ที่ข้อมูลตัวนั้นอยู่ใกล้ที่สุด โดยวิธีการหาระยะห่างระหว่างจุดนั้นมีหลากหลายวิธีมาก สำหรับตัวอย่างนี้จะใช้ Euclidean Distance

## Step 2: Centroid Repositioning

<div class="container-fluid">
    <div class="row">
        <div class="img-caption col-lg-6 col-md-12">
            <img style="width: 25vw; margin-top: 10vh;" src="../img/content_images/26_k-means/031.png"/><br><br>
        </div><br>
        <div class="img-caption col-lg-6 col-md-12">
            <img style="width: 25vw;" src="../img/content_images/26_k-means/032.gif"/><br><br>
        </div><br>
    </div>
</div>

เมื่อเราทำการจับกลุ่มข้อมูลเสร็จให้เราทำการหาค่าพิกัดใหม่ของ Centroid แต่ละจุด โดยจะคำนวณจากค่าเฉลี่ย (Mean) ของข้อมูลในกลุ่มนั้นๆ เมื่อคำนวณเสร็จก็ให้ทำการย้ายจุด Centroid ไปยังพิกัดที่คำนวณได้

## Step 3: Repeat (Step 1, Step 2)

<div class="img-caption">
    <img style="width: 30vw;" src="../img/content_images/26_k-means/041.gif"/><br><br>
</div><br>

จากนั้นให้เราทำขั้นตอนที่ 1 และ 2 วนไปเรื่อยๆ เมื่อถึงจุดๆ นึง จะไม่มีการย้ายกลุ่มของข้อมูลตัวใดเลย ซึ่งนั่นก็หมายความว่าข้อมูลของเราถูกจัดกลุ่มเรียบร้อยแล้ว