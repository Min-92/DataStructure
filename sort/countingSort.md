# Counting Sort 계수 정렬



## 구현 코드



### [javascript](<https://github.com/Min-92/DataStructure/blob/master/sort/countingSort.js>) 

```javascript
// k 는 요소중 최댓값
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
```



### [C++](<https://github.com/Min-92/DataStructure/blob/master/sort/countingSort.cpp>)

```c++
// maxInt 는 요소 중 최댓값
#include <vector>
using namespace std;

vector<int> countingSort(vector<int> arr, int maxInt){

    vector<int> count(maxInt, 0);
    vector<int> result(arr.size());

    for(int i = 0; i < arr.size(); i++){
        count[arr[i]]++;
    }

    for(int i = 0; i <= maxInt; i++){
        count[i] += count[i-1];
    }

    for(int i = 0; i < arr.size(); i++){
        result[count[arr[i]] -1] = arr[i];
        count[arr[i]]--;
    }

    return result;
}
```

