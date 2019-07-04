# 여러가지 정렬



## 정렬의 종류

- Bubble sort (버블 정렬)
- Selection sort (선택 정렬)
- Insertion sort (삽입 정렬)
- Merge sort (병합 정렬)
- Quick sort (퀵 정렬)
- Counting sort (계수 정렬)
- Radix sort (기수 정렬)



## 정렬의 안정적 특성

- ### 안정 정렬

  - 정렬 후에도 기존 순서가 유지되는 정렬

  1. Bubble sort (버블 정렬)
  2. Insertion sort (삽입 정렬)
  3. Merge sort (병합 정렬)
  4. Counting sort (계수 정렬)
  5. Radix sort (기수 정렬)

- ### 불안정 정렬

  - 정렬 후에 기존 순서가 유지되지 않는 정렬

  1. Selection sort (선택 정렬)
  2. Quick sort (퀵 정렬)



## 정렬 별 시간복잡도

|       **이름**       | 시간복잡도 **BEST** | 시간복잡도 **Average** | 시간복잡도 **Worst** | 안정 여부 |
| :------------------: | :-----------------: | :--------------------: | :------------------: | :-------: |
|  **Bubble (버블)**   |       **n²**        |         **n²**         |        **n²**        |   **O**   |
| **Selection (선택)** |       **n²**        |         **n²**         |        **n²**        |   **X**   |
| **Insertion (삽입)** |        **n**        |         **n²**         |        **n²**        |   **O**   |
|   **Merge (병합)**   |     **nlog₂n**      |       **nlog₂n**       |      **nlog₂n**      |   **O**   |
|    **Quick (퀵)**    |     **nlog₂n**      |       **nlog₂n**       |        **n²**        |   **X**   |
| **Counting (계수)**  |       **n+k**       |        **n+k**         |       **n+k**        |   **O**   |
|   **Radix (기수)**   |       **nk**        |         **nk**         |        **nk**        |   **O**   |

counting sort : k = size of count array

Radix sort : k = maximum digit of element











