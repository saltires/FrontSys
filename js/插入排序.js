// 交换元素位置的函数
function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

//写一个随机生成数组的函数
function randomArr(count) {
    var arr = []
    for (var i = 0; i < count; i++) {
        var number = Math.ceil(Math.random() * 5000)
        arr.push(number)
    }
    return arr
}

var arr = randomArr(5000)


function insertionSort(arr) {
    var len = arr.length
    for (var i = 1; i < len; i++) {
        for (var j = i - 1; j >= 0; j--) {
            if (arr[j+1] < arr[j]) {
                swap(arr, j , j+1)
            }
        }
    }

    return arr
}

console.log(insertionSort(arr))

function cached(fn) {
    var cache = Object.create(null);
    return (function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str))
    })
}

var foo = cached((a) => {
    return a + 'x'
})

foo('saltire')

