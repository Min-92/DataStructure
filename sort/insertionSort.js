
const insertionSort = (arr) => {
    const result = [...arr];
    let temp;
    
    for(let  i = 0; i < result.length; i++){
        for(let j = i+1; j >0; j--){
            if(result[j] < result[j-1]){
                temp = result[j];
                result[j] = result[j-1];
                result[j-1] = temp;
            }
        }
    }
    
    return result;
}


const arr = [9, 4, 3, 10, 5, 8, 7, 6, 2, 1];
console.log(arr);
const newArr = insertionSort(arr);
console.log(newArr);




 