/* Event Listener */

//Syntax: element.addEventListener(event,function,useCapture);

let myP = document.getElementById("myP");
let myDiv = document.getElementById("myDiv");
let myP2 = document.getElementById("myP2");
let myDiv2 = document.getElementById("myDiv2");

myP.addEventListener("click", changebgcolor);
function changebgcolor() {
  myDiv.style.background = "lightblue";
}

// myP.onclick = function(){myDiv.style.background = "lightblue"};

myP.addEventListener("click", changeText, false);

myDiv.addEventListener("click", changeText2, false);

myP.addEventListener("mouseover", changebordercolor);

function changebordercolor() {
  myDiv.style.background = "blue";
}

function changeText() {
  myP2.textContent = myP2.textContext +=
    "Accorting to a Cornell publication, the owner is ~700 pounds.";
}

function changeText2() {
  myP2.textContent = myP2.textContent += "THE REAL ANSWER.";
}
