//change JSON data to JS Object form

let button = document.getElementById('button');
let input = document.getElementById('input');
let list = docoment.getElementById('list');

button.addEventListener('click', addList);
//when button is clicked, add it to the list
function addList{
    //make li element
    let temp = document.createElement('li');
    //put input data to li
    temp.innerHTML = input.value;
    //add input to list
    list.appendChild(temp);
}