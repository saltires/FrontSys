// 数组去重

function unique(arr) {
    if (!arr || !arr.length) return

    let res = []

    for (let i = 0; i <= arr.length; i++) {
        let innerComplete = false
        for (let j = 0; j <= res.length; j++) {
            if (arr[i] === res[j]) {
                break;
            }
            if (j === res.length) {
                innerComplete = true
            }
        }

        if (innerComplete) {
            res.push(arr[i])
        }
    }

    return res
}

// 使用 indexOf 简化内层循环
function unique1(arr) {
    if (!arr || !arr.length) return

    let res = []

    for (let i = 0; len = arr.length, i <= len; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }

    return res
}

// 使用 filter 方法简化外层循环
function unique2(arr) {
    if (!arr || !arr.length) return
    let res = []

    arr.filter((item, index, array) => {
        if (arr.indexOf(item) === index) {
            res.push(item)
        }
    })

    return res
}

function unique3(arr) {
    return [...new Set(arr)]
}
console.log(unique3([3, 4, 1, 2, null, null, undefined, undefined, 'x', 'y', 'x']))
