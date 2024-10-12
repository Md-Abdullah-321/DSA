/**
 * Title: Selection Sort
 * Description: Do Some basic operations using selection sort.
 * Author: Md Abdullah
 * Date: 12/10/2024
 */


const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
};


console.log(selectionSort([4,1,3,2,5]));