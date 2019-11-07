# Decision Tree



Decision Treeนั้นเป็นLearning Algorithm ที่สามารถนำมาใช้ในการทำ**Classification**ได้ 

ยกตัวอย่างเช่น

<div class="img-caption">
    <img src="../img/content_images/23_decision/dt1.jpg"/><br><br>
</div>

จากข้อมูลในตารางประกอบด้วย 5 attribute คือ

- outlook แสดงสภาพภูมิอากาศ ประกอบด้วย 3 ค่า คือ sunny, overcast, rainy

- temperature แสดงอุณหภูมิ ประกอบด้วย 3 ค่า คือ hot, mild, cool
- humidity แสดงค่าความชื้นในอากาศ ประกอบด้วย 2 ค่า คือ high, normal
- windy แสดงว่าเป็นวันที่ลมแรงหรือไม่ ประกอบด้วย 2 ค่า คือ TRUE, FALSE
- play แสดงการจัดแข่งขันกีฬา ซึ่งเป็นคลาส ประกอบด้วย 2 ค่า คือ yes, no





**โจทย์ของเราคือ นำFeature(outlook,temperature,humidity,windy)มาวิเคราะห์ **

**ว่าLabel(play) ควรจะมีผลลัพธ์อยู่ในClassไหน(yes หรือ no)**

  



## หลักการทำงานของDecision Tree

การสร้างโมเดล decision tree จะทำการคัดเลือกแอตทริบิวต์ที่มีความสัมพันธ์กับคลาสมากที่สุดขึ้นมาเป็นโหนดบนสุดของ tree (root node) หลังจากนั้นก็จะหาโหนดถัดไปเรื่อยๆ 

ในการหาความสัมพันธ์ของแอตทริบิวต์นี้จะใช้ตัววัด ที่เรียกว่า **Information Gain (IG)** 



> ค่านี้คำนวณได้จากสมการดังนี้
>
> IG (parent, child) = entropy(parent) – [p(c1) × entropy(c1) + p(c2) × entropy(c2) + …]
>
> โดยที่ entropy(c1) = -p(c1) log p(c1) และ p(c1) คือ ค่าความน่าจะเป็นของ c1



### เรามาคำนวณ(ด้วยมือ)กันเลย!!!

1. คำนวณค่า IG ของแอตทริบิวต์ outlook ดังในรูป

<div class="img-caption">
    <img src="../img/content_images/23_decision/dt2.jpg"/><br><br>
</div>

​    	แสดงค่าความน่าจะเป็นเมื่อใช้แอตทริบิวต์ outlook

สามารถคำนวณค่า IG ได้ดังนี้

> entropy (parent) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.64 × log2(0.64) + 0.36 × log2(0.36)]
>
> = -[0.64 × -0.64 + 0.36 × -1.47]
>
> = 0.94
>
> 
>
> entropy(outlook = sunny) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.4 × log2(0.4) + 0.6 × log2(0.6)]
>
> = -[0.4 × -1.32 + 0.6 × -0.74]
>
> = 0.97
>
> 
>
> entropy(outlook = overcast) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[1.0 × log2(1.0) + 0 × log2(0)]
>
> = -[1.0 × 0 + 0 × 1]
>
> = 0
>
> 
>
> entropy(outlook = rainy) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.6 × log2(0.6) + 0.4 × log2(0.4)]
>
> = -[0.6 × -0.74 + 0.4 × -1.32]
>
> = 0.97



IG(parent, child) = entropy (parent) – [p(outlook = sunny) × entropy(outlook = sunny)+p(outlook = overcast) × entropy(outlook = overcast)+p(outlook = rainy) × entropy(outlook = rainy)]

= 0.94 – [0.35 × 0.97 + 0.30 × 0 + 0.35 × 0.97]

= 0.96 – 0.68

= **0.28**





2. คำนวณค่า IG ของแอตทริบิวต์ temperature ดังในรูป

<div class="img-caption">
    <img src="../img/content_images/23_decision/dt3.jpg"/><br><br>
</div>

​													แสดงค่าความน่าจะเป็นเมื่อใช้แอตทริบิวต์ temperature

สามารถคำนวณค่า IG ได้ดังนี้

> entropy (parent) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.64 × log2(0.64) + 0.36 × log2(0.36)]
>
> = -[0.64 × -0.64 + 0.36 × -1.47]
>
> = 0.94
>
> 
>
> entropy(temperature = cool) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.75 × log2(0.75) + 0.25 × log2(0.25)]
>
> = 0.81
>
> 
>
> entropy(temperature = hot) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.5 × log2(0.5) + 0.5× log2(0.5)]
>
> = 1
>
> 
>
> entropy(temperature = mild) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.67 × log2(0.67) + 0.33 × log2(0.33)]
>
> = 0.91



IG(parent, child) = entropy (parent) – [p(temperature = cool) × entropy(temperature = cool)+p(temperature = hot) × entropy(temperature = hot)+p(temperature = mild) × entropy(temperature = mild)]

= 0.94 – [0.29 × 0.81 + 0.29 × 1 + 0.42 × 0.91]

= 0.96 – 0.91

= **0.05**





