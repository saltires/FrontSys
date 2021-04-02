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

// function bubbleSort(arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j+1]){
//                 swap(arr, j, j+1)
//             }
//         }
//     }

//     return arr
// }

function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j+1)
            }
        }
    }

    return arr
} 



console.log(bubbleSort(arr))
// console.log(quickSort(arr))











// function selectSorter(arr) {
//     var minIndex = 0
//     for (var i = 0; i < arr.length; i++) {
//         minIndex = i
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[minIndex] > arr[j]) {
//                 minIndex = j
//             }
//         }
//         swap(arr, minIndex, i)
//     }
 
//     return arr
//  }
