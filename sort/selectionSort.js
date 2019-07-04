const selectionSort = (arr) =>{
    const result = [...arr];
    
    let minIndex;
    let temp;
    
    for(let i = 0; i < result.length; i++){
        minIndex = i;
        for(let j = i+1; j < result.length; j++){
            if(result[j] < result[minIndex]){
                minIndex = j;
            }
        }
        temp = result[minIndex];
        result[minIndex] = result[i];
        result[i] = temp;
    }

    return result;
}


let arr = [9, 4, 3, 10, 5, 8, 7, 6, 2, 1];

let minIndex;
let temp;

console.log(arr);
arr = selectionSort(arr);
console.log(arr);