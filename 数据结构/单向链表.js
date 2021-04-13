class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class List {
    constructor() {
        this.head = new Node('head')
    }
    find(element) {
        let currNode = this.head
        while (currNode.element !== element && currNode.next !== null) {
            currNode = currNode.next
        }
        return currNode
    }
    findPrevious(element) {
        let currNode = this.head
        while (currNode.next !== null && currNode.next.element !== element) {
            currNode = currNode.next
        }
        return currNode
    }
    insert(element, before) {
        let currNode = this.find(element)
        let newNode = new Node(element)
        newNode.next = currNode.next
        currNode.next = newNode
        return this
    }
    display() {
        let currNode = this.head
        while (currNode.next !== null) {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }
    remove(element) {
        let previousNode = this.findPrevious(element)
        if (previousNode.next !== null) {
            previousNode.next = previousNode.next.next
        }
        return this
    }
}

let foo = new List()
foo.insert("Conway", "head").insert("Russellville", "Conway").insert("Alma", "Russellville").remove("Russellville").display();