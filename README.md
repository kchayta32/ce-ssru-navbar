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
<link href="https://cdn.jsdelivr.net/gh/kchayta32/ce-ssru-navbar@v1.0.6/news/ce-news.css" rel="stylesheet">
```
