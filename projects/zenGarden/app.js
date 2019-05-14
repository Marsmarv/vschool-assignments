let matrix = [[1,2,3,], [5,6,7],[9,8,4]]
for(let i = 0; i < matrix.length; i++){
    matrix.pop(i)
    matrix.push([0,0,0])
    for (j = 0; j < matrix[i].length; j++){
        // console.log(i)
    }
}

// console.log(matrix)


for(let i = 0; i < matrix.length; i++){
    for (j = 0; j < matrix[i].length; j++){
        matrix[i][j] = 0
    }
}

console.log(matrix)








