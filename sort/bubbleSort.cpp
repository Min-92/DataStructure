#include <vector>
#include <iostream>

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

int main(){

    vector<int> arr = {9, 4, 3, 10, 5, 8, 7, 6, 2, 1};


    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;
    
    arr = bubbleSort(arr);

    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;









    return 0;
}