"use strict";
// ① 泛型函数的基本使用
/* function identity<T>(arg: T): T {
    return arg;
}

const foo = identity<number>(3)
// 当调用泛型函数时不主动指定泛型参数的类型，ts 会主动推断
const foo1 = identity(3)

console.log(foo) */
// ② 泛型变量的基本使用
/* function loggingIdentity<T>(arg: T[]): Array<T> {
    return arg
}

const foo = loggingIdentity<string>(['1', '2'])
const foo1 = loggingIdentity<string | number>([1, '2'])
const foo2 = loggingIdentity([1, '2'])

console.log(foo) */
// ③ 泛型接口的基本使用
/* interface GenericIdentityFn {
    <T>(arg: T): T
}

interface GenericIdentityFn1<T> {
    (arg: T): T
}

function identity<T>(arg: T): T {
    return arg
}

let foo: GenericIdentityFn = identity
let foo1: GenericIdentityFn1<number> = identity
let x = foo1(3)
let y = foo('3') */
// ④ 泛型类的基本使用
/* class GenericNumber<T> {
    zeroValue: T;
    add(x: T, y: T): T {
        return x
    }
    constructor(zeroValue: T) {
        this.zeroValue = zeroValue
    }
}

let myGenericNumber = new GenericNumber<number>(3);
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; }; */
/* class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误 */ 
