const toggle = document.getElementById('bgToggle');
const hero = document.getElementById('hero');

const contact1 = document.getElementById('contact-1');
const contact2 = document.getElementById('contact-2');
const contact3 = document.getElementById('contact-3');
const contact4 = document.getElementById('contact-4');
const getstatus = document.getElementById('show-text');

// ตั้งรูปที่ต้องการใช้
const bgLight = 'Day.jpg'; // โหมดแรก
const bgDark = 'Night.jpg';  // โหมดหลัง (เวลาสวิตช์เปิด)

toggle.addEventListener('change', () => {
  let themeName ="";
  let showtxt ="";
  if (toggle.checked) {
    hero.style.backgroundImage = `url('${bgDark}')`;
    themeName ="icon-Dark";
    showtxt ="Lay is Night time"
  } else {
    hero.style.backgroundImage = `url('${bgLight}')`;
    themeName ="icon-Light";
    showtxt ="Hnom is Day time"
  }
  contact1.className = themeName;
  contact2.className = themeName;
  contact3.className = themeName;
  contact4.className = themeName;
  getstatus.textContent = showtxt;

});
