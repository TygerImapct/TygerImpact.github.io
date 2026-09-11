// รับค่าแสดงชื่อใน id After-Yourname จาก HTML
const getafter_name = document.getElementById('After-Yourname');
const getmainLog = document.getElementById('Main-Login');
     // รับค่าชื่อ จากหน้า Quiz Login
const getNameinput = document.getElementById('name-youtube');
// ประกาศฟังค์ชั่น GotoQuiz เพื่อให้กรอกชื่อผ่านหน้า Quiz Login แล้วนำชื่อมาแสดงคำทักทายและดึงค่าเเสดงบนหน้า Quiz 
function GotoQuiz(src){
    // ประกาศรับค่า id Show-displayเก็บไวเใน getshow_display เพื่อรอรับค่าจากเงื่อนไขนำไปแสดงผล
    const getshow_display= document.getElementById('Show-display');
    const getPanel = document.getElementById('panel') ;
    // ประกาศ let รับค่า getNameinputมาเก็บไว้ ใน Myname
    let Myname = getNameinput.value;
    // ประกาศค่าว่างเก็บค่าข้อมูลหลังผ่านเงื่อนไขของ panal
    let panelshow ='';
    // ประกาศค่าว่างเก็บค่าข้อมูลหลังผ่านเงื่อนไขของ Class
    let classhow ='';
    let classMain = ''
    // ประกาศค่าว่างเก็บค่าการเเสดงผลชื่อให้หน้า Quiz
    let NametopQuiz='';
    // เงื่อนไข ถ้าชื่อ (Myname) คือค่าว่างให้ panelshow เก็บค่าไว้เเล้วนำไปเเสดงในบรรทัดที่ 30 classhow ส่งการเเสดงผล .error ที่ className ของ CSS ในบรรทัดที่ 31
    if(Myname == ""){
        panelshow = `นายลืมกรอกชื่อนะ! กรอกด้วย!!`;
        classhow = "error";
        
    }
    // Myname ไม่เข้าเงื่อนไขใดๆ ก็จะทำคำสั่ง panelshow classhow NametopQuizเพื่อเเสดงข้อความในหน้า Quiz พร้อมฟังชั่น HiddenQuizLogin หน่วงเวลาไว้ 2 วินาที เพื่อซ่อนหน้า QuizLogin
    else{
        const hero = document.getElementById('hero');
        hero.style.backgroundImage = `url('${src}')`;
        panelshow = `อรุณสวัสดิ์น้า, ${Myname}! Welcome!`;
        classhow = "success";
        NametopQuiz = `คุณ, ${Myname} จะเลือกอะไรจากคำถามนี้!`;
        setTimeout(HiddenQuizLogin,1700);
    }
    // นำค่าที่ panelshow  NametopQuiz มาเเสดง textContent ผ่าน id ประกาศไว้ด้านบน และเปลี่ยน class ตามค่าที่ classhow รับมาจากเงื่อนไข
    getPanel.textContent = panelshow;
    getshow_display.className = classhow ;
    getafter_name.textContent = NametopQuiz;
    
}


const getQuizCon = document.getElementById('Quiz-Con')
//ประกาศฟังก์ชันที่ใช้สำหรับ:ซ่อน Quiz Login โดยเพิ่ม class="hidden" เข้าไป เเล้วจากนั้น remove("hidden") จาก Quiz เพิ่อแสดงคำถาม
function HiddenQuizLogin(){
    getmainLog.classList.add("hidden");
    getQuizCon .classList.remove("hidden")
}
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
// ประกาศ Arrey เก็บค่าคำถาม Quiz 5ข้อที่ม๊ options ให้ 4 ตัวเลื่อกเเละเก็บค่า answer เก็บค่าที่ถูกต้อง
const questions = [
  {
    question: "1. ทุกวันที่ 10 ของเดือนมีไลฟ์ชื่อว่าอะไร?",
    options: ["ที่นี่คฤหาสน์ฮานามิ", "โฟนกับหนม", "หลับตาสิฉันจะอ่านหนังสือให้ฟัง", "กาชา【 Gacha 】มาจับรางวัลกัน"],
    answer: "กาชา【 Gacha 】มาจับรางวัลกัน"
  },
  {
    question: "2. Hanami Lay สุงเท่าไหร่? (อ้างอิงจากไลฟ์ Debut)",
    options: ["153 cm", "164 cm", "156 cm", "160 cm"],
    answer: "164 cm"
  },
  {
    question: "3. สมาชิกระดับสูงสุดมีชื่อว่าอะไร?",
    options: ["ULTIMATE!! Bulerlnwza007", "Snack-addicts", "Crazy Snack Lover", "Snack GAG"],
    answer: "ULTIMATE!! Bulerlnwza007"
  },
  {
    question: "4. Hanami Lay ตาม Lore มีอาวุธอะไรบ้าง",
    options: ["มีดดาบ,กระบอง", "ไม้กายสิทธื", "ค้อน,กรรไกร,กระดาษ", "ไม่มีอาวุธ"],
    answer: "ค้อน,กรรไกร,กระดาษ"
  },
  {
    question: "5. Hanami Lay เกิดวันที่เท่าไร?",
    options: ["7 กรกฎาคม", "12 กันยายน", "20 สิงหาคม", "4 พฤษภาคม"],
    answer: "12 กันยายน"
  },
  {
    question: "6. ท่านแม่ของ Hanami Lay มีชื่อว่าอะไร",
    options: ["Hanami Chocolate", "Hanami Guligo", "Hanami Oreo", "Hanami Kitkat"],
    answer: "Hanami Guligo"
  }
];
// ประกาศค่าตำแหน่งของอารเรย์ กับเก็บค่าคะเเนน
let currentQuestion = 0;
let score = 0;

