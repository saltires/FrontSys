function List() {
    // 列表的元素个数
    this.listSize = 0
    // 列表的当前位置
    this.pos = 0
    // 用数组作为存储列表元素的容器
    this.dataStore = []
    // 清空列表中的所有元素
    this.clear = clear
    // 查找元素在列表中的位置，没找到则返回 -1
    this.find = find
    // 返回列表的字符串形式
    this.toString = toString
    // 在现有元素后插入新元素
    this.insert = insert
    // 在列表的末尾添加新元素
    this.append = append
    // 从列表中删除当前元素
    this.remove = remove
    // 将列表中的当前位置移动到第一个元素
    this.front = front
    // 将列表中的当前位置移动到最后一个元素
    this.end = end
    // 将当前位置前移一位
    this.prev = prev
    // 将当前位置后移一位
    this.next = next
    // 返回列表的当前位置
    this.currPos = currPos
    // 将当前位置移动到指定位置
    this.moveTo = moveTo
    // 显示当前元素
    this.getElement = getElement
    // 判断指定元素是否在列表中
    this.contains = contains
    // 返回列表中元素的个数
    this.length = length
}

function append(item) {
    this.dataStore[this.listSize++] = item
}

function find(item) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (item === this.dataStore[i]) {
            return i
        }
    }
    return -1
}

function remove(item) {
    var position = this.find(item)
    if (position > -1) {
        this.dataStore.splice(position, 1)
        this.listSize--
        return true
    } 

    return false
}

function length() {
    return this.listSize
}

function toString() {
    return this.dataStore
}

function insert(element, after) {
    var position = this.find(after)
    if (position > -1) {
        this.dataStore.splice(position+1, 0, element)
        this.listSize++
        return true
    }
    return false
}

function clear() {
    delete this.dataStore
    this.dataStore = []
    this.pos = this.listSize = 0
}

function contains(element) {
    return this.find(element) > -1 ? true : false
}

function front() {
    this.pos = 0
}

function end() {
    this.pos = this.listSize - 1
}

function prev() {
    if (this.pos > 0) {
        --this.pos
    }
    return this.pos
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos
    }
    return this.pos
}

function currPos() {
    return this.pos
}


function moveTo(position) {
    if (position >= 0 && position <= this.listSize - 1) {
        this.pos = position
    }
}

function getElement() {
    return this.dataStore[this.pos]
} 
let foo = new List()

foo.append(1)
foo.append(2)
foo.append(3)
foo.remove(1)

console.log(foo)