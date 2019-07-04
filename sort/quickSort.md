# Quick Sort 퀵 정렬



## 구현 코드

javascript 

```javascript
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
```



C++

```c++
#include <vector>

using namespace std;

vector<int> quickSort(vector<int> arr){
    if(arr.size() < 2){
        return arr;
    }
    int pivot = arr[0];
    vector<int> left(0);
    vector<int> right(0);

    for(int i = 1; i < arr.size(); i++){
        if(arr[i] <= pivot){
            left.push_back(arr[i]);
        }else{
            right.push_back(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    vector<int> result;
    for(int i = 0; i < left.size(); i++){
        result.push_back(left[i]);
    }
    result.push_back(pivot);
    for(int i = 0; i < right.size(); i++){
        result.push_back(right[i]);
    }

    return result;
}
```

