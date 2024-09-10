import {observerMixin} from "./mixin.js"

class TodoItem {
    constructor(text) {
        this.text = text;
    };

    equals(other) { // Simple version of Object Value patterns to check for duplicates
        return this.text === other.text;
    }
}

class TodoList {
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
}

// APPLYING the observer mixin to the prototype of the TodoList class
Object.assign(TodoList.prototype, observerMixin)