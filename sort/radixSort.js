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


let arr = [3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127];

console.log(arr);
arr = radixSort(arr);
console.log(arr);
