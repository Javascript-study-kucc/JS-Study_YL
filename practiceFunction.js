"use strict";

function changeName(obj) {
  obj.name = "yilinthecoder";
}
const yilin = { name: "yilin" };
changeName(yilin);
console.log(yilin);

function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

function printAll(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}
printAll("My", "name", "is", "yilin");

let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message); //hello
  console.log(globalMessage); //glob
  function printAnother() {
    console.log(message); //hello
    let childMessage = "hello";
  }
  //console.log(childMessage); //에러발생 childMessage is not defined
}
printMessage();
//console.log(message); //에러발생 message is not defined

function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // 필요한 logic
}

function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  //anonymous function
  console.log("yes!");
};
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);
