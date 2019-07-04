const arr = [9, 4, 3, 10, 5, 8, 7, 6, 2, 1];



const divide = (arr) => {
    const half = arr.length/2;
    const arr1 = [];
    const arr2 = [];

    for(let i = 0; i < arr.length; i++){
        if(i < half){
            arr1.push(arr[i]);
        }else{
            arr2.push(arr[i]);
        }
    }
    return [arr1,arr2];
}

const merge = (arr1, arr2) => {
    const result = [];
    let index1 = 0;
    let index2 = 0;
    while(index1 !== arr1.length || index2 !== arr2.length){
        if(index1 === arr1.length){
            result.push(arr2[index2]);
            index2++;
        }else if(index2 == arr2.length){
            result.push(arr1[index1]);
            index1++;
        }else if(arr1[index1] <= arr2[index2]){
            result.push(arr1[index1]);
            index1++;
        }else{
            result.push(arr2[index2]);
            index2++;
        }
    }
    return result;
}


const mergeSort = (arr) =>{
    const temp = [...arr];
    if(temp.length === 1){
        return temp;
    }
    const [arr1,arr2] = divide(temp);
    return merge(mergeSort(arr1),mergeSort(arr2));
}


console.log(arr);
const newArr = mergeSort(arr);
console.log(newArr);