//                         Data Structures and Algorithms


/*                                FizzBuzz

fizz - divisable by 3
buzz - divisable by 5
fizzbuzz - divisable by 3 and 5
*/

//                             Fibonacci Series
/*1,1,2,3,5,8....etc...

function fib(n){
  if (n < 2) {
    return n
  }
  return fib(n-1) + fib(n-2);
}
console.log(fib(3));
*/

//                               Reverse String

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
                                //Answer 1

function reverse(str) {
  const splitString = str.split('');
  splitString.reverse();
  splitString.join('');

  return splitString;
}

function reverse(str) {
  const splitString = str.split('');
  splitString.reverse();
  splitString.join('');

  return splitString;
}
//--------------------------------------------------------------

                    // Manual solution answer #2
 function reverse(str){
   let reversed = '';
for(let character of str) {  // ES6 syntax
  reversed = character + reversed;
}
return reversed;

 }
//------------------------------------------------------------------
*/                     // Manual solution answer #3
/*
  function reverse(str) {
   return str.split('').reduce((acc, value) => acc + value
   , '');
}

console.log(reverse());

*/
/*
function reverse(str) {
  return str.split('').reduce((acc, val) => acc + val, '');

}

*/


//                                Palindromes

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*                               Answer 1


function palindrome(str) {
  let reversed = str.split('').reverse().join('');

   return str === reversed
}

---------------------------------------------------------------------
*/

/*                               Answer 2
function palindrome(str) {
 return str.split('').every((char, i) => {
   return char === str.[str.length - i - 1];
 });
}
//-----------------------------------------------------------------

                    Reversing Integer Problem
*/
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*
math.sign() = gives back 1 or -1
toString() = turns numbers into strings...we can use array methods on these
parseInt() = turns string back into number
*/
//                               Answer 1

/*              321
function reverse(num) {
const reversed = num.toString().split('').reverse().join('');
//                  "321"     "3""2""1"  "1""2""3"     "123"
if (n < 0) {
  return parseInt(reversed) * -1; // go down to solution 2
}
  return parseInt(reversed);
//     123
}

//                               Answer 2

//               321
function reverse(num) {
const reversed = num.toString().split('').reverse().join('');
//                  "321"     "3""2""1"  "1""2""3"     "123"
  return parseInt(reversed) * math.sign(num);

//     123
}
*/
//--------------------------------------------------------------------




//                         Max Character problem
// Note to self... methods are good for other string related problems

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
/* Commonly asked questions using same technique

What is the most common character in the string?
Does string A have the same characters as string B (is it an anagram)?
Does the given string have any repeated characters in it?

const string = "Hello There!";
const chars = {};

for(let char of string){
 if(!chars)[char]{
   chars[char] = 1;
} else {
   chars[char]++;
}
}
 no if statement
const string = "Hello There!";
const chars = {};


my approach ====
for(let char of string) {
chars[char] = chars[char] + 1 || 1; easier way IMO for breaking object apart
}

*/
/*                         Answer 1 - long version
/* The set up is easy... we want the max to continue to be replaced
everytime the character amount is larger
function maxChar(str) {
  const cMap = {};
  let max = 0;
  let maxChar = '';

for (let char of str){  // how to remember this of starts with o
  if(cMap[char]){   // Ex. hello - l has 2 ... entry is there
    cMap[char]++;   // h has 1 entry needs to be created
  } else {         // other create the entry at 1
    cMap[char] = 1;
  }
}
 for (let char in cMap){   // how to remember in = interate through object
   if(cMap[char] > max){    // so if 2 > 1 ..we keep larger number and set it to max
     max = cMap[char];     // and not it stays as max until larger number takes place
     maxChar = char;       //  char = the different letter we added to our object
   }
 }
 return maxChar;
}
*/
//-----------------------------------------------------------------------

//                                  Fizzbuzz
// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
/*                                Answer 1
function fizzBuzz(n) {
  for(let i = 1, i <= n ; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz');
    } else if(i % 3 === 0){
      console.log('fizz');
    } else if(i % 5 === 0){
      console.log('buzz')
    } else {
      console.log(i);
    }
*/

/*                                Answer 2  condense the for loop
function fizzBuzz(n) {
  for(let i = 1, i <= n ; i++){
    if(i % 15 === 0){           already knowing that fizz will occur at 15/30/45, condense if and
      console.log('fizzbuzz');
    } else if(i % 3 === 0){
      console.log('fizz');
    } else if(i % 5 === 0){
      console.log('buzz')
    } else {
      console.log(i);
    }
*/

//----------------------------------------------------------------------------
//                                   Array Chunk Question

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



/*                                          Answer 1
function chunk(array, size) {
  let chunked = [];
  for(let element of array){
    const last = chunked[chunked.length - 1];

    if(!last || last.length === size){
      chunk.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}
*/

//                           Answer 2
/* Slice method directly put into array.
 function chunk(array, size){
   const chunked = [];
   let index = 0;

   while(index < array.length){
    chunked.push(array.slice(index, index + size));
    index += size;
   }
   return chunked;
 }

 */
 //--------------------------------------------------------------


//                             Anagrams
 // --- Directions
 // Check to see if two provided strings are anagrams of eachother.
 // One string is an anagram of another if it uses the same characters
 // in the same quantity. Only consider characters, not spaces
 // or punctuation.  Consider capital letters to be the same as lower case
 // --- Examples
 //   anagrams('rail safety', 'fairy tales') --> True
 //   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
 //   anagrams('Hi there', 'Bye there') --> False
/*
 use Regex = Regular Expressions:

 example:
 const word = "HI THERE!!!!!!"
 word.replace(/[^\w]/g, '').toLowercase();
*/
/* Map this out.
Hello vs Ellho = true... Hello vs ellhos = false
1) Reminder to self... turn these into objects
2) Comparing Hello Vs ellhos will mess up in comparison
3) Compare the actual KEYS with in the object
4) use 'in' for interating through object
5) use 'of' for interating over array
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
note to self... this has screwed up many of my past problems
Know the difference!!
*/
/*                            Answer 1
function anagrams(stringA, stringB) {
const aMap = buildCharMap(stringA);
const aMap = buildCharMap(stringB);

if(Object.keys(aMap).length !== Object.keys(bMap).length){
  return false;
 }
 for (let char in aMap){
   if(aMap[char] !== bMap[char]){
     return false;
   }
 }
 return true;
}

function buildCharMap(str){
  const charMap() = {};

  for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

*/
//                           Answer 2
// This answer is straight forward but would have efficiency issues but this is probably the most direct answer.
function anagrams(stringA, stringB){
  return cleanString(stringA) === cleanString(stringB);   //essentially what I'm doing here is literally comparing 2 objects
}                                                         // Hello === ELLho = true  because of my cleanString Method with regexpress

function cleanString(str){
  return str.replace(/^\w/g, '').toLowerCase().split('').sort().join();   // this will make sure all spaces/uppercase/ are fixed
                                                                         // also, need to make an array and turn it back into a string
}
