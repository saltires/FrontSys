function createArray(row, column, initial) {
    var result = []
    for (var i = 0; i < row; i++) {
        var columns = []
        for (var j = 0; j < column; j++) {
            columns.push(initial)
        }
        result.push(columns)
    }

    console.log(result)
}

createArray(3, 4, 5)
// [ [ 5, 5, 5, 5 ], [ 5, 5, 5, 5 ], [ 5, 5, 5, 5 ] ]