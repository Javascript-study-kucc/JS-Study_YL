const ball1 = document.getElementById("num1"),
  ball2 = document.getElementById("num2"),
  ball3 = document.getElementById("num3"),
  ball4 = document.getElementById("num4"),
  ball5 = document.getElementById("num5"),
  ball6 = document.getElementById("num6"),
  ball7 = document.getElementById("bonus_num");

function get_lottonum() {
  //save 6 arrays to lotto
  let lotto = new Array(6);
  //how many lotto numbers
  let count = 0;
  //check if there is number duplication btw lotto numbers
  let checkDup = true;

  while (count < 6) {
    //random numbers from 1 to 45
    let number = parseInt(Math.random() * 45) + 1;

    for (let i = 0; i < count; i++) {
      //check duplication from 1 to i
      if (lotto[i] == number) checkDup = false;
    }

    if (checkFlag) {
      //if there is no duplication, increase count by 1
      lotto[count] = number;
      count++;
    }
    checkDup = true;
  }
  //generate lotto number by assigning lotto[]
  document
    .getElementById("gen_button")
    .addEventListener("click", get_lottonum());

  ball1.innerHTML = lotto[0];
  ball2.innerHTML = lotto[1];
  ball3.innerHTML = lotto[2];
  ball4.innerHTML = lotto[3];
  ball5.innerHTML = lotto[4];
  ball6.innerHTML = lotto[5];
  ball7.innerHTML = lotto[6];
  return lotto;
}

//<1113 Study>
//innertext(text 요소)와 innerHTML(HTML 요소)
//document.getElementById(`n{i}`).innerHTML = `${n1[i]}`
//Set이 있는 경우에는 중복 X -집합 개념

//DOM(문서 객체 모델)
//API (web or XML page) = DOM + JS (scripting language)
