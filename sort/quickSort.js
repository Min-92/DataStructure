
const quickSort = (arr) => {
    const temp = [...arr];
    if(temp.length < 2){
        return temp;
    }
    const pivot = temp[0];
    let left = [];
    let right = [];
    
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] <= pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    
    left = quickSort(left);
    right = quickSort(right);
    
    return [...left,pivot,...right];
}


let arr = [9, 4, 3, 10, 5, 8, 7, 6, 2, 1];
console.log(arr);
arr = quickSort(arr);
console.log(arr);


