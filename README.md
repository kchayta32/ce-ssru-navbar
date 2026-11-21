# CE SSRU Web UI Motion & Stylesheets

Stylesheets สำหรับเพิ่ม UI Motion และ Animation ให้กับเว็บไซต์สาขาวิชาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยราชภัฏสวนสุนันทา (CE | SSRU)

## การใช้งานผ่าน jsDelivr CDN

### 1. Navbar (`ce-navbar.css`)
```html
<link href="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.0.1/ce-navbar.css" rel="stylesheet">
```

### 2. หน้างานประชุมวิชาการระดับชาติ (`page/ce-conf-national.css`)
รองรับทั้งเวอร์ชันภาษาไทย (`.ce-conf-wrap`) และเวอร์ชันภาษาอังกฤษ (`.ce-conf-wrap.ce-conf-en`)
```html
<link href="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.0.3/page/ce-conf-national.css" rel="stylesheet">
```

### 3. หน้างานประชุมวิชาการระดับนานาชาติ (`page/ce-conf-international.css`)
รองรับทั้งเวอร์ชันภาษาไทย (`.ce-intl-wrap`) และเวอร์ชันภาษาอังกฤษ (`.ce-intl-wrap.ce-intl-en`)
```html
<link href="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.0.4/page/ce-conf-international.css" rel="stylesheet">
```

### 4. หน้าข่าวสารและกิจกรรม (`news/ce-news.css`)
รองรับการแสดงผลอีโมจิผ่าน CSS Unicode (`@charset "UTF-8"`) เพื่อเลี่ยงปัญหา CMS/Froala ตัดอิโมจิเป็น `???` พร้อม UI Motion และ Pure-CSS `<details>` Lightbox ที่ไม่พึ่ง `#hash` (รองรับเว็บที่มี `<base href="...">`)
```html
<link href="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.0.7/news/ce-news.css" rel="stylesheet">
```

### 5. หน้าคู่มือนักศึกษาใหม่ (`event/ce-handbook.css`)
แสดงรายการคู่มือนักศึกษาใหม่ ประจำปีการศึกษา 2562–2569 พร้อม motion ระหว่างเลือกปีการศึกษา, ป้าย `NEW` สำหรับฉบับล่าสุด และไอคอนผ่าน CSS Unicode
```html
<link href="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.0.8/event/ce-handbook.css" rel="stylesheet">
```

### 6. หน้ากิจกรรมสาขาวิชาและประกาศกิจกรรมวิชาการ (`page/ce-activities.css`)
รองรับทั้งเวอร์ชันภาษาไทย (`.ce-act-wrap`) และเวอร์ชันภาษาอังกฤษ (`.ce-act-wrap.ce-act-en`) แบ่งออกเป็น 2 ส่วนหลัก ได้แก่ **กิจกรรมภายในสาขาที่กำลังจะเกิดขึ้น** (แบบ Calendar Date Block + `<details>` ขยายดูรายละเอียดกำหนดการและสถานที่) และ **ประกาศกิจกรรมวิชาการ** ประจำปีการศึกษา 2566–2569 โดยเปิดแสดงปีการศึกษาล่าสุด (2569) อัตโนมัติ และซ่อนปีการศึกษาก่อนหน้า (2568–2566) ไว้ใน `<details>` accordion พร้อม UI motion, ไอคอนผ่าน CSS SVG mask (ปลอดภัยต่อ Froala CMS) และเชื่อมต่อทั้งหมดผ่าน `https://`
```html
<link href="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.1.0/page/ce-activities.css" rel="stylesheet">
```

