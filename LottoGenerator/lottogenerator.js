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
  let lotto_text = document.getElementById("lotto_text");
}