3. คำนวณค่า IG ของแอตทริบิวต์ humidiy ดังในรูป 

<div class="img-caption">
    <img src="../img/content_images/23_decision/dt4.jpg"/><br><br>
</div>

​			แสดงค่าความน่าจะเป็นเมื่อใช้แอตทริบิวต์ humidity

สามารถคำนวณค่า IG ได้ดังนี้

> entropy (parent) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.64 × log2(0.64) + 0.36 × log2(0.36)]
>
> = -[0.64 × -0.64 + 0.36 × -1.47]
>
> = 0.94
>
> 
>
> entropy(humidity = high) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.43 × log2(0.43) + 0.57 × log2(0.57)]
>
> = 0.99
>
> 
>
> entropy(humidity = normal) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.86 × log2(0.86) + 0.14 × log2(0.14)]
>
> = 0.58



IG(parent, child) = entropy (parent) – [p(humidity = cool) × entropy(humidity = cool)+p(humidity = hot) × entropy(humidity = hot)]

= 0.94-[0.5 × 0.99 + 0.5 × 0.58]

= 0.96 – 0.79

= **0.17**





4. คำนวณค่า IG ของแอตทริบิวต์ windy ดังในรูป 

<div class="img-caption">
    <img src="../img/content_images/23_decision/dt5.jpg"/><br><br>
</div>

 													แสดงค่าความน่าจะเป็นเมื่อใช้แอตทริบิวต์ windy

 

สามารถคำนวณค่า IG ได้ดังนี้

> entropy (parent) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.64 × log2(0.64) + 0.36 × log2(0.36)]
>
> = -[0.64 × -0.64 + 0.36 × -1.47]
>
> = 0.94
>
> 
>
> entropy(windy = FALSE) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.75 × log2(0.75) + 0.25 × log2(0.25)]
>
> = 0.81
>
> 
>
> entropy(windy = TRUE) = -p(yes) × log2 p(yes) – p(no) × log2 p(no)
>
> = -[0.5 × log2(0.5) + 0.5 × log2(0.5)]
>
> = 1



IG(parent, child) = entropy (parent) – [p(windy = FALSE) × entropy(windy = FALSE)+p(windy = TRUE) × entropy(windy = TRUE)]

= 0.94-[0.57 × 0.81 + 0.43 × 1]

= 0.96 – 0.89

= **0.07**





5. จากการคำนวณค่า IG ของทุกแอตทริบิวต์พบว่าค่า IG ของแอตทริบิวต์ outlook มีค่ามากที่สุด (0.28) ดังนั้นจึงเลือกแอตทริบิวต์ outlook ขึ้นมาเป็นโหนด root 

<div class="img-caption">
    <img src="../img/content_images/23_decision/dt2.jpg"/><br><br>
</div

   ณ ขั้นนี้เราจะเห็นว่าข้อมูลที่อยู่ในโหนดที่แอตทริบิวต์ outlook = overcast มีคลาสเดียวกันหมดคือ play = yes ดังนั้นโหนดนี้ไม่ต้องทำการแตกกิ่งต่อไปอีกแล้ว 

   แต่โหนดอื่นๆ จะ**ต้องทำการแตกกิ่งออกไปจนข้อมูลในแต่ละโหนดมีคลาสคำตอบเดียวกัน**

   

   ยกตัวอย่างการแตกกิ่งออกจากโหนดที่มีแอตทริบิวต์ outlook = sunny 
   
   ให้มอง โหนด outlook = sunny เป็น parent แล้วหาค่า IG ด้วยวิธีเดิม 
   
   จากนั้นหยิบตัวที่ค่าIGสูงสุดมาต่อ จะได้ผลลัพธ์แบบในรูป

<div class="img-caption">
    <img src="../img/content_images/23_decision/dt6.jpg"/><br><br>
</div

​			

> ยังเหลือ outlook = rainy อีกนะเนี่ย...
>





**ข้อดีของโมเดลนี้**

- เป็นโมเดลที่เข้าใจง่าย สามารถแปลความจากโมเดลได้เลย เช่น ถ้าวันไหนที่สภาพอากาศเป็นแบบ overcast แล้วจะมีการจัดแข่งขันกีฬา

- โมเดลที่สร้างได้คัดเลือกแอตทริบิวต์ที่มีความสัมพันธ์กับคลาสคำตอบมาแล้ว ดังนั้นอาจจะไม่ได้ใช้ทุกแอตทริบิวต์ในข้อมูล training









ในปัจจุบันนี้เราสามารถใช้ซอฟต์แวร์ open source เพื่อสร้างโมเดล decision tree ได้อย่างง่ายๆ แถมสามารถแสดงโมเดลให้เป็นรูปแบบที่สวยงามได้อีกด้วย ตัวอย่างเช่น

<div class="img-caption">
    <img src="../img/content_images/23_decision/dt7.jpg"/><br><br>
</div

​        												โมเดล decision tree จากซอฟต์แวร์ Weka



<div class="img-caption">
    <img src="../img/content_images/23_decision/dt8.jpg"/><br><br>
</div

​       									โมเดล decision tree จากซอฟต์แวร์ RapidMiner Studio 6

