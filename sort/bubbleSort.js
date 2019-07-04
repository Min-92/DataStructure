const bubbleSort = (arr) =>{
    const result = [...arr];
    let tempInt;
    
    for (let i = result.length; i > 0; i--) {
        for (let j = 1; j < i; j++) {
            if(result[j-1] > result[j]){
                tempInt = result[j];
                result[j] = result[j-1];
                result[j-1] = tempInt;
            }
        }
    }
    return result
}

let arr = [9, 4, 3, 10, 5, 8, 7, 6, 2, 1];


console.log(arr);

arr = bubbleSort(arr);

console.log(arr);
