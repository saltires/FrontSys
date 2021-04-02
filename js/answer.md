### 讲讲js数据类型？基本和引用的区别？symbol和bigint讲一讲应用场景？
1、js 数据类型分为基本类型和引用类型，基本类型的值存储在栈中，引用类型的值存储在堆中，并将指向堆的地址存储在栈中
2、基本类型有如下：string、number、boolean、null、undefined、Symbol、bigint
3、引用类型有如下：Object、Array、Set、Map、WeakSet、WeakMap
4、symbol 用于可以用来作为独一无二的 key，将其作为属性名可以防止对象的属性重复，这是其最大的使用场景
5、bigint 增强了 js 的数字存储和运算能力，与传统的遇到极大整数 id 的场景时统一使用字符串处理不同，bigint 的引入扩展了在这些场景下前端的的计算能力

### 判断数据类型的方法？instanceof原理?判断空对象？ typof null？typeof NaN？
1、判断数据类型首先应该分为判断基础类型还是引用类型，对于基础类型，可以使用 typeof 判断，对于引用类型则可以使用 instanceof、Object.prototype.toString 等方法，对于数组，还可以使用 ES5 提供的 APIArray.isArray 此外，对于 function 类型，虽然它是引用类型，但是可以使用 typeof 判断，null 虽然是基本类型，但是无法使用 typeof 判断
2、instanceof 的原理是递归判断符左侧变量的原型链，只要原型链上的其中一个原型对象与右侧的原型相等，说明左侧变量是右侧的实例
3、`typeof null === 'object' typeof NaN === number`

### var/let/const 区别？暂时性死区？块级作用域？const a = {}; a.x = 1 能不能修改？
1、var 声明的变量作用域范围更广，而 let 和 const 申明的变量具有块级作用域限制，例如在 if 语句块中、for 循环语句块中，块级作用域内部声明的变量外部是无法访问的，也就是说 let、const 声明的变量只在它所在的代码块内生效
2、let 和 const 声明的变量不存在变量提升
3、let 和 const 具有暂时性死区的特点，在一个代码块中使用 let 和 const 声明了变量后，即在申明行之前将无法使用该变量
4、当然能


### 说说你对函数式编程的理解？函数柯里化的理解？平时的使用场景？
函数式编程是一种利用 Javascript 函数可以作为变量存储并且可以作为函数返回值和参数的特点实现的一种编程规范。我认为它具有以下特点：
- 第一点，它善于实现缓存，因为在函数式编程中一个很重要的概念是纯函数，也就是说传入相同参数的情况下得到的结果始终一致，因此对于某个内部会消耗较大 CPU 运算的纯函数来说，缓存第一次调用后的结果可以提高后续的调用速度；
- 第二点，它善于抽象通用逻辑，虽然在任何编程理念里，函数始终是抽象通用逻辑的最佳方案，但是在函数式编程里，对这种方式的重视程度尤其的高，通过高阶函数，函数式编程会尽最大的努力去抽象通用逻辑，函数式编程中为了实现一个功能模块，最常见的方式就是通过组合高阶函数的方式去实现；
- 第三点，通过柯里化，它可以使多元函数转为一元函数，解决了多元函数无法直接被组合函数使用的问题
- 第四点：通过组合函数这种流水线的编程形式，在编程中解决问题的思路更加清晰，和传统的命令式编程相比，组合函数的方式更加灵活、可以很好的复用一些函数模块，也使得代码更容易维护

在 React 和 未来的 Vue3.0 项目中，函数式编程的作用更加明显，因为它们使用了函数式编程的思想，因此在使用这类框架时，函数式编程能更好的帮助我们开发业务点，其次对于 lodash 来说，它也支持函数式编程，在项目中使用工具库辅助完成一些业务逻辑时，完全可以使用 lodash 的函数式编程库，因为它具有更好的复用性也更容易维护

### 防抖、节流的含义，使用场景？手写一下？
防抖和节流用于在某些需要和用户互动的场景下，例如在鼠标快速滑动的时候防止滑动事件触发频率太快，这样，即使后端的接口不能保证幂等性，也不会使业务产生生产性问题

```js
// 防抖函数
function debouce(fn, delay) {
    let timeout = null
    return function {
        let argus = arguments
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, argus)
        }, delay)
    }
}
// 节流函数
function throttle(fn, time) {
    let timeout = null
    return function() {
        let argus = arguments
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                fn.apply(this, argus)
            }, time)
        }
    }
}
```

### call、apply、bind区别？bind实现？bind之后还能修改this指向吗？为什么？
1、call、apply、bind 都是用于修改函数执行时 this 的指向，但是 call 和 apply 调用了后目标函数会被执行，而 bind 函数则是返回了一个新的函数，在新函数内部会去修改目标函数的指向并执行它
2、我认为 bind 方法返回的函数不能再被修改 this 指向了，因为 bind 方法返回的函数在内部执行目标函数时，this 指向已经明确的指向第一次调用 bind 函数时传入的参数，无法再被修改

