// 原型链继承
function Parent () {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child () {

}

Child.prototype = new Parent()

// 借用构造函数的继承
function Parent (name) {
    this.name = name;
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child (name, age) {
    Parent.call(name)
    this.age = age
}

// 组合继承
function Parent (name) {
    this.name = name;
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child (name, age) {
    Parent.call(name)
    this.age = age
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.construct = Child
