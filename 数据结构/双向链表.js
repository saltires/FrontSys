class Node {
    constructor(element) {
        this.element = element
        this.next = null
        this.previous = null
    }
}

class List {
    constructor() {
        this.head = new Node('head')
        this.last = new Node('last')
    }
    find(element) {
        let currNode = this.head
        while (currNode.next !== null && currNode.element !== element) {
            currNode = currNode.next
        }
        return currNode
    }
    insert(element, node) {
        let newNode = new Node(element)
        let currNode = this.find(node)
        // 当前节点是最后一个节点
        if (currNode.next === null) {
            this.last.previous = newNode
        }
        newNode.previous = currNode
        newNode.next = currNode.next
        currNode.next = newNode
        return this
    }
    remove(element) {
        let currNode = this.find(element)
        if (currNode.next !== null) {
            currNode.previous.next = currNode.next
            currNode.next.previous = currNode.previous
            currNode.next = null
            currNode.previous = null
        } else {
            currNode.previous.next = null
            currNode.next = null
            currNode.previous = null
        }
        return this
    }
    display() {
        let currNode = this.head
        while (currNode.next !== null) {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }
    dispReverse() {
        let currNode = this.last
        while (currNode.previous !== null) {
            console.log(currNode.previous.element)
            currNode = currNode.previous
        }
    }
}

let list = new List()

list.insert('foo', 'head').insert('bar', 'foo').dispReverse()