function GetLotto() {
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
  //print(?) lotto number
  let lotto_text = document.getElementById("lotto_text");
  lotto_text.value =
    lotto[0] +
    ", " +
    lotto[1] +
    ", " +
    lotto[2] +
    ", " +
    lotto[3] +
    ", " +
    lotto[4] +
    ", " +
    lotto[5];
}

//<1113 Study>
//innertext(text 요소)와 innerHTML(HTML 요소)
//document.getElementById(`n{i}`).innerHTML = `${n1[i]}`
//Set이 있는 경우에는 중복 X -집합 개념

//DOM(문서 객체 모델)
//API (web or XML page) = DOM + JS (scripting language)
