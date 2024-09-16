
#include <stdio.h>

// Function to sort the array
void sort(int arr[], int size) {
  for (int i = 0; i < size - 1; i++) {
    for (int j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
void merge(int *nums1, int nums1Size, int m, int *nums2, int nums2Size, int n,
           int *result, int resultSize) {
  sort(nums1, nums1Size);
  int startPoint1 = 0;
  int startPoint2 = 0;
  if (nums1Size > m) {
    startPoint1 = nums1Size - m;
  }
  if (nums2Size > n) {
    startPoint2 = nums2Size - n;
  }
  for (int i = 0; i < m; i++) {

    result[i] = nums1[startPoint1];
    startPoint1++;
  }
  for (int i = 0; i < n; i++) {

    result[m + i] = nums2[startPoint2];
    startPoint2++;
  }
  sort(result, resultSize);
}

int main() {
  int arr[] = {0, 5, 7, 0, 2, 2, 2}; // Array with 5 elements
  int m = 5;
  int arr2[] = {1, 5, 2}; // Array with 5 elements
  int n = 3;
  int size = sizeof(arr) / sizeof(arr[0]);    // Calculate the size of the array
  int size2 = sizeof(arr2) / sizeof(arr2[0]); // Calculate the size of the array
  int result[m + n];                          // Array with 5 elements
  int size3 = m + n;                          // Calculate the size of the array
  merge(arr, size, m, arr2, size2, n, result, size3);

  // Print the sorted array
  for (int i = 0; i < size3; i++) {
    printf("%d ", result[i]);
  }

  return 0;
}
