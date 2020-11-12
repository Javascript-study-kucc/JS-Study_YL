function GetLottoNum() {
  let lotto = new Array(6);
  let count = 0;
  let checkFlag = true;

  while (count < 6) {
    let number = parseInt(Math.random() * 45) + 1;

    for (let i = 0; i < count; i++) {
      if (lotto[i] == number) checkFlag = false;
    }

    if (checkFlag) {
      lotto[count] = number;
      count++;
    }
    checkFlag = true;
  }
}
