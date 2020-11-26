//change JSON data to JS Object form

let button = document.getElementById('button');
let input = document.getElementById('input');
let list = docoment.getElementById('list');
let done = document.getElementById('done');

button.addEventListener('click', addNewTodo);
//when button is clicked, add it to the list
function addNewTodo{
    //make li element in temp
    let temp = document.createElement('li');
    //put input data to li
    temp.innerHTML = input.value;
    //add input to list
    list.appendChild(temp);
}

