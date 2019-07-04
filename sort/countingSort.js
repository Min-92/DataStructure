// let arr = [9, 4, 3, 10, 5, 8, 7, 6, 2, 1];
let arr = [4, 3, 0, 0, 1, 2, 4];



const countingSort = (arr, k) => {
    const count = [];
    const result = [];

    for (let i = 0; i <= k; i++) {
        count[i] = 0;
    }

    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    for (let i = 1; i <= k; i++) {
        count[i] += count[i - 1];
    }

    for (let i = 0; i < arr.length; i++) {
        result[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    return result;
}



console.log(arr);
arr = countingSort(arr, 4);
console.log(arr);