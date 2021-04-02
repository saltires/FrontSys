function new2(fun, ...argu) {
    const obj = new Object()
    Object.setPrototypeOf(obj, fun.prototype)
    const result = fun.apply(obj, argu)
    return Object.prototype.toString.call(result) === '[object Object]' ? result : obj
}

var a = new2(function(name) {
    this.name = name
    this.say = function(){
        console.log(name)
    }
    return {name: 'hihi', say(){console.log('qushi')}}
}, 'sa')

a.say()
