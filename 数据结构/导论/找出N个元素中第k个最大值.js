function generateRandomNumber(min, max, number) {
    let result = []
    for (let i = 0; i < number; i++) {
        result[i] = Math.floor(Math.random() * (max - min + 1) + min)
    }
    return result
}

function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const data = generateRandomNumber(1, 5000, 5000)

// 找出 5000 个元素中第 1000 个最大值
// 1. 先给这 5000 个元素按从大到小排序，排完序后直接取索引值为 1000 的值即可
function customSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr.length - i - 1; j >= 0; j--) {
            if (arr[j] > arr[j - 1]) {
                swap(arr, j, j-1)
            }
        }
    }

    return arr
}
// const sortedData = customSort(data)
// console.log(sortedData)
// console.log('5000 个元素中第 1 个最大值是' + sortedData[0])
// console.log('5000 个元素中第 1000 个最大值是' + sortedData[999])
// 2. 先从这 5000 个元素中取出 1000 个元素作为一个数组（X）单独进行维护（按递减方式排序），然后逐一
// 将剩余的 4000 个元素取出并在 X 中进行排序，并找到它所对应的位置，再将之前的旧值移除掉，使得
// 在对 4000 个元素进行遍历的过程中，X 始终保持 1000 的长度，这样当剩余的 4000 个元素全部遍历完成后，
// 取出 X 中最后一个元素即可
function customSort2(arr, k) {
    let cacQu = customSort(arr.slice(0, k))
    let result
    for (let i = k; i < arr.length; i++) {
        cacQu.push(arr[i])
        cacQu = customSort(cacQu)
        cacQu.pop()
    }
    console.log(cacQu)
    return cacQu[k-1]
} 
console.log(customSort2(data, 1000))
