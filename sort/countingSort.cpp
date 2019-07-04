#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int getMax(vector<int> arr){
    int maxInt = 0;
    for(int i = 0 ; i < arr.size(); i++){
        maxInt = max(arr[i], maxInt);
    }
    return maxInt;
}

vector<int> countingSort(vector<int> arr){
    int maxInt = getMax(arr);

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

int main(){
    vector<int> arr = {4, 3, 0, 0, 1, 2, 4};

    arr = countingSort(arr);

    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;



    return 0;
}


