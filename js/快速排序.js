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

// function quickSorter(arr) {
//     if (arr.length <= 1) { return arr }
//     var middleIndex = Math.floor(arr.length / 2)
//     var middleValue = arr.splice(middleIndex, 1)[0]
//     var left = [], right = []

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > middleValue) {
//             right.push(arr[i])
//         } else {
//             left.push(arr[i])
//         }
//     }

//     return quickSorter(left).concat([middleValue], quickSorter(right))
// }

console.log(quickSorter(arr))
// console.log(quickSort(arr))



function quickSorter(arr) {
    if (arr.length <= 1) return arr
    let middleIndex = Math.floor(arr.length / 2)
    let middleValue = arr.splice(middleIndex, 1)[0]
    let left = [],
        right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > middleValue) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }

    return quickSorter(left).concat([middleValue], quickSorter(right))
}