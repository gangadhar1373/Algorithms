// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where th sum is 0, 
// Return an array that includes both values that sum to zero or return undefined if a pair dose not exist



function sumZero(arr) {
    // create the pointers;
    let i = 0, j = arr.length - 1;
    // loop through the array and check
    while (i < j){
        let sum = arr[i] + arr[j]
        if(sum === 0) return [arr[i], arr[j]]
        else if (sum > 0) j--;
        else i++;
    }
    
}
let a1 = sumZero([-3, -2, -1, 0, 1, 2, 3]); //[-3, -3]
let a2 = sumZero([-2, 0, 1, 3])// undefined
let a3 = sumZero([1, 2, 3]) // undefined
console.log(a1, a2, a3)