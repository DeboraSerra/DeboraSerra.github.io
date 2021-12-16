const inputTask = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskButton = document.querySelector('#criar-tarefa');
const deleteAllButton = document.querySelector('#apaga-tudo');
const deleteCompleted = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const removeSelectedButton = document.querySelector('#remover-selecionado');

function completeTask(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

function selectItem(e) {
  const newTaskList = document.querySelectorAll('.task');
  for (let i = 0; i < newTaskList.length; i += 1) {
    if (newTaskList[i] !== e.target) {
      newTaskList[i].classList.remove('selected');
    }
  }
  if (e.target.classList.contains('selected')) {
    e.target.classList.remove('selected');
  } else {
    e.target.classList.add('selected');
  }
}

function addNewTaskButton() {
  if (!inputTask.value) {
    alert('Nenhuma tarefa adicionada!');
  } else {
    let newItem = document.createElement('li');
    let text = inputTask.value;
    newItem.innerText = text;
    newItem.className = 'task';
    taskList.appendChild(newItem);
    newItem.addEventListener('click', selectItem);
    newItem.addEventListener('dblclick', completeTask);
    inputTask.value = '';
  }
}

taskButton.addEventListener('click', addNewTaskButton);

function clearTaskList() {
  const newTaskList = document.querySelectorAll('.task');
  for (let i = 0; i < newTaskList.length; i += 1) {
    taskList.removeChild(newTaskList[i]);
  }
  localStorage.clear();
}

deleteAllButton.addEventListener('click', clearTaskList);

function clearCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i += 1) {
    taskList.removeChild(completedTasks[i]);
  }
}

deleteCompleted.addEventListener('click', clearCompletedTasks);

function saveTasks() {
  const listToSave = [];
  const newTaskList = document.querySelectorAll('.task');
  for (let i = 0; i < newTaskList.length; i += 1) {
    listToSave.push(newTaskList[i].innerText);
    let task = newTaskList[i].innerText;
    let taskClass = newTaskList[i].classList;
    localStorage.setItem(JSON.stringify(task), taskClass);
  }
  localStorage.setItem('Task list', JSON.stringify(listToSave));
}

saveTasksButton.addEventListener('click', saveTasks);

function addClasses() {
  const newTasks = document.querySelectorAll('li');
  for (let i = 0; i < newTasks.length; i += 1) {
    let key = newTasks[i].innerText;
    let classes = localStorage.getItem(JSON.stringify(key));
    newTasks[i].classList = classes;
  }
}

function getTasks() {
  const savedList = JSON.parse(localStorage.getItem('Task list'));
  for (let i = 0; i < savedList.length; i += 1) {
    let newItem = document.createElement('li');
    let text = savedList[i];
    newItem.innerText = text;
    taskList.appendChild(newItem);
    newItem.addEventListener('click', selectItem);
    newItem.addEventListener('dblclick', completeTask);
  }
  addClasses();
}

window.onload = function () {
  if (localStorage.getItem('Task list')) {
    getTasks();
  }
}

function moveUp() {
  if (document.querySelector('.selected')) {
    if (document.querySelector('.selected').previousElementSibling) {
      let taskOne = document.querySelector('.selected');
      let classOne = taskOne.classList.value;
      let taskTwo = document.querySelector('.selected').previousElementSibling;
      let classTwo = taskTwo.classList.value;
      localStorage.setItem('selectTask', JSON.stringify(taskOne.innerHTML));
      let taskItem = JSON.parse(localStorage.getItem('selectTask'));
      taskOne.innerText = taskTwo.innerText;
      taskTwo.innerText = taskItem;
      taskOne.classList = classTwo;
      taskTwo.classList = classOne;
    }
  }
}

moveUpButton.addEventListener('click', moveUp);

function moveDown() {
  if (document.querySelector('.selected')) {
    if (document.querySelector('.selected').nextElementSibling) {
      let taskOne = document.querySelector('.selected');
      let classOne = taskOne.classList.value;
      let taskTwo = document.querySelector('.selected').nextElementSibling;
      let classTwo = taskTwo.classList.value;
      localStorage.setItem('selectTask', JSON.stringify(taskOne.innerHTML));
      let taskItem = JSON.parse(localStorage.getItem('selectTask'));
      taskOne.innerText = taskTwo.innerText;
      taskTwo.innerText = taskItem;
      taskOne.classList = classTwo;
      taskTwo.classList = classOne;
    }
  }
}

moveDownButton.addEventListener('click', moveDown);

function removeSelected() {
  const selectedTask = document.querySelector('.selected');
  taskList.removeChild(selectedTask);
}

removeSelectedButton.addEventListener('click', removeSelected);
