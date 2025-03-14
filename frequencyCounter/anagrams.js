function anagrams(str1, str2){
    if(str1.length !== str2.length) return false;
    // create obj1 from arr1 and obj2 from arr2
    const obj1 = {};
    const obj2 = {};
    // loop over both the arrays and set freq of each letter
    for(let s of str1){
        obj1[s] = (obj1[s] || 0) + 1;
    }
    for(let s of str2){
        obj2[s] = (obj2[s] || 0) + 1;
    }

    // compare each entry in the objects if both are not same return false.
    for(const key in obj1) {
        if(!obj2[key]) return false;
        if(obj1[key] !== obj2[key]) return false;
    }
    return true
}

console.log(anagrams('Hello', 'olleH'));
console.log(anagrams('abc', 'efg'));
console.log(anagrams('', ''));
console.log(anagrams('timetwisttext', 'texttwisttime'))
console.log(anagrams('aaz', 'zza'))

// refactor the above code
function validAnagrams(first, second) {
    if(first.length !== second.length) return false;
    let lookup = {};
    for(let i = 0; i < first.length; i++){
        let char = first[i];
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1 
    }
    console.log('lookup', lookup);
    for(let i = 0; i < second.length; i++){
        const letter = second[i];
        if(!lookup[letter]) return false;
        else lookup[letter] -= 1;
    }
    return true;
}

console.log(validAnagrams('abcc', 'cba'));
console.log(validAnagrams('acxx', 'xac'))
