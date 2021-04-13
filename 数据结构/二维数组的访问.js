// 这是一个表示三个学生各科成绩的二维数组，求每个学生的平均成绩
var arr = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]

/**
 * 求每个学生的平均成绩
 * @param {array} 学生的成绩数组 
 */
function average(arr) {
    for (var i = 0; i < arr.length; i++) {
        var result = 0
        var item = arr[i]
        for (var j = 0; j < item.length; j++) {
            result = item[j] + result
        }
        var average = Math.floor(result / item.length)
        console.log('The Average score:' + average)
    }
}

/**
 *  求各科的平均成绩
 */
function average1(array) {
    for (var i = 0; i < array.length; i++) {
        var result = 0
        var item = arr[i]
        for (var j = 0; j < item.length; j++) {
            result += arr[j][i]
        }
        var average = Math.floor(result / item.length)
        console.log('The Average score:' + average)
    }
}

average1(arr)