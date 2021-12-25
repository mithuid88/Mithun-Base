// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//eventlisteners
todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , deleteCheck);
filterOption.addEventListener("click" , filterTodo)

//functions

function addTodo(event) {
event.preventDefault();
const todoDiv =  document.createElement("div");
todoDiv.classList.add("todo");

//create li 

const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);
// //addtodotolocalstorage
// saveLocalTodos(todoInput.value)

// check mark button

const completedButton = document.createElement('button');
completedButton.innerHTML ="<span>&#10003;</span>";
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

// check thrash button

const trashButton = document.createElement('button');
trashButton.innerHTML ="<span>&#128465;</span>";
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv);

//clear todo value
todoInput.value = "";
}


function  deleteCheck(e) {
const item = e.target;
// delete todo
if(item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //ANIMATION
    todo.classList.add("fall");
    // todo.addEventListener('transtionend' , function(){
   
    // });
    // todo.style.display = "none";

}
// check mark
if(item.classList[0] === "complete-btn") {
const todo = item.parentElement;
todo.classList.toggle("completed");
}
}

function filterTodo(e) {
const todos =todoList.childNodes;
console.log(todos);
todos.forEach(function(todo){
switch (e.target.value) {
case "all" : 
todo.style.display = "flex";
break;
case "completed":
if(todo.classList.contains("completed")) {
todo.style.display = "flex";
} else {
    todo.style.display = "none";
}
break;
case "uncomplete": {
    if(!todo.classList.contains("completed")) {
        todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        } 
}
break;
}
});
}


// function saveLocalTodos(todo) {
//     //check--
//     let todos;
//     if(localStorage.getItem("todos" === null)) {
//         todo = [];
//     } else {
//         rodos =JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos" . JSON.stringify(todos));
// }


// fucntion getTodos () {

// }