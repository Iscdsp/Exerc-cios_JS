const section = document.querySelector(".container");

const input = document.querySelector(".new-task");
const button = document.querySelector(".btn-add-task");
const taskList = document.querySelector(".tasks");

function taskSaving() {
  const liTasks = taskList.querySelectorAll("li");
  const taskToDoArray = [];

  for (let task of liTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace("Apagar", "");
    taskToDoArray.push(taskText);
  }

  const JSONTasks = JSON.stringify(taskToDoArray);
  localStorage.setItem("tarefas", JSONTasks);
  console.log(taskToDoArray);
}
//função criar item de lista
function createLi() {
  const li = document.createElement("li");
  return li;
}
function createDeleteButton(li) {
  li.innerText += " ";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Apagar";
  deleteButton.setAttribute("class", "apagar");
  li.appendChild(deleteButton);
}
//função de limpar a caixa de texto
function clearInput() {
  input.value = "";
  input.focus();
}

// adição do evento de pressionamento  da tecla ENTER
input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!input.value) return;
    createTask(input.value);
  }
});

//função para criar a tarefa
function createTask(task) {
  const li = createLi();
  li.innerText = task;
  taskList.appendChild(li);
  clearInput();
  createDeleteButton(li);
  taskSaving();
}

// adição do evento de click para criação da tarefa
button.addEventListener("click", (e) => {
  if (!input.value) return;
  createTask(input.value);
});

// função apagar item
document.addEventListener("click", (e) => {
  const elemento = e.target;
  if (elemento.classList.contains("apagar")) {
    elemento.parentElement.remove();
    taskSaving();
  }
});

//função ler tarefas

function addSaveTasks() {
  const tasks = localStorage.getItem("tarefas");
  const taskListLS = JSON.parse(tasks);

  for (let task of taskListLS) {
    createTask(task);
  }
}
addSaveTasks();
