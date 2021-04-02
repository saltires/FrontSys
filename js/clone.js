// 浅拷贝
function shallowClone (obj) {
    if (typeof obj !== 'object' || obj === null) return obj

    let result = {}

    for (let [key, value] of Object.entries(obj)) {
        result[key] = value 
    }

    return result
}

// 深拷贝
function deepClone(obj) {
    const types = Object.prototype.toString.call(obj)
    if (types !== '[object Object]' || types !== '[object Array]') return obj

    let result = types === '[object Object]' ? {} : []

    for (let [key, value] of Object.entries(obj)) {
        result[key] = deepClone(value)
    }

    return result
}

function deepClone(obj) {
    const types = Object.prototype.toString.call(obj)
    if (types !== '[object Object]' || types !== '[object Array]') return obj

    let result = types === '[object Object]' ? {} : []

    for (let [key, value] of Object.entries(obj)) {
        result[key] = deepClone(value)
    }

    return result
}