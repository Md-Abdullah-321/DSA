/**
 * Title: Quick Sort
 * Description: Do Some basic operations using quick sort.
 * Author: Md Abdullah
 * Date: 12/10/2024
 */


const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    const pivot = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([4, 1, 3, 2, 5]));
