// function Runcountdown(number, digit) {
//   let numLength = number.toString().length();
//   if (numLength >= digit) {
//     return number;
//   } else {
//     new Array(digit - numLength + 1).join("0") + number;
//   }
// }

function pad(n, width) {
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join("0") + n;
}

//let dday2018 = new Date("Nov 15, 2018 00:00:00").getTime(); //1초마다 갱신되도록 함수 생성,실행
//let dday2019 = new Date("Nov 14, 2019 00:00:00").getTime();
let dday2020 = new Date("Dec 3, 2020 00:00:00").getTime();
let dday2021 = new Date("Nov 18, 2021 00:00:00").getTime();

let now = new Date().getTime();

let countDownDate = dday2020;
let distance = countDownDate - now;
if (distance < -86400000) {
  countDownDate = dday2021;
}

setInterval(function () {
  // 오늘 날짜 등록
  let now = new Date().getTime(); // 종료일자에서 현재일자를 뺀 시간
  let distance = countDownDate - now;
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);
  let ms = Math.floor(distance % 1000);

  if (distance > 0) {
    document.getElementById("d-day").innerHTML =
      "" +
      pad(d, 3) +
      ":" +
      pad(h, 2) +
      ":" +
      pad(m, 2) +
      ":" +
      pad(s, 2) +
      "." +
      pad(ms, 3) +
      "";
  } else {
    document.getElementById("d-day").innerHTML =
      "D-DAY<br>" +
      pad(0, 3) +
      ":" +
      pad(0, 2) +
      ":" +
      pad(0, 2) +
      ":" +
      pad(0, 2) +
      "." +
      pad(0, 3) +
      "<br>수능 대박";
  }
}, 25);
