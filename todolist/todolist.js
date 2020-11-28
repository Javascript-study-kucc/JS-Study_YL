//change JSON data to JS Object form

let buttonAdd = document.getElementById('button');
let todolist = docoment.getElementById('todolist');
let done = document.getElementById('done');

//function that appends new todo item to Array
function addNewItem(list, itemText){
    //document.createElement() method creates and returns certain tag's HTML element
    let listItem = document.createElement('li');
    listItem.innerText = itemText;
    todolist.appendChild(listItem);
}

buttonAdd.addEventListener('click', addNewTodo());

//function that gets new todo by user input and adds it to list when clicked
function addNewTodo{
    let inputText = document.getElementById('inputText');
    let itemText = inputText.value;

   //blank
    if(!itemText || itemText === "" || itemText ===" ") return false;

    addNewItem(document.getElementById('todolist'),itemText);
}


