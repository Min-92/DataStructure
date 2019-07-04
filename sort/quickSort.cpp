#include <vector>
#include <iostream>

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

int main(){
    vector<int> arr = {9, 4, 3, 10, 5, 8, 7, 6, 2, 1};

    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;
    arr = quickSort(arr);

    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}