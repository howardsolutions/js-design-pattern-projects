import { TodoList, TodoItem } from './classes.js';

class Command {
    name;
    args; // an Array

    constructor(name, args) {
        this.name = name;
        this.args = args;
    }
};

// Enum
const Commands = {
    ADD: 'add',
    DELETE: 'delete',
}

const CommandExecutor = {
    execute(command) {
        const todoList = TodoList.getInstance();

        if (command.name === Commands.ADD) {
            const todoInput = globalThis.DOM.todoInput;
            const todoText = todoInput.value.trim();
            const itemInList = todoList.find(todoText);

            if (todoText !== '' && !itemInList) {
                todoInput.value = '';
                todoInput.add(new TodoItem(todoText));
            }

        } else if (command.name === Commands.DELETE) {
            const [textToDelete] = command.args;
            todoList.delete(textToDelete);
        }
    }
};