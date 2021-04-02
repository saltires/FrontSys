Function.prototype.bind2 = function (context) {
    var argus = Array.prototype.slice.call(arguments, 1)
    var self = this

    return function () {
        var bindArgus = Array.prototype.slice.call(arguments, 1)
        self.apply(context, argus.concat(bindArgus))
    }
}

Function.prototype.bind3 = function (context) {
    var argus = Array.prototype.slice.call(arguments, 1)
    var self = this

    function F() {
        var bindArgus = Array.prototype.slice.call(arguments, 1)
        self.apply(this instanceof F ? this : context, argus.concat(bindArgus))
    }

    F.prototype = this
    return F
}

Function.prototype.call2 = function (context) {
    var context = context || window
    var key = Symbol()
    var args = [...arguments].slice(1)
    context[key] = this
    var result = context[key](...args)
    delete context[key]
    return result
}

Function.prototype.apply2 = function (context, arr) {
    var context = context || window
    var key = Symbol()
    context[key] = this
    var result = context[key](...arr)
    delete context[key]
    return result
}

function (t, e) {
    for (var n = t.split(" "), i = e.split(" "), a = {}, r = [], o = 0; o < n.length / 2; o++)
        a[n[o]] = n[n.length / 2 + o];
    for (var s = 0; s < e.length; s++)
        r.push(a[i[s]]);
    return r.join("")
}
console.log(hact("123456", "钢铁侠"))

Function.prototype.bind2 = function(context) {
    var argus = [...arguments].slice(1)
    var that = this
    return function() {
        argus = argus.concat([...arguments])
        that.apply(context, argus)
    }
}

Function.prototype.bind3 = function(context) {
    var argus = [..arguments].slice(1)
    var that = this
    
    function F() {
        argus = argus.concat(...arguments)
        that.call(this instanceof F ? this : context, argus)
    }

    F.prototype = that

    return F
}

Function.prototype.call2 = function(context) {
    
}