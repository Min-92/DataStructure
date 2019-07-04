# Selection Sort 선택 정렬





## 구현 코드

#### [javascript](<https://github.com/Min-92/DataStructure/blob/master/sort/selectionSort.js>)

```javascript
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
```



#### [C++](<https://github.com/Min-92/DataStructure/blob/master/sort/selectionSort.cpp>)

```c++
#include <vector>
#include <iostream>

using namespace std;

vector<int> selectionSort(vector<int> arr){

    int temp;
    int minIndex;
    for(int i = 0; i < arr.size(); i++){
        minIndex = i;
        
        for(int j = i+1; j < arr.size(); j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;

    }

    return arr;
}
```

