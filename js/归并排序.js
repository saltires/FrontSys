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

function merge(leftArray, rightArray){
    var result = []
    while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift())
        } else {
            result.push(rightArray.shift())
        }
    }
    return result.concat(leftArray).concat(rightArray)
}

function mergeSort(arr) {
    if (arr.length == 1 ) return arr
    var middleIndex = Math.floor(arr.length / 2)
    var left = arr.slice(0, middleIndex)
    var right = arr.slice(middleIndex)
    
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(arr))

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

