const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#work-form");
const subjectInput = document.querySelector("#subject-form");
const formatInput = document.querySelector("#format-form");
const toDoList = document.getElementById("todo-list");
const worktable = document.getElementById("work-columns");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(event) {
    const li = event.target.parentElement.parentElement;
    li.remove();
    toDos = toDos.filter((targetId) => targetId.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const tr = document.createElement("tr");
    tr.id = newToDo.id;
    const th1 =document.createElement("th");
    th1.innerText = newToDo.text;
    const th2 =document.createElement("th");
    th2.innerText = newToDo.subject;
    const th3 =document.createElement("th");
    th3.innerText = newToDo.format;
    const th4 =document.createElement("th");
    const button = document.createElement("button");
    button.innerText = "❌";
    th4.appendChild(button);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    worktable.appendChild(tr);
    button.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newSubject = subjectInput.value;
    const newFormat = formatInput.value;
    toDoInput.value = "";
    subjectInput.value = "";
    formatInput.value = "";
    const newTodoObj = {
        text: newToDo,
        subject: newSubject,
        format: newFormat,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}