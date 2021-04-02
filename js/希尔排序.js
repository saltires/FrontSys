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

// function shellSorter(arr) {
//     var i,j,gap
//     var len = arr.length

//     for (gap = Math.floor(len/2); gap > 0; gap = Math.floor(gap / 2)) {
//         for (i = 0; i < gap; i++) {
//             for (var j = i + gap; j < len; j+=gap) {
//                 for (k = j - gap; k > 0; k -= gap) {
//                     if (arr[k] > arr[k+gap]) {
//                         swap(arr, k, k+gap)
//                     } else {
//                         break
//                     }
//                 }
//             }
//         }
//     }

//     return arr
// }

function shellSorter(arr) {
    var i,j,k,gap
    var len = arr.length

    for (gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (var i = 0; i < gap; i++) {
            for (var j = i + gap; j < len; j+=gap) {
                for (var k = j - gap; k >= 0; k -= gap) {
                    if (arr[k] > arr[k+gap]) {
                        swap(arr, k, k+gap)
                    } else {
                        break
                    }
                }
            }
        }
    }

    return arr
}


console.log(shellSorter(arr))
// console.log(quickSort(arr))



















// function shellSorter(arr) {
//     var i, j, gap
//     var n = arr.length

//     for (gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
//         for (i = 0; i < gap; i++) {

//             for (j = i + gap; j < n; j += gap) {
//                 for (var k = j - gap; k >= 0; k -= gap) {
//                     if (arr[k] > arr[k + gap]) {
//                         swap(arr, k, k + gap)
//                     } else {
//                         break
//                     }
//                 }
//             }
//         }
//     }
//     return arr
// }