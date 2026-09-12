const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// stars
const stars = $('#stars');
for(let i=0;i<110;i++){
  const s=document.createElement('i'); s.className='star';
  s.style.left=Math.random()*100+'%'; s.style.top=Math.random()*100+'%';
  s.style.animationDelay=Math.random()*3+'s'; s.style.opacity=.15+Math.random()*.7;
  stars.appendChild(s);
}

// cursor glow
const glow=$('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

// reveal sections
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
$$('.section-hidden').forEach(x=>observer.observe(x));

// start
$('#startBtn').addEventListener('click',()=>{
  $('#birthday').scrollIntoView({behavior:'smooth'});
  setTimeout(()=>toast('เซอร์ไพรส์เริ่มแล้ว ✨'),600);
});

// candles
let blown=false;
$('#blowBtn').addEventListener('click',()=>{
  if(blown)return;
  blown=true;
  $$('.candle').forEach(c=>c.classList.add('off'));
  confetti(55);
  $('#candleNote').textContent='เย้! ขอพรแล้วนะ ✨';
  toast('Happy Birthday! 🎂');
});

// gift
$('#giftBtn').addEventListener('click',()=>{
  $('#giftBtn').classList.toggle('open');
  $('#giftMessage').classList.toggle('show');
  if($('#giftBtn').classList.contains('open')) confetti(30);
});

// music
const audio=$('#bgMusic'), musicBtn=$('#musicBtn');
musicBtn.addEventListener('click',()=>{
  if(audio.paused){
    audio.play().then(()=>musicBtn.classList.add('playing')).catch(()=>toast('ใส่ไฟล์ music.mp3 ในโฟลเดอร์เว็บก่อนนะ'));
  }else{audio.pause();musicBtn.classList.remove('playing')}
});

// typing
let typed=false;
const finalSection=$('#final');
const typeObserver=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting&&!typed){
    typed=true;
    typeText($('#typingTitle'),'สำหรับวันพิเศษของคุณหนู ♡',70);
    setTimeout(()=>typeText($('#typingText'),
`ขอให้ปีนี้เป็นอีกหนึ่งปีที่มีแต่เรื่องดี ๆ เข้ามา
ขอให้สิ่งที่หวังไว้ค่อย ๆ กลายเป็นจริง
และไม่ว่าจะเจอเรื่องอะไร ก็ขอให้มีรอยยิ้มอยู่เสมอ

สุขสันต์วันเกิดและครบรอบ 5 ปี ด้วยนะครับ จากพ่อบ้าน Tyger 🎂✨`,28),1300);
  }
},{threshold:.35});
typeObserver.observe(finalSection);

function typeText(el,text,speed){
  el.textContent='';let i=0;
  const timer=setInterval(()=>{
    el.textContent+=text[i++]||'';
    if(i>text.length)clearInterval(timer);
  },speed);
}

// fireworks/confetti
$('#fireworkBtn').addEventListener('click',()=>{confetti(150);toast('ขอให้มีความสุขมาก ๆ ครับ 🎆💖')});
function confetti(count){
  const box=$('#confetti');
  for(let i=0;i<count;i++){
    const c=document.createElement('span');c.className='confetti';
    c.style.left=Math.random()*100+'%';
    c.style.animationDelay=Math.random()*.8+'s';
    c.style.transform=`rotate(${Math.random()*360}deg)`;
    c.style.background=['#ff8fc7','#9e8cff','#ffd98a','#7de1ff','#ffffff'][Math.floor(Math.random()*5)];
    c.style.width=(5+Math.random()*7)+'px';c.style.height=(8+Math.random()*10)+'px';
    box.appendChild(c);setTimeout(()=>c.remove(),4000);
  }
}
function toast(msg){
  const t=$('#toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2200);
}
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});