### 7. หน้าสถานที่ฝึกประสบการณ์วิชาชีพ (`page/ce-intern.css`)
ออกแบบใหม่สำหรับ CMS/Froala พร้อมคลังไอคอนองค์กร 39 แห่ง (`page/intern-icons/`), Dual-Row Marquee Motion แสดงโลโก้และชื่อสถานประกอบการใน Section แรก, ตารางรายละเอียดที่อยู่และเบอร์โทรคลิกโทรออกได้ใน Section ถัดมา และ Scroll-Driven Reveal Animation (`animation-timeline: view()`) แสดงผลทีละ Section เมื่อเลื่อนเมาส์ โดยโหลดไอคอนทั้งหมดผ่าน CSS เพื่อคุมขนาด HTML ให้ปลอดภัยต่อขีดจำกัด `TEXT` (64KB) ของฐานข้อมูล CMS และเชื่อมต่อทั้งหมดผ่าน `https://`
```html
<link href="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.1.2/page/ce-intern.css" rel="stylesheet">
```

### 8. แบนเนอร์หน้าแรก: สถานที่ฝึกประสบการณ์วิชาชีพ (`banner_intern_2066x761.png`)
แบนเนอร์ขนาด `2066 × 761 px` (`72 DPI`) สำหรับสไลด์หน้าแรก (`home_updated_20261121.txt`) เชื่อมต่อไปยังหน้า `/page/intern` วางต่อท้ายสไลด์ `เปิดรับสมัครรอบ Portfolio`
```html
<img src="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.1.3/banner_intern_2066x761.png" alt="สถานที่ฝึกประสบการณ์วิชาชีพ">
```

### 9. ระบบยืม–คืนอุปกรณ์ IoT (`page/borrow-app.html`, `page/ce-borrow.css`, `page/ce-borrow.js`)
ออกแบบใหม่ทั้งระบบสำหรับ CMS/Froala โดยรันหน้าแอปผ่าน **GitHub Pages (`https://kchayta32.github.io/ce-ssru-navbar/page/borrow-app.html`)** ร่วมกับ **jsDelivr (`https://`)** เพื่อเลี่ยงข้อจำกัดที่ Froala ตัดแท็ก `<script>` ออกจากหน้า CMS (`borrow_updated_20261121.txt` ใช้ `<iframe>` ฝังแบบปลอดภัย) ประกอบด้วย 3 โหมด (**ทำรายการยืม**, **ส่งคืนและตรวจรับ**, และ **ระเบียบและขั้นตอน**) ค้นหา/กรองคลังอุปกรณ์เซนเซอร์ 23 รายการ + เพิ่มอุปกรณ์นอกรายการ, บันทึกร่างอัตโนมัติ, นำเข้าไฟล์ `.json` ตอนยืมเพื่อทำรายการคืนได้ทันที และดาวน์โหลดเอกสารออกมาเป็นไฟล์ **PDF (`.pdf`), Word (`.doc`), Excel (`.xlsx`), CSV (`.csv`), JSON (`.json`)** ได้โดยตรงไม่ต้องกด `Ctrl+P`
```html
<!-- สำหรับวางใน Froala CMS Code View (borrow_updated_20261121.txt) -->
<iframe src="https://kchayta32.github.io/ce-ssru-navbar/page/borrow-app.html" width="100%" height="1060" frameborder="0" style="width:100%; height:1060px; border:0; border-radius:12px; display:block; background:#ffffff;"></iframe>

<!-- ไฟล์ Asset ที่โหลดผ่าน jsDelivr ภายใน borrow-app.html -->
<link href="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.1.7/page/ce-borrow.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.1.7/page/ce-borrow.js"></script>
```

### 10. แบนเนอร์หน้าแรก: ระบบยืม–คืนอุปกรณ์ IoT (`banner_borrow_2066x761.png`)
แบนเนอร์ขนาด `2066 × 761 px` (`72 DPI`) สำหรับสไลด์หน้าแรก (`home_updated_20261121.txt`) เชื่อมต่อไปยังหน้า `/page/borrow` วางต่อท้ายสไลด์ `สถานที่ฝึกประสบการณ์วิชาชีพ (39 องค์กรพันธมิตร)`
```html
<img src="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.1.6/banner_borrow_2066x761.png" alt="ระบบยืม–คืนอุปกรณ์ IoT">
```
