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

function reverseInt(n) {


}
