# Merge Sort 병합 정렬



## 구현 코드

#### [javascript](<https://github.com/Min-92/DataStructure/blob/master/sort/mergeSort.js>)

```javascript
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

const arr = [9, 4, 3, 10, 5, 8, 7, 6, 2, 1];
const newArr = mergeSort(arr);
console.log(newArr);
```



#### [C++](<https://github.com/Min-92/DataStructure/blob/master/sort/mergeSort.cpp>)

```c++
#include <vector>
#include <iostream>

using namespace std;

vector<vector<int>> divide(vector<int> arr) {
    int half = arr.size()/2;
    vector<int> arr1 = {};
    vector<int> arr2 = {};

    for(int i = 0; i < arr.size(); i++){
        if(i < half){
            arr1.push_back(arr[i]);
        }else{
            arr2.push_back(arr[i]);
        }
    }
    vector<vector<int>> result = {arr1,arr2};
    return result;
}

vector<int> merge(vector<int> arr1, vector<int> arr2){
    vector<int> result = {};
    int index1 = 0;
    int index2 = 0;

    while(index1 != arr1.size() || index2 != arr2.size()){
        if(index1 == arr1.size()){
            result.push_back(arr2[index2]);
            index2++;
        }else if(index2 == arr2.size()){
            result.push_back(arr1[index1]);
            index1++;
        }else if(arr1[index1] <= arr2[index2]){
            result.push_back(arr1[index1]);
            index1++;
        }else{
            result.push_back(arr2[index2]);
            index2++;
        }
    }

    return result;
}

vector<int> mergeSort(vector<int> arr) {
    vector<int> temp = arr;
    if(temp.size() == 1){
        return temp;
    }
    vector<vector<int>> dividedArr = divide(temp);

    return merge(mergeSort(dividedArr[0]),mergeSort(dividedArr[1]));
}



int main(){

    vector<int> arr = {9, 4, 3, 10, 5, 8, 7, 6, 2, 1};
    arr = mergeSort(arr);

    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
```