const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const quizEl = document.getElementById("quiz");

//ประกาศการทำงาน ของฟังก์ชันที่แสดงคำถาม + สร้างปุ่มตัวเลือก บนหน้าเว็บ โดยดึงข้อมูลจากอาร์เรย์
showQuestion();

function showQuestion() {
    // ประกาศ Quiz ดึงข้อมูลคำถามจาก array questions ตามตำแหน่งของตัวแปร currentQuestion (เริ่มจาก 0 → ข้อแรก)
    const Quiz = questions[currentQuestion];
    // แสดงข้อความคำถามใน <div id="question"> 
    questionEl.textContent = Quiz.question;
    // ล้างตัวเลือกเก่าที่แสดงก่อนหน้าออก (เพื่อไม่ให้ซ้ำ) จากการ innerHTML
    optionsEl.innerHTML = "";
    // วนลูปสร้างปุ่มตามจำนวนตัวเลือกในคำถามข้อนั้นๆ 
    Quiz.options.forEach(option => {
    // สร้างปุ่มใหม่ใน HTML ด้วย JavaScript
    const btn = document.createElement("button");
    // แสดงข้อความของปุ่ม = option เช่น “คุณหนู”
    btn.textContent = option;
    // เพิ่มคลาส CSS เพื่อจัดสไตล์ปุ่ม
    btn.classList.add("btn");
    // เมื่อคลิกปุ่ม จะเรียกฟังก์ชัน selectAnswer พร้อมส่งค่าตัวเลือกที่กด
    btn.onclick = () => selectAnswer(option);
    // นำปุ่มนี้ไปแสดงใน <div id="options">
    optionsEl.appendChild(btn);
  });
}
//ประกาศฟังก์ชันที่ใช้สำหรับตรวจคำตอบที่ผู้เล่นเลือก ว่าถูกหรือไม่ แล้วไปยังคำถามข้อต่อไป ถ้าตอบครบแล้ว ก็จะแสดงผลคะแนนสุดท้าย
function selectAnswer(selected) {
    // ดึงคำตอบที่ถูกต้องของคำถามข้อนี้จากอาร์เรย์ questions.answer
  const correct = questions[currentQuestion].answer;
  //เงื่อนไข ถ้าคำตอบที่เลือกตรงกับคำตอบที่ถูกต้อง → บวกคะแนน score ขึ้น 1
  if (selected === correct) score++;
  // ไปคำถามต่อไปจากการ + ค่า currentQuestion (เช่น จากข้อ 0 → 1 → 2)
  currentQuestion++;
    // ถ้ายังไม่ถึงข้อสุดท้าย ให้แสดงคำถามถัดไป
  if (currentQuestion < questions.length) {
    showQuestion();
    // ถ้าตอบครบทุกข้อแล้ว → เรียก showResult() เพื่อแสดงคะแนนรวม
  } else {
    showResult();
    
  }
}
//ประกาศฟังก์ชันที่ใช้สำหรับเเสดงผลคะเเนนรวมจาก score โดยการ remove class="hidden" พร้อมซ่อนหน้าต่าง Quiz โดยการ add class="hidden" 
function showResult() {
  const getNameYou = document.getElementById('name-youtube');
  let youtube_name = getNameYou.value
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `คุณได้คะแนน ${score} / ${questions.length}`;

  const getCongrad=document.getElementById('Congrad');
  const getRetry=document.getElementById('Retry');
  if (score < questions.length) {
    getCongrad.classList.add("hidden");
    NametopQuiz="ถ้าอยากรู้จักฉันเพิ่มมาหาฉันได้ที่ Hanami Lay CH." ;
    getafter_name.textContent = NametopQuiz;
  }
  else if (score === questions.length) {
   getRetry.classList.add("hidden");
   NametopQuiz=`ยินดีต้อนรับน้าพ่อบ้าน ${youtube_name}!`;
   getafter_name.textContent = NametopQuiz;
  }
}