```js
// 最简单的 bind 实现
Function.prototype.bind2 = function(context) {
    var argus = [...arguments].slice(1)
    var that = this
    return function() {
        argus = argus.concat([...arguments])
        that.apply(context, argus)
    }
}  
```
```js
Function.prototype.bind3 = function(context) {
    const self = this
    const argus = [...arguments].slice(1)
    return function() {
        return self.apply(context, argus.concat([...arguments]))
    }
}
```

### 闭包概念，最主要的还是问闭包的场景？
1、闭包的概念是指在某个函数中访问不属于当前函数作用域内的变量，闭包由函数和在函数内被访问的不属于当前函数作用域的变量组成，闭包会导致某些函数执行完成后虽然它们已经从 call stack 中弹出，但是它们内部的作用域依然会被 JS 引擎保存在内存中并且随时可访问
2、闭包的应用场景：
    - 模拟块级作用域
    - 访问函数内部的私有变量
    - 缓存函数执行结果

### 用es5实现es6类的继承？各种继承问的挺多的
继承有通过原型链的继承，借用构造函数的继承，组合继承等方式
```js
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
```
### 深拷贝与浅拷贝？常用方法？手写一个深拷贝函数？
在 Javascript 中，拷贝一个引用类型的值时，实际上拷贝的是存储于栈中的对于引用类型变量的引用地址，这是 Javascript 中常说的浅拷贝
如 Object.assign 就是一个浅拷贝方法，实现深拷贝的方法：
```js
function deepClone(obj) {
    const types = Object.prototype.toString.call(obj)
    if (types !== '[object Object]' && types !== '[object Array]') return obj

    let result = types === '[object Object]' ? {} : []

    for (let [key, value] of Object.entries(obj)) {
        result[key] = deepClone(value)
    }

    return result
}
```

### 说说你知道的JavaScript设计模式？观察者和发布订阅的区别？手写一个发布订阅？我真的写了
我所了解的 Javascript 设计模式包括：观察者模式、发布订阅模式、早期 Jquery 所使用的工厂模式、单例模式
观察者模式和发布订阅模式都是一种用于通信的模式，只不过观察者模式强调通信两端直接通信，而发布订阅模式之间存在一个通信中心，信息的发布者和订阅者通过事件中心进行通信
```js
class EventEmitter {
    constructor() {
        this.subs = {}
    }
    $emit(type) {
        if (this.subs[type]) {
            this.subs.forEach(handler => {
                handler()
            })
        }
    }
    $subscribe(type, handler) {
        this.subs[type] = this.subs[type] || []
        this.subs[type].push(handler) 
    }
}
```

### 说说对你对JavaScript异步编程的理解？
Javascript 异步编程离不开 event loop，由于 Javascript 是采用单线程，Javascript 引擎内部维护一个任务队列，当需要处理异步任务时，便会把处理这些异步任务的回调函数存放到任务队列中，至于这些异步任务，浏览器或 Node 会采用单独的线程去处理，当处理完成后，处理结果会被返回到当前线程并执行任务队列中的回调函数，当然，这一切的前提是，当前调用栈为空，否则，便会一致等待，直到执行栈为空

对于 Javascript 异步编程的具体处理方案，有回调函数、promise、 Generator 函数、async 函数等，这里面除了 Generator 函数不常用以外，其余三种方案都很常见。

回调函数是 Javascript 最先支持的处理异步编程的方案，但当多个回调函数嵌套时，会使得代码难以阅读和维护。Promise 则是一种用对象来描述异步任务执行结果的方案，promise 对象只有三种状态，pending、fulfilled、failed，且状态变化方式只有两种。promise 对象提供了 then 方法和 catch 方法来处理异步任务的结果和错误，通过 promise 的链式调用可以解决回调函数嵌套时代码维护性的问题，但也只是稍微好些，其本质依然还是连续的回调函数，只是从嵌套变为了链条形式

Generator 函数相比于 promise 而言，其函数内部处理异步任务的方式则更加接近同步编程，但是 Generator 函数调用后，并不会自动执行其内部逻辑代码，而是需要通过其返回的生成器对象来控制 Genrerator 内部的流程语句，因此需要搭配自动执行库使用

由于 Generator 函数的使用成本，后来 ES2017 又提出了新方案 async 函数，其内部自带执行器，async 函数调用后会返回一个 promise，该 promise 中存储了异步任务的结果。async 函数从代码维护性和阅读上来看，是目前最合适的异步编程解决方案，但是需要明白其并并不是一种完全独立的解决方案，它依赖 Generator 函数、promise 等

### ES Module与 CommonJS 模块的差异？两者互相加载的方式？一般会扯到AMD
CommonJS 是 Nodejs 端通用的模块规范，而 ES Module 则是一种通用的用于 Javascript 语言的模块规范。
它们拥有以下差异：
- 使用 commonjs 读取文件模块时，它是一种运行时整体加载目标模块然后生成一个对象，而且多次加载模块时，实际只会加载一次，第二次加载时直接读取第一次的加载结果
- ES Module 加载模块时则是在编译时进行加载，通过 ES Module 加载模块时，只会加载你需要的方法，而不是整体加载，此外，ES Module 模块输出的是值的引用，而不像 Commonjs 输出的是值的拷贝