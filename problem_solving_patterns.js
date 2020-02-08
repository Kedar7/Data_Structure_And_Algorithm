// Frequency Counter 
//Naive Solution
function same(arr1, arr2) {
   if (arr1.length !== arr2.length) {
      return false;
   }
   for (let i = 0; i < arr1.length; i++) {
      let currentIndex = arr2.indexOf(arr[i] ** 2);
      if (currentIndex === -1) {
         return false;
      }
      arr2.splice(currentIndex, 1);
   }
   return true;
}
console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));

//Anagram
function sameChar(arr1, arr2) {
   if (arr1.length !== arr2.length) {
      return false;
   }
   for (let i = 0; i < arr1.length; i++) {
      let currentIndex = arr2.indexOf(arr[i]);
      if (currentIndex === -1) {
         return false;
      }
      arr2.splice(currentIndex, 1);
   }
}
console.log(sameChar(["a", "b", "c"], ["a", "b", "c"]));

//Sum is zero 
function sumZero(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[i] + arr[j] === 0) {
            return [arr[i], arr[j]]
         } else {
            return "sum not zero";
         }
      }
   }
}
console.log(sumZero([-1, 1]));

//Count Unique Values
function UniqueValues(arr) {
   arr.sort();
   if (arr.length === 0) {
      return 0;
   }
   let i = 0;
   for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
         i++;
         arr[i] = arr[j];
      }
   }
   return i + 1;
}
console.log(UniqueValues([1, 1, 3, 4, 5, 1]));

//Sliding window pattern
//maxSubArraySum


//Divide and conquer patterns

