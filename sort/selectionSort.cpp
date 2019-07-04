#include <vector>
#include <iostream>

using namespace std;

vector<int> selectionSort(vector<int> arr){

    int temp;
    int minIndex;
    for(int i = 0; i < arr.size(); i++){
        minIndex = i;
        
        for(int j = i+1; j < arr.size(); j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;

    }

    return arr;
}

int main(){

    vector<int> arr = {9, 4, 3, 10, 5, 8, 7, 6, 2, 1};
    

    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;

    arr = selectionSort(arr);
    


    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;



    return 0;
}