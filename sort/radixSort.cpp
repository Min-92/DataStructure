#include <vector>
#include <iostream>
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

int main(){
    vector<int> arr = {9, 4, 3, 10, 5, 8, 7, 6, 2, 1};

    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;

    arr = radixSort(arr);

    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}