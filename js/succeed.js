function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

var foo = new Child('sa',212)
console.log(foo);