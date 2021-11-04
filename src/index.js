import _ from 'lodash';
import './style.css';
// import Icon from './icon.png';
// import Data from './data.xml';
// import Notes from './data.csv';

const tasks = [
  {
    description: 'visit friends',
    completed: true,
    index: 0,
  },
  {
    description: 'do my laundry',
    completed: false,
    index: 1,
  },
  {
    description: 'make my bade',
    completed: true,
    index: 2,
  },
];
const todoList = document.querySelector('.todo-list');
// const todoButton = document.querySelector('.todo-button');

// Function
function addTodo() {
  for (let i = 0; i <= tasks.length; i += 1) {
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv);
    // const listOne = document.createElement("input");
    // listOne.classList.add("list");
    // npx eslint .
    const newTodo = document.createElement('h4');
    newTodo.classList.add('todo_txt');
    newTodo.innerText = tasks[i].description;
    todoDiv.innerHTML += '<input type="checkbox" aria-selected="false" class="list" name="taskCompleted">';
    todoDiv.appendChild(newTodo);
    todoDiv.innerHTML += '<i class="fas fa-ellipsis-v"></i>';
  }
}

addTodo();