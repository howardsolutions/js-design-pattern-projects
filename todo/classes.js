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
    }
}