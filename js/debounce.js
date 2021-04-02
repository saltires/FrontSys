var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(e)
    console.log(this)
    container.innerHTML = count++;
};

// 实现防抖函数
function debounce(func, delay) {
    let timeout = null
    return function () {
        let args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

// 使用时间戳 - 实现节流函数
function throttle(func, wait) {
    let args
    let previous = 0
    return function() {
        let now = +new Date()
        args = arguments
        if (now - previous > wait) {
            func.apply(this, args)
            previous = now
        }
    }
}

// 使用定时器实现节流函数
function throttle1(func, wait) {
    let args,timeout
    return function() {
        args = arguments
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                func.apply(this, args)
            }, wait)
        }
    }
}

container.onmousemove = throttle1(getUserAction, 3000);