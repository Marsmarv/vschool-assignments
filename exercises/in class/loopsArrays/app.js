arr = []
function createEvenArray(highestNum){
    for (i = 2; i <= highestNum; i++){
        if (i % 2 === 0){
            arr.push(i)
        }
    }
}
createEvenArray(8);
// console.log(arr)

function addOdds(evensOnlyArray){
    for (i = 0; i < evensOnlyArray.length / 2; i++ ){
        evensOnlyArray.push(evensOnlyArray[i] + 1)  
    }
    evensOnlyArray.unshift(1)
}
// console.log(addOdds(arr))
addOdds(arr)
// console.log(arr)

function sortNums(numberArray) {
    return numberArray.sort(function(a, b){return a-b});
}

sortNums(arr)
console.log(arr)