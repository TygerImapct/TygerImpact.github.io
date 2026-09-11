const words = ["ฉันมีนามว่า...ฮานามิเลย์", "เป็นคุณหนูแวมไพร์ของคฤหาสน์ฮานามิ","แถมยังมี 2 บุคคลิกด้วยนะ"];

let amout_txt = 0;
let j = 0;

let present_typing = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  present_typing = words[amout_txt];
  typingElement.textContent = present_typing.substring(0, j);

  if (!isDeleting && j < present_typing.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type,1500);
    } else {
      isDeleting = false;
      amout_txt = (amout_txt + 1) % words.length;
      setTimeout(type, 500);
    }
  }
}
type();
