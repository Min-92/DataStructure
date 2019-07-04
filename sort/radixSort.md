# Radix Sort 기수 정렬



## 구현 코드

javascript 

```javascript
const radixSort = (arr) => {
    const temp = [...arr];
    // queue 초기화
    const queue = [];
    for (let i = 0; i < 10; i++) {
        queue[i] = [];
    }
    
    // 최댓값 찾기
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    // 최댓값 자릿수 구하기
    let n = 0;
    let a = 1;
    while (max > 10) {
        max = max / a;
        n++;
        a = a * 10;
    }

    a = 1;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < temp.length;) {
            queue[parseInt(temp[j] / a % 10)].push(temp.shift());
        }
        for (let j = 0; j < queue.length; j++) {
            while (queue[j][0] !== undefined) {
                temp.push(queue[j].shift());
            }
        }
        a = a * 10;
    }
    return temp;
}
```



C++

```c++
#include <vector>
#include <queue>

using namespace std;

vector<int> radixSort(vector<int> arr){
    vector<queue<int>> Q(10);

    // 최댓값 찾기
    int maxInt = 0;
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] > maxInt) {
            maxInt = arr[i];
        }
    }
    
    // 최댓값 자릿수 구하기
    int n = 1;
    int a = 1;
    while (maxInt > 10) {
        maxInt = maxInt / a;
        n++;
        a = a * 10;
    }

    a = 1;
    for (int i = 0; i <= n; i++) {
        for (int j = 0; j < arr.size();) {
            Q[arr[j] / a % 10].push(arr[0]);
            arr.erase(arr.begin());
        }
        for (int j = 0; j < Q.size(); j++) {
            while (Q[j].size() != 0) {
                arr.push_back(Q[j].front());
                Q[j].pop();
            }
        }
        a = a * 10;
    }
    return arr;

    vector<int> result;
    return result;
}
```

