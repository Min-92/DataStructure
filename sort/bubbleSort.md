# Bubble Sort 버블 정렬



## 구현 코드

### [Java Script](<https://github.com/Min-92/DataStructure/blob/master/sort/bubbleSort.js>)

```javascript
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
```

### [C++](<https://github.com/Min-92/DataStructure/blob/master/sort/bubbleSort.cpp>)

```c++
#include <vector>
using namespace std;

vector<int> bubbleSort(vector<int> arr){
    int temp;

    for(int i = arr.size(); i > 0; i--){
        for(int j = 1; j < i ; j++){
            if(arr[j-1] > arr[j]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    return arr;
}
```

