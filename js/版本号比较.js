const foo = '1.1.1'
const bar = '1.1.1'

function versionCompare(left, right) {
    let leftArray = left.split('.')
    let rightArray = right.split('.')
    let maxNumber = 0

    leftArray.concat(rightArray).forEach(item => {
        maxNumber = maxNumber < item.length ? item.length : maxNumber
    })

    leftArray = prefix(leftArray, maxNumber)
    rightArray = prefix(rightArray, maxNumber)

    for (let i = 0; i < 3; i++) {
        if (leftArray[i] === rightArray[i]) {
            if (i === 2) {
                return 0
            }
        } else if (leftArray[i] > rightArray[i]) {
            return 1
        } else {
            return -1
        }
    }
}

function prefix(arr, number) {
    return arr.map(item => {
        while (item.length !== number) {
            item = '0' + item
        }
        return item
    })
}

// console.log(prefix([1,12,3], 5))

console.log(versionCompare(foo, bar))