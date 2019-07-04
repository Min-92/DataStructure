# Insertion Sort 삽입 정렬



## 구현 코드

javascript 



```javascript
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
```



C++

```c++
vector<int> insertionSort(vector<int> arr){
    int temp;
    
    for(int i = 0; i < arr.size(); i++){
        for(int j = i+1; j > 0; j--){
            if(arr[j] < arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    return arr;
}
```

