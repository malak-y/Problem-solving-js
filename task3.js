function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log("The filtered array :")
console.log(filterEvenNumbers(numbers)); 

function findLargestNumber(arr) {
    return Math.max(...arr);
}

console.log("The max number in array is :")
const numbers2 = [1, 2, 3, 4, 5, 6];
console.log(findLargestNumber(numbers)); 


function reverseString(str) {
    return str.split('').reverse().join('');
}

const word = "malak";
console.log("After reversing string")
console.log(reverseString(word));


function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const numbers4 = [1, 2, 2, 3, 4, 4, 5];
console.log("After removing duplicates")
console.log(removeDuplicates(numbers4)); 




