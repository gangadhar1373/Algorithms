// Find indices of the numbers in a sorted array that sum up to a target.
function twoSumWhile(arr, target) {
    let left = 0;
    let right = arr.length -1;
    while (left < right) {
        const targetSum = arr[left] + arr[right];
        if (targetSum === target) {
            return [left, right];
        }
        if (targetSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}


// using for loop
function twoSumFor(arr, target) {
    for (let left = 0, right = arr.length - 1; left < right; ) {
        let sum = arr[left] + arr[right];
        console.log(`sum ${sum}`)
        if(sum === target) return [left, right];
        else if( sum < target) left++; // if sum is less than target then move the left pointer by 1
        else right-- // if sum is grater then move the right by 1 towards left pointer.
    }
    return [];
}

// Example Usage:
const arr = [1, 2, 3, 6, 8, 11, 15];
const target = 9;
console.log(twoSumFor(arr, target)); // Output: [1, 4] (2 + 8 = 9)