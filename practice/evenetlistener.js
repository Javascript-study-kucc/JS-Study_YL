/* Event Listener */

//Syntax: element.addEventListener(event,function,useCapture);

let myP = document.getElementById("myP");
let myDiv = document.getElementById("myDiv");
let myP2 = document.getElementById("myP2");
let myDiv2 = document.getElementById("myDiv2");

myP.addEventListener("click", function paintbox() {
  myDiv.style.background = "lightblue";
});
