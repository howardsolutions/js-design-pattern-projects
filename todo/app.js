import { TodoList } from './classes.js';
import { Command, CommandExecutor, Commands } from './command.js';
import { LocalStorage } from './storage.js';

globalThis.DOM = {}

const DOM = globalThis.DOM;

function renderList() {
    DOM.todoList.innerHTML = "";

    const list = TodoList.getInstance();

    for (let todo of list.items) {
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');
        
        listItem.innerHTML = `
            ${todo.text} <button class="delete-btn">Delete</button>
        `;

        // Creating <li data-text="..."></li>
        listItem.dataset.text = todo.text;

        DOM.todoList.appendChild(listItem);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    DOM.todoList = document.getElementById('todo-list');
    DOM.addBtn = document.getElementById('add-btn');
    DOM.todoInput = document.getElementById('todo-input');

    DOM.addBtn.addEventListener('click', (event) => {
        const cmd = new Command(Commands.ADD);
        CommandExecutor.execute(cmd);
    });

    DOM.todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const todo = event.target.parentNode.dataset.text;
            const cmd = new Command(Commands.DELETE, [todo]);
            CommandExecutor.execute(cmd);
        }
    });

    TodoList.getInstance().addObserver(renderList);
});

// persist the list inside localStorage
document.addEventListener('DOMContentLoaded', () => {
    LocalStorage.load();
});