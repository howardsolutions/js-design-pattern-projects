import {observerMixin} from "./mixin.js"

export class TodoItem {
    constructor(text) {
        this.text = text;
    };

    equals(other) { // Simple version of Object Value patterns to check for duplicates
        return this.text === other.text;
    }
}

export class TodoList {
    #data = new Set();

    get items() {
        return this.#data;
    };


    // Singleton
    constructor() {
        if (TodoList.instance) {
            throw new Error(
                `Use TodoList.getInstance() to access the list.`
            );
        }
    };
    
    static instance = null;
    
    static {
        this.instance = new TodoList();
    }

    static getInstance() {
        return this.instance;
    }

    // LIST BEHAVIOUR
    add(item) {
        const listArray = Array.from(this.#data);
        const isItemExist = listArray.filter(t => t.equals(item)).length > 0;

        if (!isItemExist) {
            this.#data.add(item);
            // broadcast the changes
            this.notify();
        }
    }
    
    delete(todo_text) {
        const listArray = Array.from(this.#data);
        const todoToDelete = listArray.filter(t => t.text == todo_text)[0];

        this.#data.delete(todoToDelete);
        
        // broadcast the changes
        this.notify();
    }

    find(todo_text) {
        const listArray = Array.from(this.#data);
        return listArray.find(t => t.text == todo_text);
    }

    replaceList(list) {
        this.#data = list;
        // broadcast the changes
        this.notify();
    }
}

// APPLYING the observer mixin to the prototype of the TodoList class
Object.assign(TodoList.prototype, observerMixin)