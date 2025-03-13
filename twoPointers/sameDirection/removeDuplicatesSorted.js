// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * @param {int[]} numbers
 * @returns {int}
 */
function removeDuplicates(numbers){
    // no need to alter first element at 0 index
    let slow = 1 // note both pointers are starting from one end and moving in the same direction
    for(let fast = 1; fast < numbers.length; fast++) {
        if(numbers[fast - 1] !== numbers[fast]) {
            numbers[slow] = numbers[fast];
            slow++;
        }
    }
    return slow;
}


const nums1 = [1,1,2];
console.log(removeDuplicates(nums1))
const nums2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums2))