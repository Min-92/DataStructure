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
    

    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;

    arr = mergeSort(arr);


    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;



    return 0;
}