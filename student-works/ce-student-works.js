/* CE SSRU Student Works by Year (v1.2.0)
 * Data sourced from http://www.ce.fit.ssru.ac.th/home and https://www.facebook.com/ComputerEngineeringSSRU
 * Motion: FLIP Expanding-Card Hero Carousel + Choreographed Text Reveal + Auto-Progress
 */
(function () {
  "use strict";

  var root = document.getElementById("ce-sw-app");
  if (!root) return;

  var IMG_BASE = root.getAttribute("data-img-base") || "./images/";
  var AUTOPLAY_MS = 5600;
  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var WORKS = [
    /* ===================== ปี 2569 (2026) ===================== */
    {
      id: "2569-foodiebot-eec",
      year: "2569",
      yearLabel: "ปี 2569",
      yearGroup: "2569",
      category: "award",
      categoryLabel: "รางวัลและการแข่งขัน",
      place: "รางวัลรองชนะเลิศอันดับ 1 • Mini Hackathon EEC รุ่นที่ 2",
      date: "26–28 สิงหาคม 2569",
      shortTitle: "FoodieBot: Smart City AI Logistics",
      title: "FoodieBot: ระบบขนส่งและส่งอาหารอัตโนมัติด้วยหุ่นยนต์ AI และโดรน (Mini Hackathon EEC)",
      summary: "คว้ารางวัลรองชนะเลิศอันดับ 1 Capstone Project Smart City Management Scenario จากการบูรณาการภูมิสารสนเทศ ปัญญาประดิษฐ์ และโดรนสำรวจเพื่อจัดการเมืองอัจฉริยะในพื้นที่ EEC",
      fullDesc: "นักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์เข้าร่วมโครงการฝึกอบรมทักษะสูงเชิงปฏิบัติการ (Boot Camp) การบูรณาการภูมิสารสนเทศ ปัญญาประดิษฐ์ และการทำแผนที่/ตรวจสอบด้วยโดรน เพื่อการจัดการเมืองอัจฉริยะในเขตพัฒนาพิเศษภาคตะวันออก (รุ่นที่ 2) ณ ศูนย์อบรมโดรน ดีดีเอ็ม DTC บางแสน จังหวัดชลบุรี และสร้างสรรค์ผลงาน “FoodieBot: Smart Village & EEC Smart City AI Logistics System” คว้ารางวัลรองชนะเลิศอันดับ 1 ในกิจกรรม Mini Hackathon",
      students: [
        "นายกิตติ ชัยตา (ทีมรางวัล)",
        "นางสาวณภัทร แซ่ตั้ง (ทีมรางวัล)",
        "นางสาวอริษรา ชาญแท้ (ทีมรางวัล)",
        "นายบัญญพนธ์ กรุดนาค (ทีมรางวัล)",
        "นางสาวทิฆัมพร มาให้ทรัพย์ (ทีมรางวัล)",
        "นางสาวธนภร วิรัชมงคลชัย",
        "นายธนกฤต วรรณรังษี",
        "นายยุทธจักร หนูแก้ว"
      ],
      advisors: ["อาจารย์กานต์ เจริญจิตร"],
      venue: "ศูนย์อบรมโดรน ดีดีเอ็ม DTC (Drone Training Center) บางแสน จ.ชลบุรี",
      image: "2026_bootcamp_3.jpg",
      cardImage: "2026_bootcamp_2.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/20260915",
      fbUrl: "https://www.facebook.com/ComputerEngineeringSSRU/posts/pfbid02WghQ3dNfwiSHBQBDc6Q5X7UmBXXN8TM2KH7nJawZN9gxXgaM5sZq3D1XSsT9YtCYl"
    },
    {
      id: "2569-aucc2026-top5",
      year: "2569",
      yearLabel: "ปี 2569",
      yearGroup: "2569",
      category: "award",
      categoryLabel: "รางวัลและการแข่งขัน",
      place: "Top 5 Outstanding Paper (อันดับ 3) • AUCC 2026",
      date: "4–6 กุมภาพันธ์ 2569",
      shortTitle: "Top 5 Outstanding Paper AUCC 2026",
      title: "ระบบผู้พิทักษ์พืชอัจฉริยะด้วย AI คว้ารางวัล Top 5 Outstanding Paper Award อันดับที่ 3",
      summary: "ผลงานวิจัยต่อยอดจากรายวิชา CPE3401 ระบบสมองกลฝังตัว บูรณาการ AI และ IoT เพื่อดูแลพืชอัตโนมัติ พร้อมบทความวิจัยจาก CE SSRU รวม 3 เรื่อง บนเวทีระดับเอเชีย AUCC 2026",
      fullDesc: "นักศึกษาชั้นปีที่ 3 คว้ารางวัล Top 5 Outstanding Paper Award (อันดับที่ 3) จากผลงาน “การพัฒนาระบบผู้พิทักษ์พืชอัจฉริยะด้วยปัญญาประดิษฐ์เพื่อการดูแลพืชแบบอัตโนมัติ” ในการประชุมวิชาการระดับปริญญาตรีด้านคอมพิวเตอร์ภูมิภาคเอเชีย ครั้งที่ 14 (AUCC 2026) ณ มหาวิทยาลัยราชภัฏรำไพพรรณี นอกจากนี้ยังมีทีมนักศึกษา CE SSRU ร่วมนำเสนอบทความวิจัยด้าน Edge MQTT Driver Monitoring และระบบควบคุมรถบังคับผ่าน Wi-Fi ด้วย Raspberry Pi Zero 2 W รวมทั้งสิ้น 3 บทความ",
      students: [
        "นายศตวรรษ อินทรักษ์ (ปี 3 — รางวัล Top 5 อันดับ 3)",
        "นางสาวกัญญาณัฐ ลุนชาติ (ปี 3 — รางวัล Top 5 อันดับ 3)",
        "นายกิตติ ชัยตา, นายธเนศพล แซ่เอีย (บทความ Edge MQTT Driver Monitoring)",
        "นางสาวอนันตญา จันทร์เจริญ, นางสาวเกศินี แซสันเทียะ, นางสาวมลตณรัตน์ วิวัฒน์เมทากร (บทความ Raspberry Pi Zero 2 W)"
      ],
      advisors: [
        "ผศ.ดร.เศรษฐกาล โปร่งนุช",
        "อาจารย์ทักษอร อักษรศิลป์",
        "อาจารย์กานต์ เจริญจิตร",
        "อาจารย์ธัชนนท์ ชุ่มแอ่น"
      ],
      venue: "มหาวิทยาลัยราชภัฏรำไพพรรณี จ.จันทบุรี (The 14th AUCC 2026)",
      image: "2026_aucc2026.jpg",
      cardImage: "2026_aucc2026.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/20260210",
      docUrl: "https://drive.google.com/file/d/15g-4Fzq_F3HpaIzJwLWrx_4vNfnAKDEE/view?usp=sharing"
    },
    {
      id: "2569-prototype-escrow",
      year: "2569",
      yearLabel: "ปี 2569",
      yearGroup: "2569",
      category: "innovation",
      categoryLabel: "นวัตกรรม / ต้นแบบ / สิทธิบัตร",
      place: "ทุนอุดหนุนพัฒนาผลิตภัณฑ์ต้นแบบ • ปี 2569",
      date: "25 กุมภาพันธ์ 2569",
      shortTitle: "ระบบเอสโครว์อัจฉริยะและตรวจจับทุจริต AI",
      title: "ระบบเอสโครว์อัจฉริยะและแพลตฟอร์มตรวจจับการทุจริตด้วยเอไอสำหรับการซื้อขายออนไลน์",
      summary: "นักศึกษาชั้นปีที่ 3 ผ่านคัดเลือกโครงการทุนอุดหนุนการพัฒนาผลิตภัณฑ์ต้นแบบของนักศึกษา ประจำปี 2569 ได้รับทุนสนับสนุน 10,000 บาท เพื่อพัฒนาแพลตฟอร์มซื้อขายปลอดภัยด้วย AI",
      fullDesc: "นักศึกษาชั้นปีที่ 3 สาขาวิชาวิศวกรรมคอมพิวเตอร์ ผ่านการพิจารณาคัดเลือกโครงการทุนอุดหนุนการพัฒนาผลิตภัณฑ์ต้นแบบของนักศึกษา งบประมาณรายได้ ประจำปี 2569 ได้รับทุนสนับสนุนจำนวน 10,000 บาท จากผลงานโครงการ “ระบบเอสโครว์อัจฉริยะและแพลตฟอร์มตรวจจับการทุจริตด้วยเอไอสำหรับการซื้อขายออนไลน์ระหว่างบุคคล”",
      students: [
        "นางสาวณภัทร แซ่ตั้ง",
        "นางสาวอริษรา ราชนิยม",
        "นายธนพัตร ฉุยสุริฉาย"
      ],
      advisors: [
        "ผศ.ดร.พรภวิษย์ บุญศรีเมือง",
        "ผศ.ดร.ขวัญเรือน รัศมี",
        "ผศ.ดร.รวิ อุตตมธนินทร์",
        "อาจารย์กานต์ เจริญจิตร",
        "ผศ.ดร.เศรษฐกาล โปร่งนุช",
        "อาจารย์ทักษอร อักษรศิลป์"
      ],
      venue: "คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏสวนสุนันทา",
      image: "2026_prototype_hd.jpg",
      cardImage: "2026_prototype_hd.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/20260225",
      fbUrl: "https://www.facebook.com/ComputerEngineeringSSRU/posts/pfbid02XgMpj5Np5iXH6h8QQrH8ypaczRktXb8p5744QGLumb9A9LwMWwbvceb92nkS9KXMl"
    },
    {
      id: "2569-kait-fall",
      year: "2569",
      yearLabel: "ปี 2569",
      yearGroup: "2569",
      category: "exchange",
      categoryLabel: "แลกเปลี่ยนต่างประเทศ / อบรม",
      place: "ทุนแลกเปลี่ยนประเทศญี่ปุ่น • KAIT Fall 2026",
      date: "11 พฤศจิกายน – 21 ธันวาคม 2569",
      shortTitle: "KAIT Technical Internship Japan 2026",
      title: "นักศึกษา CE SSRU รับทุนฝึกประสบการณ์วิชาชีพ ณ Kanagawa Institute of Technology ประเทศญี่ปุ่น",
      summary: "ตัวแทนนักศึกษาวิศวกรรมคอมพิวเตอร์ 3 ราย ได้รับทุนโครงการ KAIT Technical Internship Program (Fall 2026) แลกเปลี่ยนเรียนรู้เทคโนโลยีและฝึกประสบการณ์วิชาชีพ ณ ประเทศญี่ปุ่น",
      fullDesc: "นักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์ผ่านการคัดเลือกและได้รับทุนนักศึกษาแลกเปลี่ยนฝึกประสบการณ์วิชาชีพ ณ ต่างประเทศ ประจำปีการศึกษา 2569 ภายใต้โครงการ KAIT Technical Internship Program (Fall 2026) ณ Kanagawa Institute of Technology (KAIT) ประเทศญี่ปุ่น ระหว่างวันที่ 11 พฤศจิกายน – 21 ธันวาคม 2569 เพื่อแลกเปลี่ยนด้านวิชาการ การจัดการเรียนการสอน และการฝึกประสบการณ์วิชาชีพวิศวกรรม",
      students: [
        "นางสาวอนันตญา จันทร์เจริญ",
        "นางสาวธนภร วิรัชมงคลชัย",
        "นางสาวเกศินี แซสันเทียะ"
      ],
      advisors: ["ผู้ช่วยศาสตราจารย์ ดร.ไกรพ เจริญโสภา (อาจารย์ผู้ควบคุมดูแล)"],
      venue: "Kanagawa Institute of Technology (KAIT), ประเทศญี่ปุ่น",
      image: "2026_kait_hd.jpg",
      cardImage: "2026_kait_2.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/20261118",
      fbUrl: "https://www.facebook.com/ComputerEngineeringSSRU/posts/pfbid025g4RgpsQFMZyb9XMDLaX8YfeXMkjYs7SwbNuXeWi3ehut89PPRMaCFnxfpFtmAmHl"
    },
    {
      id: "2569-icteched",
      year: "2569",
      yearLabel: "ปี 2569",
      yearGroup: "2569",
      category: "research",
      categoryLabel: "งานวิจัย / ประชุมวิชาการ",
      place: "เวทีนานาชาติ IEEE • ICtechEd 2026",
      date: "28–29 พฤษภาคม 2569",
      shortTitle: "ระบบ RFID ตรวจสอบชื่อรับปริญญา (ICtechEd 2026)",
      title: "นำเสนองานวิจัยระบบ RFID ตรวจสอบรายชื่อพิธีรับพระราชทานปริญญาบัตร เวที ICtechEd 2026",
      summary: "นักศึกษาชั้นปีที่ 4 ร่วมนำเสนอบทความวิจัยระดับนานาชาติเรื่อง “Design and Development of an Enhanced RFID-Based Name Verification System for Graduation Ceremonies”",
      fullDesc: "นักศึกษาชั้นปีที่ 4 สาขาวิชาวิศวกรรมคอมพิวเตอร์ พร้อมด้วยคณาจารย์ที่ปรึกษา ร่วมนำเสนอผลงานวิจัยในเวทีวิชาการระดับนานาชาติ The 13th International Conference on Technical Education (ICtechEd 2026) จัดโดย IEEE Thailand Section สมาคมอุตสาหกรรมศึกษา (ประเทศไทย) และคณะครุศาสตร์อุตสาหกรรม มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
      students: [
        "นายธนวัฒน์ สังขกุล",
        "นายนัชชานนท์ เอ้งฉ้วน",
        "นายวุฒิพงศ์ ปิ่นเสริมศักดิ์",
        "นายพีรเดช ธนาวิวัฒน์"
      ],
      advisors: [
        "ผศ.ดร.ชนมภัทร โตระสะ",
        "ผศ.ดร.เศรษฐกาล โปร่งนุช"
      ],
      venue: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (IEEE Thailand Section)",
      image: "2026_icteched.jpg",
      cardImage: "2026_icteched.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/20260602-1",
      fbUrl: "https://www.facebook.com/ComputerEngineeringSSRU/posts/pfbid02NLtxDou5GScpZpN8oABbYhVJSUEfUdcZK1F6xVDv9RS2KEj5xDfAow47k1c6RXhFl"
    },
    {
      id: "2569-estacon-basket",
      year: "2569",
      yearLabel: "ปี 2569",
      yearGroup: "2569",
      category: "research",
      categoryLabel: "งานวิจัย / ประชุมวิชาการ",
      place: "ประชุมวิชาการระดับชาติ • ESTACON 2026",
      date: "28 สิงหาคม 2569 (โพสต์ 4 ก.ย. 2569)",
      shortTitle: "ระบบร้านขายของชำและมอดูลตะกร้าอัจฉริยะ",
      title: "นำเสนอผลงานระบบบริหารจัดการร้านขายของชำและมอดูลตะกร้าอัจฉริยะ (ESTACON ครั้งที่ 17)",
      summary: "ผลงานวิจัยประยุกต์ด้าน IoT และ Smart Retail “A Smart Shopping Basket Module for Enhancing Grocery Store Management Efficiency” ในเวที ESTACON 2026",
      fullDesc: "นักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์และคณาจารย์เข้าร่วมนำเสนอผลงานวิจัยในการประชุมวิชาการวิศวกรรมศาสตร์ วิทยาศาสตร์ เทคโนโลยีและสถาปัตยกรรมศาสตร์ ครั้งที่ 17 ประจำปี 2569 (ESTACON 2026) ณ อาคารปฏิบัติการรวมคณะเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏนครราชสีมา ในหัวข้อระบบบริหารจัดการร้านขายของชำและมอดูลตะกร้าอัจฉริยะ",
      students: [
        "นายธีรภัทร กันพงษ์",
        "นายกฤติพงศ์ ปานานนท์",
        "นายกฤษดา ชูชื่น"
      ],
      advisors: [
        "ผศ.ดร.พรภวิษย์ บุญศรีเมือง",
        "ผศ.ดร.เศรษฐกาล โปร่งนุช"
      ],
      venue: "มหาวิทยาลัยราชภัฏนครราชสีมา (ESTACON ครั้งที่ 17)",
      image: "2026_bootcamp_1.jpg",
      cardImage: "2026_bootcamp_1.jpg",
      fbUrl: "https://www.facebook.com/ComputerEngineeringSSRU/posts/pfbid02pHNhjm8LV1HYCSYrTKm9JDAAYy6gksTaFNRxdLNSaTABkxT15qCid3R2CbpEvH14l"
    },
    {
      id: "2569-taxtalk-chiba",
      year: "2569",
      yearLabel: "ปี 2569",
      yearGroup: "2569",
      category: "exchange",
      categoryLabel: "แลกเปลี่ยนต่างประเทศ / อบรม",
      place: "Start-up MSMEs (ทีม TAXTALK) & แลกเปลี่ยน ม.ชิบะ",
      date: "กุมภาพันธ์ – มีนาคม 2569",
      shortTitle: "ทีม TAXTALK Start-up & แลกเปลี่ยน ม.ชิบะ 2569",
      title: "ทีม TAXTALK บ่มเพาะผู้ประกอบการ Start-up และนักศึกษาแลกเปลี่ยน ณ Chiba University ญี่ปุ่น",
      summary: "นักศึกษาชั้นปีที่ 3 ทีม TAXTALK เข้าร่วมพัฒนาศักยภาพผู้ประกอบการ Start-up/MSMEs พร้อมส่งตัวแทนนักศึกษาแลกเปลี่ยนวิชาการ ณ มหาวิทยาลัยชิบะ ประเทศญี่ปุ่น",
      fullDesc: "1) วันที่ 25–27 มีนาคม 2569 ทีม TAXTALK (นายศักดิ์นรินทร์ ศรีจันทร์, นายอภิชัย ประมาณ, นายภาณุวัฒน์ อามาตย์) เข้าร่วมอบรมโครงการพัฒนานักศึกษาเป็นผู้ประกอบการรายใหม่ (Start-up/เจ้าของกิจการ/MSMEs) ณ จ.สมุทรสงคราม และ 2) วันที่ 26 กุมภาพันธ์ – 15 มีนาคม 2569 นางสาวมลตณรัตน์ วิวัฒน์เมทากร และนายอภิชัย ประมาณ เข้าร่วมโครงการอบรมเชิงปฏิบัติการแลกเปลี่ยนทางวิชาการ ณ Chiba University ประเทศญี่ปุ่น พร้อมนักศึกษาปี 3 ช่วยเป็นทีมพี่เลี้ยง Youth Innovation Project #3 (iSTEM-Ed 2026)",
      students: [
        "นายศักดิ์นรินทร์ ศรีจันทร์ (ทีม TAXTALK)",
        "นายอภิชัย ประมาณ (ทีม TAXTALK & แลกเปลี่ยน ม.ชิบะ)",
        "นายภาณุวัฒน์ อามาตย์ (ทีม TAXTALK)",
        "นางสาวมลตณรัตน์ วิวัฒน์เมทากร (แลกเปลี่ยน ม.ชิบะ)"
      ],
      advisors: [
        "ผศ.ดร.เศรษฐกาล โปร่งนุช",
        "อาจารย์ทักษอร อักษรศิลป์",
        "อาจารย์กานต์ เจริญจิตร"
      ],
      venue: "Chiba University ประเทศญี่ปุ่น & โรงแรมอัมพวาน่านอน จ.สมุทรสงคราม",
      image: "2026_chiba_exch.jpg",
      cardImage: "2026_taxtalk.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/20260327"
    },

    /* ===================== ปี 2568 (2025) ===================== */
    {
      id: "2568-ai-innovator",
      year: "2568",
      yearLabel: "ปี 2568",
      yearGroup: "2568",
      category: "award",
      categoryLabel: "รางวัลและการแข่งขัน",
      place: "ระดับประเทศ • AI Innovator & Super AI Season 5",
      date: "30 มิถุนายน 2568",
      shortTitle: "รางวัล AI Innovation & Graceful AI Innovator",
      title: "นักศึกษา CE SSRU คว้ารางวัลนวัตกรรม AI ยอดเยี่ยม และ Graceful AI Innovator ระดับประเทศ",
      summary: "คว้ารางวัล AI Innovation (เงินรางวัล 5,000 บาท), รางวัล Graceful AI Innovator 5 รางวัล, รางวัลชมเชย (ทีม 4Guys) และรางวัล Super Mentor ภายใต้โครงการ AIAT / บพค. / สวทช.",
      fullDesc: "นักศึกษาและอาจารย์สาขาวิชาวิศวกรรมคอมพิวเตอร์คว้ารางวัลในโครงการหน่วยบ่มเพาะนวัตกรปัญญาประดิษฐ์ (AI Innovator / Super AI Engineer Season 5) ณ มรภ.เทพสตรี จ.ลพบุรี ได้แก่ นายกิตติ ชัยตา (รางวัล AI Innovation ยอดเยี่ยม และ Graceful AI Innovator), นายศตวรรษ อินทรักษ์, นางสาวธนภร วิรัชมงคลชัย, นายอภิชัย ประมาณ, นายศักดิ์นรินทร์ ศรีจันทร์ (รางวัล Graceful AI Innovator), ทีม 4Guys (รางวัลชมเชย ผลงานระบบสแกนใบหน้าเช็คชื่อนักเรียน) และอาจารย์กานต์ เจริญจิตร (รางวัล Super Mentor)",
      students: [
        "นายกิตติ ชัยตา (66122519032) — AI Innovation ยอดเยี่ยม + Graceful AI",
        "นายศตวรรษ อินทรักษ์ (66122519012) — Graceful AI Innovator",
        "นางสาวธนภร วิรัชมงคลชัย (66122519084) — Graceful AI Innovator",
        "นายอภิชัย ประมาณ (66122519067) — Graceful AI Innovator",
        "นายศักดิ์นรินทร์ ศรีจันทร์ (66122519047) — Graceful AI Innovator",
        "ทีม 4Guys — รางวัลชมเชย ระบบสแกนใบหน้าเช็คชื่อนักเรียน"
      ],
      advisors: [
        "อาจารย์กานต์ เจริญจิตร (รางวัล Super Mentor)",
        "ผศ.ดร.เศรษฐกาล โปร่งนุช (Mentor ทีม 4Guys)"
      ],
      venue: "มหาวิทยาลัยราชภัฏเทพสตรี จ.ลพบุรี (AIAT / บพค. / สวทช. / RMUTT)",
      image: "2025_ai_innovator_2.jpg",
      cardImage: "2025_ai_innovator_2.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/2025-6-30",
      fbUrl: "https://www.facebook.com/ComputerEngineeringSSRU/posts/pfbid02KY4f256F2VrbhRdHFK3gCN8FKgRpN1nRos35cf4EPhZghsBznwdht2vgueomVCCdl"
    },
    {
      id: "2568-super-ai-5teams",
      year: "2568",
      yearLabel: "ปี 2568",
      yearGroup: "2568",
      category: "innovation",
      categoryLabel: "นวัตกรรม / ต้นแบบ / สิทธิบัตร",
      place: "5 ทีมนวัตกรรม AI • Super AI Engineer Season 5",
      date: "11 มิถุนายน 2568",
      shortTitle: "5 ต้นแบบ AI: TAX TALK / D-Mind / SomZone / InnerVoice / NUMDAI",
      title: "5 ผลงานนวัตกรรม AI นักศึกษา CE SSRU ในเวที AI Innovator Super AI Engineer Season 5",
      summary: "ตัวแทน 5 ทีมนำเสนอต้นแบบ AI ที่พัฒนาขึ้นจริง ได้แก่ TAX TALK, D-Mind, SomZone, InnerVoice และ NUMDAI บนเวทีหน่วยบ่มเพาะนวัตกรปัญญาประดิษฐ์",
      fullDesc: "ผลงานต้นแบบปัญญาประดิษฐ์ทั้ง 5 ทีมจากสาขาวิชาวิศวกรรมคอมพิวเตอร์ที่เผยแพร่วิดีโอนำเสนอบนเพจ Facebook Computer Engineering SSRU ได้แก่ 1) TAX TALK ที่ปรึกษาภาษี ภ.ง.ด. ไทย ด้วย AI (ทีมลับลับ — นายอภิชัย ประมาณ), 2) D-Mind (ทีม Secret — นายกิตติ ชัยตา), 3) SomZone ส้มโซน (ทีมลับเลย — นายศักดิ์นรินทร์ ศรีจันทร์), 4) InnerVoice เสียงภายในที่เข้าใจและไม่ตัดสิน (ทีมกองทัพต้องเดินด้วยท้อง — นางสาวธนภร วิรัชมงคลชัย) และ 5) NUMDAI นัม-ด้า เอ-ไอ (ทีม CiRA-Boy — นายศตวรรษ อินทรักษ์)",
      students: [
        "นายอภิชัย ประมาณ (หัวหน้าทีมลับลับ — ผลงาน TAX TALK)",
        "นายกิตติ ชัยตา (หัวหน้าทีม Secret — ผลงาน D-Mind)",
        "นายศักดิ์นรินทร์ ศรีจันทร์ (หัวหน้าทีมลับเลย — ผลงาน SomZone)",
        "นางสาวธนภร วิรัชมงคลชัย (หัวหน้าทีมกองทัพต้องเดินด้วยท้อง — ผลงาน InnerVoice)",
        "นายศตวรรษ อินทรักษ์ (หัวหน้าทีม CiRA-Boy — ผลงาน NUMDAI)"
      ],
      advisors: ["อาจารย์กานต์ เจริญจิตร"],
      venue: "โครงการหน่วยบ่มเพาะนวัตกรปัญญาประดิษฐ์ มรภ.เทพสตรี จ.ลพบุรี",
      image: "2025_super_ai.jpg",
      cardImage: "2025_ai_innovator_hd.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/20251104",
      fbUrl: "https://www.facebook.com/100063957408730/videos/1349814096118158/"
    },
    {
      id: "2568-aucc2025-best",
      year: "2568",
      yearLabel: "ปี 2568",
      yearGroup: "2568",
      category: "award",
      categoryLabel: "รางวัลและการแข่งขัน",
      place: "Best of Track • AUCC 2025 & เกียรติบัตรสภามหาวิทยาลัย",
      date: "28 พฤษภาคม / 9 มิถุนายน 2568",
      shortTitle: "Best of Track AUCC 2025 (MediaPipe AI)",
      title: "รางวัลระดับดีเด่น Best of Track เวที AUCC 2025 และเกียรติบัตรเชิดชูเกียรติจากสภามหาวิทยาลัย",
      summary: "ผลงานวิจัย “FACE AND HAND GESTURE RECOGNITION USING MEDIAPIPE” คว้ารางวัลระดับดีเด่น (Best of Track) ประเภท Oral Presentation และรับมอบเกียรติบัตรจากนายกสภา มรภ.สวนสุนันทา",
      fullDesc: "นักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์คว้ารางวัลผลงานระดับดีเด่น (Best of Track) ประเภทการนำเสนอผลงานแบบบรรยาย (Oral Presentation) จากผลงานวิจัยเรื่อง “FACE AND HAND GESTURE RECOGNITION USING MEDIAPIPE” ในการประชุมวิชาการระดับปริญญาตรีด้านคอมพิวเตอร์ภูมิภาคเอเชีย ครั้งที่ 13 (AUCC 2025) ณ มรภ.อุตรดิตถ์ และเข้ารับมอบเกียรติบัตรเชิดชูเกียรติจาก รศ.ดร.ฤๅเดช เกิดวิชัย นายกสภามหาวิทยาลัยราชภัฏสวนสุนันทา",
      students: [
        "นายธนวัฒน์ สังขกุล",
        "นายนัชชานนท์ เอ้งฉ้วน",
        "นายวุฒิพงศ์ ปิ่นเสริมศักดิ์"
      ],
      advisors: [
        "อาจารย์กานต์ เจริญจิตร",
        "ผศ.ดร.เศรษฐกาล โปร่งนุช"
      ],
      venue: "มรภ.อุตรดิตถ์ (AUCC 2025) และห้องประชุมสภามหาวิทยาลัย มรภ.สวนสุนันทา",
      image: "2025_aucc2025_2.jpg",
      cardImage: "2025_aucc2025_3.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/20250609"
    },
    {
      id: "2568-gnru25",
      year: "2568",
      yearLabel: "ปี 2568",
      yearGroup: "2568",
      category: "award",
      categoryLabel: "รางวัลและการแข่งขัน",
      place: "รางวัลการนำเสนอผลงานวิจัยระดับดี • GNRU ครั้งที่ 25",
      date: "26 กรกฎาคม 2568",
      shortTitle: "ตู้ดูแลต้นอ่อนข้าวสาลี (รางวัลระดับดี GNRU)",
      title: "รางวัลวิจัยระดับดี ตู้ดูแลต้นอ่อนข้าวสาลีผ่านแอปพลิเคชันสำหรับสัตว์เลี้ยง (GNRU ครั้งที่ 25)",
      summary: "ผลงาน “Wheatgrass Care Cabinet via Pet Application” คว้ารางวัลการนำเสนอผลงานวิจัยระดับดี รูปแบบบรรยาย ณ มหาวิทยาลัยราชภัฏพิบูลสงคราม",
      fullDesc: "ผศ.ดร.รวิ อุตตมธนินทร์ พร้อมด้วยนักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์ คว้ารางวัลการนำเสนอผลงานวิจัยระดับดี ในรูปแบบการบรรยาย จากผลงาน “ตู้ดูแลต้นอ่อนข้าวสาลีผ่านแอปพลิเคชันสำหรับสัตว์เลี้ยง (Wheatgrass Care Cabinet via Pet Application)” ในงานประชุมวิชาการนำเสนอผลงานวิจัยระดับชาติเครือข่ายบัณฑิตศึกษามหาวิทยาลัยราชภัฏภาคเหนือ (GNRU) ครั้งที่ 25",
      students: [
        "นางสาวจิดาภา จุ้ยเอี่ยม",
        "นางสาววาสนา พรประภา",
        "นางสาวญาณิศา ม่วงสี"
      ],
      advisors: ["ผศ.ดร.รวิ อุตตมธนินทร์"],
      venue: "มหาวิทยาลัยราชภัฏพิบูลสงคราม (GNRU ครั้งที่ 25)",
      image: "2025_gnru25_hd.jpg",
      cardImage: "2025_gnru25_hd.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/20250825",
      fbUrl: "https://www.facebook.com/ComputerEngineeringSSRU/posts/pfbid0anmz2fbXDsCXxxFcf5XzeHkrgWm9rxoSNSm6UwedJvCdCyxnd1FfkJB22e42C8Xgl"
    },
    {
      id: "2568-intl-papers",
      year: "2568",
      yearLabel: "ปี 2568",
      yearGroup: "2568",
      category: "research",
      categoryLabel: "งานวิจัย / ประชุมวิชาการ",
      place: "เวทีวิชาการนานาชาติ • ICPEI / RAAI / ICBIR 2025",
      date: "พฤษภาคม – ธันวาคม 2568",
      shortTitle: "3 บทความวิจัยนานาชาติ (สิงคโปร์ / ไทย)",
      title: "ผลงานบทความวิจัยระดับนานาชาติของนักศึกษา CE SSRU ในเวที ICPEI, RAAI และ ICBIR 2025",
      summary: "เผยแพร่งานวิจัยวิศวกรรมคอมพิวเตอร์ 3 เรื่อง ทั้งเครื่องผสมอาหารลูกไก่ IoT (ICPEI 2025), แพลตฟอร์มฝึกหุ่นยนต์ BlockMicc (RAAI 2025 สิงคโปร์) และระบบรู้จำป้ายจราจร (ICBIR 2025)",
      fullDesc: "นักศึกษารหัส 62 และ 64 ร่วมกับคณาจารย์เผยแพร่บทความวิจัยในงานประชุมวิชาการระดับนานาชาติปี 2025 ได้แก่ 1) Embedded System-Based Prototype for Chick Feed Mixing (ICPEI 2025, พัทยา), 2) Design and Implementation of an Interactive Robotics Training Platform Using BlockMicc Programming (RAAI 2025, ประเทศสิงคโปร์) และ 3) Low-Cost Embedded Solution for Traffic Sign Recognition on Thailand's Asian Highways (ICBIR 2025, กรุงเทพฯ) รวมถึงบทความ EECON-48 ณ จ.เชียงใหม่",
      students: [
        "นายปัญญวัฒน์ รองไชย, นางสาวภริดา ศรีเรือ, นางสาวสัณห์ฤทัย ตั้งปรียารักษ์ (ICPEI 2025)",
        "นายกฤษฎา วังแก้ว, นายอาทิตย์ สวนประเสริฐ, นายสถาพร สุพรม (RAAI 2025)",
        "นายธนกฤต เมธามณีญาณนท์, นายธนกร นามมั่น, นางสาวศรัณย์พร พลอยโคกสูง (ICBIR 2025)"
      ],
      advisors: [
        "ผศ.ดร.ขวัญเรือน รัศมี",
        "ผศ.ดร.เศรษฐกาล โปร่งนุช",
        "อาจารย์ธัชนนท์ ชุ่มแอ่น"
      ],
      venue: "สิงคโปร์ (RAAI 2025) / พัทยา (ICPEI 2025) / กรุงเทพฯ (ICBIR 2025)",
      image: "2025_chiba_mcu_hd.jpg",
      cardImage: "2025_chiba_plan_hd.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/page/conf-international",
      docUrl: "https://drive.google.com/file/d/1xXNago0VoSjAxtJAcTS2ULEeA0sWXCek/view?usp=drive_link"
    },

    /* ===================== ปี 2567 (2024) ===================== */
    {
      id: "2567-ncsti-patents",
      year: "2567",
      yearLabel: "ปี 2567",
      yearGroup: "2567",
      category: "innovation",
      categoryLabel: "นวัตกรรม / ต้นแบบ / สิทธิบัตร",
      place: "งานวิจัยระดับชาติ NCSTI 2024 & อนุสิทธิบัตร",
      date: "5 มีนาคม 2567",
      shortTitle: "3 นวัตกรรมเกษตรอัจฉริยะ (NCSTI 2024)",
      title: "นำเสนองานวิจัย 3 เรื่อง เวที NCSTI 2024 และต่อยอดจดอนุสิทธิบัตรต้นแบบเกษตรอัจฉริยะ",
      summary: "3 ผลงานโครงงานนักศึกษา ได้แก่ ตู้เพาะชำและดูแลต้นกล้าผัก, ตู้ปลูกไมโครกรีนอัตโนมัติ และระบบเฝ้ามองการเจริญเติบโตของพืชด้วยภาพประมวลผล พร้อมขึ้นทะเบียนอนุสิทธิบัตร",
      fullDesc: "ผศ.ดร.ขวัญเรือน รัศมี หัวหน้าสาขาวิชาวิศวกรรมคอมพิวเตอร์ พร้อมด้วยนักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์ เข้าร่วมนำเสนองานวิจัย 3 เรื่อง ในงานประชุมวิชาการระดับชาติ The National Conference on Science Technology and Innovation 2024 (NCSTI 2024) ณ โรงแรมรอยัล ริเวอร์ กรุงเทพฯ พร้อมยื่นจดอนุสิทธิบัตรผลงานนวัตกรรมทั้ง 3 ชิ้น",
      students: [
        "นางสาววิวรรณรัตน์ สารมาตย์, นางสาวพิมพกานต์ คิดอ่าน (ตู้เพาะชำและดูแลต้นกล้าผัก)",
        "นายพัฒนกาญจน์ ทิมแท้, นายอาทิตย์ จันทราวัช, นายศุภณัฐ อุริต (ตู้ปลูกและดูแลไมโครกรีนอัตโนมัติ)",
        "นายสิทธิพงษ์ หนูแป้นน้อย, นายธนาคาร หล่อนสิ่ว, นายนรภัทร แก้วเกษม (ระบบเฝ้ามองพืชด้วยการประมวลผลภาพ)"
      ],
      advisors: [
        "ผศ.ดร.ขวัญเรือน รัศมี",
        "ผศ.ดร.รวิ อุตตมธนินทร์",
        "อาจารย์วรณัน วรมงคล"
      ],
      venue: "งานประชุมวิชาการระดับชาติ NCSTI 2024 ณ โรงแรมรอยัล ริเวอร์ กรุงเทพฯ",
      image: "2024_ncsti2024_2.jpg",
      cardImage: "2024_ncsti2024_3.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/20240306",
      docUrl: "https://drive.google.com/file/d/1S9JGGycB4lDPZlRTYAuw9n5h_u0yqY_7/view?usp=drive_link"
    },
    {
      id: "2567-chiba-m5stack",
      year: "2567",
      yearLabel: "ปี 2567",
      yearGroup: "2567",
      category: "exchange",
      categoryLabel: "แลกเปลี่ยนต่างประเทศ / อบรม",
      place: "MOU ไทย–ญี่ปุ่น • Chiba University M5Stack Lab",
      date: "22 สิงหาคม 2567",
      shortTitle: "Workshop M5Stack ร่วมกับ ม.ชิบะ ญี่ปุ่น",
      title: "อบรมเชิงปฏิบัติการบอร์ดไมโครคอนโทรลเลอร์ M5Stack ร่วมกับ Chiba University ประเทศญี่ปุ่น",
      summary: "ตัวแทนนักศึกษาวิศวกรรมคอมพิวเตอร์ 6 ราย ร่วมพัฒนาทักษะระบบสมองกลฝังตัวและไมโครคอนโทรลเลอร์ M5Stack ภายใต้ MOU กับมหาวิทยาลัย Chiba ประเทศญี่ปุ่น",
      fullDesc: "กลุ่มสาขาวิชาวิศวกรรมศาสตร์ คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม ร่วมกับมหาวิทยาลัย Chiba ประเทศญี่ปุ่น จัดอบรมเชิงปฏิบัติการสำหรับบอร์ดไมโครคอนโทรลเลอร์ M5Stack ณ ห้องฝึกปฏิบัติการเสมือนจริง (Simulation LAB) ภายใต้บันทึกความเข้าใจ (MOU) ระหว่างมหาวิทยาลัยราชภัฏสวนสุนันทากับมหาวิทยาลัย Chiba ประเทศญี่ปุ่น",
      students: [
        "นางสาวตาหวาน โสภาทุม (65122519013)",
        "นางสาวชลธร ศิริวรรณพร (65122519035)",
        "นายจิรวัฒน์ สุวรรณมา (65122519053)",
        "นายจักริน จิตเกียรติกุล (65122519075)",
        "นางสาวเกศินี แซสันเทียะ (66122519060)",
        "นายกิตติ ชัยตา (66122519032)"
      ],
      advisors: ["คณาจารย์สาขาวิชาวิศวกรรมคอมพิวเตอร์ และวิศวกรรมหุ่นยนต์"],
      venue: "ห้อง Simulation LAB คณะวิศวกรรมศาสตร์ฯ มรภ.สวนสุนันทา",
      image: "2024_chiba_m5stack_hd.png",
      cardImage: "2024_chiba_m5stack_hd.png",
      webUrl: "http://www.ce.fit.ssru.ac.th/th/news/view/20240825"
    },
    {
      id: "2567-restcon-robot",
      year: "2567",
      yearLabel: "ปี 2567",
      yearGroup: "2567",
      category: "research",
      categoryLabel: "งานวิจัย / ประชุมวิชาการ",
      place: "เวทีนานาชาติ • RESTCON 2024 พัทยา",
      date: "16–18 กุมภาพันธ์ 2567",
      shortTitle: "ควบคุมแขนกลผ่าน Ethernet & Kinect V2",
      title: "ระบบควบคุมแขนกลผ่านเครือข่าย Ethernet ด้วยกล้อง Kinect V2 สำหรับพื้นที่อันตราย (RESTCON 2024)",
      summary: "บทความวิจัยระดับนานาชาติ “Robot Arm Control System via Ethernet With Kinect V2 Camera for Use in Hazardous Areas” นำเสนอ ณ Siam Bayshore พัทยา",
      fullDesc: "นักศึกษาวิศวกรรมคอมพิวเตอร์ รหัส 62 ร่วมกับอาจารย์ที่ปรึกษานำเสนอผลงานวิจัยระดับนานาชาติในงาน 2024 15th International Conference on Robotics, Engineering, Science, and Technology (RESTCON) ณ เมืองพัทยา จังหวัดชลบุรี พัฒนาระบบตรวจจับท่าทางและควบคุมแขนกลระยะไกลเพื่อความปลอดภัยในการปฏิบัติงานในพื้นที่เสี่ยงอันตราย",
      students: [
        "นายกนก ศุภลักษณ์",
        "นายณัฐพล กลั่นเพชร",
        "นายณัฐกิตติ์ ศิคาเรสสกุล"
      ],
      advisors: ["ผศ.ดร.เศรษฐกาล โปร่งนุช"],
      venue: "Siam Bayshore Resort, Pattaya (RESTCON 2024)",
      image: "2024_ncsti2024_3.jpg",
      cardImage: "2024_ncsti2024_2.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/page/conf-international",
      docUrl: "https://drive.google.com/file/d/1i8F3cNa5jEr3vPhiObzyCqs5dI8k7cRd/view?usp=drive_link"
    },

    /* ===================== ปี 2562–2566 (2019–2023) ===================== */
    {
      id: "2566-estacon-patents",
      year: "2566",
      yearLabel: "ปี 2562–2566",
      yearGroup: "2562-2566",
      category: "innovation",
      categoryLabel: "นวัตกรรม / ต้นแบบ / สิทธิบัตร",
      place: "ESTACON ครั้งที่ 14 (2566) & คลังสิทธิบัตร CE SSRU",
      date: "พ.ศ. 2565–2566",
      shortTitle: "เครื่องลดความชื้นข้าวเปลือก & หุ่นยนต์ขนส่ง",
      title: "เครื่องลดความชื้นข้าวเปลือก Raspberry Pi และคลังอนุสิทธิบัตรนวัตกรรมนักศึกษา CE SSRU",
      summary: "รวมผลงานเด่นระดับชาติและอนุสิทธิบัตร อาทิ เครื่องลดความชื้นข้าวเปลือก (ESTACON 2566), หุ่นยนต์เคลื่อนที่อัตโนมัติภายในอาคาร, ถังขยะรีไซเคิลอัจฉริยะ และตู้ดูแลสตรอว์เบอร์รี",
      fullDesc: "รวบรวมผลงานวิจัยและการจดทรัพย์สินทางปัญญา (อนุสิทธิบัตร / สิทธิบัตรการออกแบบผลิตภัณฑ์) ของนักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์ ในช่วงปี 2565–2566 ได้แก่ เครื่องลดความชื้นข้าวเปลือกด้วย Raspberry Pi (ESTACON ครั้งที่ 14 ณ ม.กาฬสินธุ์), หุ่นยนต์เคลื่อนที่อัตโนมัติสำหรับการขนส่งภายในอาคาร (จดทั้งอนุสิทธิบัตรและสิทธิบัตรออกแบบผลิตภัณฑ์), ถังขยะรีไซเคิลอัจฉริยะ (MSCC2022) และตู้ต้นแบบดูแลต้นสตรอว์เบอร์รีผ่านเว็บแอปพลิเคชัน",
      students: [
        "นายวิชยุตม์ งามเจริญถาวร, นายเจษฎากร เจียมจิตต์, นายภาณุวัฒน์ สมคิด (เครื่องลดความชื้นข้าวเปลือก)",
        "นายสุริยะ จ๋อยฟอง, นายวิวัฒน์ชัย พยอมแย้ม, นายปาริค อารยสมัย (หุ่นยนต์ขนส่งภายในอาคาร)",
        "นายกฤษณะพงศ์ จันทร์เพ็ญ, น.ส.ชุติมา บูรณะ, น.ส.ธัญญารัตน์ ไอซิม (ถังขยะรีไซเคิลอัจฉริยะ)"
      ],
      advisors: [
        "ผศ.ดร.รวิ อุตตมธนินทร์",
        "ผศ.ดร.ขวัญเรือน รัศมี",
        "ผศ.ดร.เศรษฐกาล โปร่งนุช"
      ],
      venue: "ESTACON ครั้งที่ 14 ม.กาฬสินธุ์ / กรมทรัพย์สินทางปัญญา",
      image: "2025_chiba_plan_hd.jpg",
      cardImage: "2025_chiba_mcu_hd.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/page/patent",
      docUrl: "https://drive.google.com/file/d/1gNAkPfZqQkbCU-0pKi_FZijrkEEEkxLO/view?usp=drive_link"
    },
    {
      id: "2564-ieeocon-braille",
      year: "2564",
      yearLabel: "ปี 2562–2566",
      yearGroup: "2562-2566",
      category: "innovation",
      categoryLabel: "นวัตกรรม / ต้นแบบ / สิทธิบัตร",
      place: "เวทีนานาชาติ iEECON & รางวัลระดับดี ม.แม่โจ้ (2564)",
      date: "พ.ศ. 2564",
      shortTitle: "Mini-UAV & เครื่องเรียนรู้อักษรเบรลล์",
      title: "โดรนสำรวจภายในอาคาร (iEECON) และเครื่องต้นแบบช่วยเรียนรู้อักษรเบรลล์ผู้พิการทางสายตา",
      summary: "ผลงานวิจัยระดับนานาชาติ Design and Implementation of Mini-UAV for Indoor Surveillance พร้อมรางวัลระดับดีงานประชุมวิชาการ ม.แม่โจ้ และอนุสิทธิบัตรเครื่องอักษรเบรลล์",
      fullDesc: "ผลงานนักศึกษา CE SSRU ในปี พ.ศ. 2564 ได้แก่ 1) บทความวิจัย Mini-UAV สำหรับสำรวจภายในอาคาร ในเวที 2021 International Electrical Engineering Congress (iEECON 2021), 2) เครื่องต้นแบบเพื่อช่วยการเรียนรู้อักษรเบรลล์สำหรับผู้พิการทางสายตา (คว้ารางวัลระดับดี และจดอนุสิทธิบัตร), 3) เครื่องดูแลพืชด้วยระบบคอมพิวเตอร์ขนาดเล็ก (รางวัลระดับดี ม.แม่โจ้) และ 4) ระบบแจ้งเตือนอุบัติเหตุของผู้สูงอายุภายในอาคาร (รางวัลระดับดีเยี่ยม)",
      students: [
        "นายณัฐวัฒน์ บุญญาธรรมิก, นายศรันย์ กองมณี, นายปรัชญา ขยันเยี่ยม, นายปิยวัฒน์ วุฒิโช (Mini-UAV iEECON 2021)",
        "นายเปรม เวชยานนท์, นายเลอพงษ์ จ่ายยัง, นายนฤเบศร์ ขวัญโชคชัย (เครื่องอักษรเบรลล์)",
        "น.ส.ภัทราวดี ปิลอง, น.ส.สิริภณ เวียงสิมา, น.ส.ธิดามาศ ผาอิดดี (เครื่องดูแลพืช)"
      ],
      advisors: [
        "ผศ.ดร.เศรษฐกาล โปร่งนุช",
        "ผศ.ดร.รวิ อุตตมธนินทร์"
      ],
      venue: "iEECON 2021 พัทยา / มหาวิทยาลัยแม่โจ้ / กรมทรัพย์สินทางปัญญา",
      image: "2025_aucc2025_3.jpg",
      cardImage: "2026_kait_2.jpg",
      webUrl: "http://www.ce.fit.ssru.ac.th/page/conf-national",
      docUrl: "https://drive.google.com/file/d/1ddAQxxBp-boYsTPqdK2SGbJesh9fGhRF/view?usp=drive_link"
    },
    {
      id: "2562-2563-ceminicon-iseec",
      year: "2562–2563",
      yearLabel: "ปี 2562–2566",
      yearGroup: "2562-2566",
      category: "research",
      categoryLabel: "งานวิจัย / ประชุมวิชาการ",
      place: "CEMINICON'1 (2563) & I-SEEC 2019 (2562)",
      date: "พ.ศ. 2562–2563",
      shortTitle: "เวที I-SEEC 2019 & CEMINICON'1",
      title: "งานวิจัย IoT 3D Packaging (I-SEEC 2019) และเวทีวิชาการนักศึกษา #CEMINICON'1",
      summary: "นักศึกษา CE SSRU นำเสนอบทความวิจัยภาษาอังกฤษด้าน IoT ในงาน I-SEEC 2019 จ.สกลนคร และจัดงานประชุมวิชาการภายในสาขา #CEMINICON'1 ปี 2563",
      fullDesc: "1) วันที่ 21 พฤศจิกายน 2562 (เผยแพร่ 25 ธ.ค. 2562) นักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์นำเสนองานวิจัยภาษาอังกฤษเรื่อง “the 3D packaging analysis and design practice system based on IoT” ในงานประชุมวิชาการระดับนานาชาติ I-SEEC 2019 ณ มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน จ.สกลนคร และ 2) วันที่ 26 ตุลาคม 2563 นักศึกษาชั้นปีที่ 3 จัดงานประชุมวิชาการ The 1st Computer Engineering Mini-Conference (#CEMINICON'1) เพื่อเป็นเวทีแลกเปลี่ยนงานวิจัยของคณาจารย์และนักศึกษาในสาขา",
      students: [
        "นางสาวนูรไอณี ดือราโอะ (I-SEEC 2019)",
        "นางสาวจุไรรัตน์ ลมลอย (I-SEEC 2019)",
        "นายฑีฆายุ สมานมิตร (I-SEEC 2019)",
        "นักศึกษาชั้นปีที่ 3 คณะผู้จัดงาน #CEMINICON'1 (2563)"
      ],
      advisors: ["คณาจารย์สาขาวิชาวิศวกรรมคอมพิวเตอร์"],
      venue: "มทร.อีสาน จ.สกลนคร (I-SEEC 2019) และอาคาร 47 มรภ.สวนสุนันทา",
      image: "2024_ncsti2024_2.jpg",
      cardImage: "2025_chiba_plan_hd.jpg",
      fbUrl: "https://www.facebook.com/ComputerEngineeringSSRU/videos/2191036281202278/"
    }
  ];

  /* ===== State ===== */
  var state = {
    yearGroup: "all",
    category: "all",
    search: "",
    activeIndex: 0,
    isTransitioning: false,
    isPaused: false,
    timerStart: 0,
    timerRaf: null,
    elapsedBeforePause: 0
  };

  /* ===== DOM Refs ===== */
  var heroEl = document.getElementById("ce-sw-hero");
  var backdropImgEl = document.getElementById("ce-sw-backdrop-img");
  var topProgressEl = document.getElementById("ce-sw-top-indicator");
  var detailsEl = document.getElementById("ce-sw-details");
  var yearPillEl = document.getElementById("ce-sw-year-pill");
  var placeEl = document.getElementById("ce-sw-place");
  var titleEl = document.getElementById("ce-sw-title");
  var descEl = document.getElementById("ce-sw-desc");
  var peopleEl = document.getElementById("ce-sw-people");
  var detailBtnEl = document.getElementById("ce-sw-detail-btn");
  var galleryBtnEl = document.getElementById("ce-sw-gallery-btn");
  var sourceLinkEl = document.getElementById("ce-sw-source-link");
  var deckTrackEl = document.getElementById("ce-sw-deck-track");
  var prevBtnEl = document.getElementById("ce-sw-prev");
  var nextBtnEl = document.getElementById("ce-sw-next");
  var progressFillEl = document.getElementById("ce-sw-progress-fill");
  var counterEl = document.getElementById("ce-sw-counter");
  var yearTabs = root.querySelectorAll(".ce-sw-year-tab");
  var archiveContainerEl = document.getElementById("ce-sw-archive-list");
  var searchInputEl = document.getElementById("ce-sw-search");
  var catPills = root.querySelectorAll(".ce-sw-cat-pill");
  var modalBackdropEl = document.getElementById("ce-sw-modal-backdrop");
  var modalCloseEl = document.getElementById("ce-sw-modal-close");

  function imgSrc(file) {
    return IMG_BASE + file;
  }

  function getDeckItems() {
    if (state.yearGroup === "all") return WORKS;
    return WORKS.filter(function (item) {
      return item.yearGroup === state.yearGroup;
    });
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ===== Render Left Details Column ===== */
  function renderDetails(item, animate) {
    yearPillEl.textContent = item.yearLabel + " • " + item.categoryLabel;
    placeEl.textContent = item.date + " | " + item.place;
    titleEl.textContent = item.title;
    descEl.textContent = item.summary;

    var chips = [];
    if (item.students && item.students.length) {
      var shown = item.students.slice(0, 3).map(function (s) {
        return s.replace(/\s*\([^)]*\)/g, "");
      });
      var more = item.students.length > 3 ? " +" + (item.students.length - 3) + " คน" : "";
      chips.push("นักศึกษา: " + shown.join(", ") + more);
    }
    if (item.advisors && item.advisors.length) {
      chips.push("ที่ปรึกษา: " + item.advisors[0] + (item.advisors.length > 1 ? " และคณะ" : ""));
    }
    peopleEl.innerHTML = chips.map(function (c) {
      return '<span class="ce-sw-person-chip">' + escapeHtml(c) + "</span>";
    }).join("");

    var primaryUrl = item.webUrl || item.fbUrl || item.docUrl;
    if (primaryUrl) {
      sourceLinkEl.href = primaryUrl;
      sourceLinkEl.textContent = item.webUrl ? "ข่าวต้นฉบับ ce.fit.ssru" : "โพสต์ต้นฉบับ Facebook";
      sourceLinkEl.style.display = "inline-flex";
    } else {
      sourceLinkEl.style.display = "none";
    }

    if (animate && !prefersReduced) {
      detailsEl.classList.remove("is-animating");
      void detailsEl.offsetWidth;
      detailsEl.classList.add("is-animating");
    }
  }

  /* ===== Render Card Deck (Circular Order Starting at activeIndex + 1) ===== */
  function renderDeck(items, activeIdx, enterLast) {
    var total = items.length;
    var ordered = [];
    if (total === 1) {
      ordered.push({ item: items[0], origIdx: 0 });
    } else {
      for (var offset = 1; offset < total; offset++) {
        var idx = (activeIdx + offset) % total;
        ordered.push({ item: items[idx], origIdx: idx });
      }
      // Also append active item at tail so deck stays full when filtering to 2 items
      if (total <= 3) {
        ordered.push({ item: items[activeIdx], origIdx: activeIdx });
      }
    }

    deckTrackEl.innerHTML = ordered.map(function (entry, pos) {
      var isEnter = enterLast && pos === ordered.length - 1;
      return (
        '<button type="button" class="ce-sw-card' + (isEnter ? " is-entering" : "") + '" ' +
        'data-orig-idx="' + entry.origIdx + '" aria-label="แสดงผลงาน: ' + escapeHtml(entry.item.shortTitle) + '">' +
          '<img class="ce-sw-card-img" src="' + escapeHtml(imgSrc(entry.item.cardImage || entry.item.image)) + '" alt="' + escapeHtml(entry.item.shortTitle) + '" loading="eager">' +
          '<div class="ce-sw-card-overlay">' +
            '<span class="ce-sw-card-bar"></span>' +
            '<span class="ce-sw-card-sub">' + escapeHtml(entry.item.yearLabel + " • " + entry.item.categoryLabel) + "</span>" +
            '<span class="ce-sw-card-title">' + escapeHtml(entry.item.shortTitle) + "</span>" +
          "</div>" +
        "</button>"
      );
    }).join("");

    var cards = deckTrackEl.querySelectorAll(".ce-sw-card");
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function () {
        var idxAttr = parseInt(this.getAttribute("data-orig-idx"), 10);
        if (!isNaN(idxAttr)) {
          goToSlide(idxAttr, this);
        }
      });
    }
  }

  function updateCounter(activeIdx, total) {
    var numStr = activeIdx + 1 < 10 ? "0" + (activeIdx + 1) : String(activeIdx + 1);
    var totStr = total < 10 ? "0" + total : String(total);
    counterEl.innerHTML = numStr + '<span class="ce-sw-counter-total">/ ' + totStr + "</span>";
  }

  /* ===== FLIP Expanding-Card Hero Transition (Matches Video Motion) ===== */
  function goToSlide(targetIdx, clickedCardEl) {
    var items = getDeckItems();
    if (!items.length || state.isTransitioning) return;

    var total = items.length;
    targetIdx = ((targetIdx % total) + total) % total;
    if (targetIdx === state.activeIndex && total > 1) return;

    var targetItem = items[targetIdx];
    var sourceCard = clickedCardEl || deckTrackEl.querySelector('.ce-sw-card[data-orig-idx="' + targetIdx + '"]');

    resetProgressTimer();

    if (prefersReduced || !sourceCard || !heroEl.getBoundingClientRect) {
      state.activeIndex = targetIdx;
      backdropImgEl.src = imgSrc(targetItem.image);
      backdropImgEl.alt = targetItem.title;
      renderDetails(targetItem, !prefersReduced);
      renderDeck(items, targetIdx, false);
      updateCounter(targetIdx, total);
      startProgressTimer();
      return;
    }

    state.isTransitioning = true;
    var cardRect = sourceCard.getBoundingClientRect();
    var heroRect = heroEl.getBoundingClientRect();

    // Create floating clone at exact card bounds and expand to fullscreen stage
    var clone = document.createElement("div");
    clone.className = "ce-sw-expand-clone";
    clone.style.left = cardRect.left + "px";
    clone.style.top = cardRect.top + "px";
    clone.style.width = cardRect.width + "px";
    clone.style.height = cardRect.height + "px";
    clone.style.borderRadius = "14px";

    var cloneImg = document.createElement("img");
    cloneImg.src = imgSrc(targetItem.image);
    cloneImg.alt = "";
    clone.appendChild(cloneImg);
    document.body.appendChild(clone);

    state.activeIndex = targetIdx;
    renderDetails(targetItem, true);
    renderDeck(items, targetIdx, true);
    updateCounter(targetIdx, total);

    // Subtle track slide nudge
    deckTrackEl.style.transition = "none";
    deckTrackEl.style.transform = "translateX(28px)";
    void deckTrackEl.offsetWidth;
    deckTrackEl.style.transition = "transform 0.65s var(--sw-ease)";
    deckTrackEl.style.transform = "translateX(0)";

    var anim = clone.animate(
      [
        {
          left: cardRect.left + "px",
          top: cardRect.top + "px",
          width: cardRect.width + "px",
          height: cardRect.height + "px",
          borderRadius: "14px",
          filter: "brightness(1)"
        },
        {
          left: heroRect.left + "px",
          top: heroRect.top + "px",
          width: heroRect.width + "px",
          height: heroRect.height + "px",
          borderRadius: "0px",
          filter: "brightness(0.92)"
        }
      ],
      {
        duration: 740,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards"
      }
    );

    anim.onfinish = function () {
      backdropImgEl.classList.remove("is-zooming");
      backdropImgEl.src = imgSrc(targetItem.image);
      backdropImgEl.alt = targetItem.title;
      void backdropImgEl.offsetWidth;
      backdropImgEl.classList.add("is-zooming");

      var fadeOut = clone.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 240,
        easing: "ease-out",
        fill: "forwards"
      });
      fadeOut.onfinish = function () {
        if (clone.parentNode) clone.parentNode.removeChild(clone);
        state.isTransitioning = false;
        startProgressTimer();
      };
    };
  }

  /* ===== Auto-Play Progress Loop ===== */
  function resetProgressTimer() {
    if (state.timerRaf) {
      cancelAnimationFrame(state.timerRaf);
      state.timerRaf = null;
    }
    state.elapsedBeforePause = 0;
    state.timerStart = performance.now();
    progressFillEl.style.width = "0%";
    topProgressEl.style.width = "0%";
  }

  function startProgressTimer() {
    if (prefersReduced || getDeckItems().length <= 1) return;
    if (state.timerRaf) cancelAnimationFrame(state.timerRaf);
    state.timerStart = performance.now();

    function tick(now) {
      if (state.isPaused || state.isTransitioning) {
        state.timerRaf = requestAnimationFrame(tick);
        return;
      }
      var elapsed = state.elapsedBeforePause + (now - state.timerStart);
      var pct = Math.min(100, (elapsed / AUTOPLAY_MS) * 100);
      progressFillEl.style.width = pct.toFixed(2) + "%";
      topProgressEl.style.width = pct.toFixed(2) + "%";
      if (elapsed >= AUTOPLAY_MS) {
        var items = getDeckItems();
        var nextIdx = (state.activeIndex + 1) % items.length;
        goToSlide(nextIdx, null);
        return;
      }
      state.timerRaf = requestAnimationFrame(tick);
    }
    state.timerRaf = requestAnimationFrame(tick);
  }

  function pauseAutoplay() {
    if (!state.isPaused) {
      state.elapsedBeforePause += performance.now() - state.timerStart;
      state.isPaused = true;
    }
  }

  function resumeAutoplay() {
    if (state.isPaused) {
      state.timerStart = performance.now();
      state.isPaused = false;
    }
  }

  /* ===== Modal Detail Viewer ===== */
  function openModal(item) {
    if (!item) return;
    pauseAutoplay();
    document.getElementById("ce-sw-modal-img").src = imgSrc(item.image);
    document.getElementById("ce-sw-modal-img").alt = item.title;
    document.getElementById("ce-sw-modal-year").textContent = item.yearLabel + " • " + item.categoryLabel;
    document.getElementById("ce-sw-modal-date").textContent = item.date;
    document.getElementById("ce-sw-modal-title").textContent = item.title;
    document.getElementById("ce-sw-modal-desc").textContent = item.fullDesc || item.summary;
    document.getElementById("ce-sw-modal-venue").textContent = item.venue || item.place;

    var stuList = document.getElementById("ce-sw-modal-students");
    stuList.innerHTML = (item.students || []).map(function (s) {
      return "<li>" + escapeHtml(s) + "</li>";
    }).join("");

    var advList = document.getElementById("ce-sw-modal-advisors");
    advList.innerHTML = (item.advisors || []).map(function (a) {
      return "<li>" + escapeHtml(a) + "</li>";
    }).join("");

    var linksEl = document.getElementById("ce-sw-modal-links");
    var linksHtml = "";
    if (item.webUrl) {
      linksHtml += '<a class="ce-sw-modal-link is-primary" href="' + escapeHtml(item.webUrl) + '" target="_blank" rel="noopener noreferrer">เปิดหน้าข่าวบน ce.fit.ssru.ac.th</a>';
    }
    if (item.fbUrl) {
      linksHtml += '<a class="ce-sw-modal-link" href="' + escapeHtml(item.fbUrl) + '" target="_blank" rel="noopener noreferrer">ดูโพสต์ต้นฉบับ Facebook</a>';
    }
    if (item.docUrl) {
      linksHtml += '<a class="ce-sw-modal-link" href="' + escapeHtml(item.docUrl) + '" target="_blank" rel="noopener noreferrer">เอกสารบทความ / สิทธิบัตร</a>';
    }
    linksEl.innerHTML = linksHtml;

    modalBackdropEl.classList.add("is-open");
    modalBackdropEl.setAttribute("aria-hidden", "false");
    modalCloseEl.focus();
  }

  function closeModal() {
    modalBackdropEl.classList.remove("is-open");
    modalBackdropEl.setAttribute("aria-hidden", "true");
    resumeAutoplay();
  }

  /* ===== Render Year-by-Year Archive Below Hero ===== */
  function renderArchive() {
    var q = state.search.trim().toLowerCase();
    var filtered = WORKS.filter(function (item) {
      if (state.yearGroup !== "all" && item.yearGroup !== state.yearGroup) return false;
      if (state.category !== "all" && item.category !== state.category) return false;
      if (q) {
        var hay = [
          item.title,
          item.shortTitle,
          item.summary,
          item.fullDesc,
          item.place,
          item.venue,
          item.year,
          (item.students || []).join(" "),
          (item.advisors || []).join(" ")
        ].join(" ").toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    if (!filtered.length) {
      archiveContainerEl.innerHTML = '<div class="ce-sw-empty">ไม่พบผลงานนักศึกษาที่ตรงกับเงื่อนไขการค้นหา ลองล้างคำค้นหรือเลือกปีการศึกษาอื่น</div>';
      return;
    }

    var groupsOrder = ["2569", "2568", "2567", "2562-2566"];
    var groupLabels = {
      "2569": "ผลงานนักศึกษา ปี พ.ศ. 2569 (2026)",
      "2568": "ผลงานนักศึกษา ปี พ.ศ. 2568 (2025)",
      "2567": "ผลงานนักศึกษา ปี พ.ศ. 2567 (2024)",
      "2562-2566": "ผลงานนักศึกษาและสิทธิบัตร ปี พ.ศ. 2562–2566 (2019–2023)"
    };

    var html = "";
    groupsOrder.forEach(function (yg) {
      var list = filtered.filter(function (w) { return w.yearGroup === yg; });
      if (!list.length) return;

      html += '<section class="ce-sw-year-section" id="year-' + yg + '">';
      html += '<div class="ce-sw-year-header">';
      html += '<h3 class="ce-sw-year-heading"><span class="ce-sw-year-badge">' + escapeHtml(yg) + '</span><span>' + escapeHtml(groupLabels[yg]) + '</span></h3>';
      html += '<span class="ce-sw-year-count">' + list.length + ' ผลงาน</span>';
      html += '</div>';
      html += '<div class="ce-sw-grid">';

      list.forEach(function (item) {
        html += '<article class="ce-sw-grid-card" data-work-id="' + escapeHtml(item.id) + '">';
        html += '<div class="ce-sw-grid-thumb" data-open-id="' + escapeHtml(item.id) + '">';
        html += '<img src="' + escapeHtml(imgSrc(item.image)) + '" alt="' + escapeHtml(item.title) + '" loading="lazy">';
        html += '<span class="ce-sw-grid-tag">' + escapeHtml(item.categoryLabel) + '</span>';
        html += '</div>';
        html += '<div class="ce-sw-grid-body">';
        html += '<div class="ce-sw-grid-date">' + escapeHtml(item.date) + ' • ' + escapeHtml(item.place) + '</div>';
        html += '<h4 class="ce-sw-grid-title">' + escapeHtml(item.title) + '</h4>';
        html += '<p class="ce-sw-grid-desc">' + escapeHtml(item.summary) + '</p>';
        html += '<div class="ce-sw-grid-foot">';
        html += '<button type="button" class="ce-sw-grid-btn" data-open-id="' + escapeHtml(item.id) + '">ดูรายละเอียด</button>';
        html += '<button type="button" class="ce-sw-grid-hero-btn" data-hero-id="' + escapeHtml(item.id) + '">เล่นบน Hero ↑</button>';
        html += '</div></div></article>';
      });

      html += '</div></section>';
    });

    archiveContainerEl.innerHTML = html;

    var openBtns = archiveContainerEl.querySelectorAll("[data-open-id]");
    for (var i = 0; i < openBtns.length; i++) {
      openBtns[i].addEventListener("click", function () {
        var id = this.getAttribute("data-open-id");
        var found = WORKS.find(function (w) { return w.id === id; });
        openModal(found);
      });
    }

    var heroBtns = archiveContainerEl.querySelectorAll("[data-hero-id]");
    for (var j = 0; j < heroBtns.length; j++) {
      heroBtns[j].addEventListener("click", function () {
        var id = this.getAttribute("data-hero-id");
        var items = getDeckItems();
        var idx = items.findIndex(function (w) { return w.id === id; });
        if (idx === -1) {
          setYearGroup("all");
          items = getDeckItems();
          idx = items.findIndex(function (w) { return w.id === id; });
        }
        window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
        if (idx !== -1) {
          setTimeout(function () {
            goToSlide(idx, null);
          }, 260);
        }
      });
    }
  }

  /* ===== Switch Year Filter ===== */
  function setYearGroup(yg) {
    state.yearGroup = yg;
    state.activeIndex = 0;
    for (var i = 0; i < yearTabs.length; i++) {
      var tab = yearTabs[i];
      var isAct = tab.getAttribute("data-year") === yg;
      tab.classList.toggle("is-active", isAct);
      tab.setAttribute("aria-pressed", isAct ? "true" : "false");
    }

    var items = getDeckItems();
    if (items.length) {
      backdropImgEl.classList.remove("is-zooming");
      backdropImgEl.src = imgSrc(items[0].image);
      backdropImgEl.alt = items[0].title;
      void backdropImgEl.offsetWidth;
      backdropImgEl.classList.add("is-zooming");

      renderDetails(items[0], true);
      renderDeck(items, 0, false);
      updateCounter(0, items.length);
      resetProgressTimer();
      startProgressTimer();
    }
    renderArchive();
  }

  /* ===== Event Bindings ===== */
  for (var t = 0; t < yearTabs.length; t++) {
    yearTabs[t].addEventListener("click", function () {
      setYearGroup(this.getAttribute("data-year"));
    });
  }

  for (var c = 0; c < catPills.length; c++) {
    catPills[c].addEventListener("click", function () {
      state.category = this.getAttribute("data-cat");
      for (var k = 0; k < catPills.length; k++) {
        catPills[k].classList.toggle("is-active", catPills[k] === this);
      }
      renderArchive();
    });
  }

  if (searchInputEl) {
    searchInputEl.addEventListener("input", function () {
      state.search = this.value || "";
      renderArchive();
    });
  }

  prevBtnEl.addEventListener("click", function () {
    var items = getDeckItems();
    goToSlide(state.activeIndex - 1, null);
  });

  nextBtnEl.addEventListener("click", function () {
    var items = getDeckItems();
    goToSlide(state.activeIndex + 1, null);
  });

  detailBtnEl.addEventListener("click", function () {
    var items = getDeckItems();
    if (items[state.activeIndex]) openModal(items[state.activeIndex]);
  });

  galleryBtnEl.addEventListener("click", function () {
    var items = getDeckItems();
    if (items[state.activeIndex]) openModal(items[state.activeIndex]);
  });

  var archiveJumpBtn = document.getElementById("ce-sw-archive-jump");
  if (archiveJumpBtn) {
    archiveJumpBtn.addEventListener("click", function () {
      var target = document.getElementById("ce-sw-archive");
      if (target) {
        target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
      }
    });
  }

  heroEl.addEventListener("mouseenter", pauseAutoplay);
  heroEl.addEventListener("mouseleave", resumeAutoplay);

  modalCloseEl.addEventListener("click", closeModal);
  modalBackdropEl.addEventListener("click", function (e) {
    if (e.target === modalBackdropEl) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (modalBackdropEl.classList.contains("is-open")) {
      if (e.key === "Escape") closeModal();
      return;
    }
    if (document.activeElement && document.activeElement.tagName === "INPUT") return;
    if (e.key === "ArrowRight") {
      goToSlide(state.activeIndex + 1, null);
    } else if (e.key === "ArrowLeft") {
      goToSlide(state.activeIndex - 1, null);
    }
  });

  /* ===== Initial Boot ===== */
  setYearGroup("all");
})();
