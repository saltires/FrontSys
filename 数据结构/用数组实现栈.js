class Stack {
    constuct() {
       this.dataStore = []
       this.top = 0 
    }

    push(item) {
        this.dataStore[top++] = item
    }

    pop() {
        this.dataStore.pop()
    }

    peek() {
        return this.dataStore[this.dataStore.length - 1]
    }
}

