// Verbal Questions
// What is the difference between a parameter and an argument?
// Parametr is a variable in the declaration, agrument ids the actual value of the function that gets passed to function.

// Within a function, what is the difference between return and console.log?
// returnn -statement that allows function to output a value back where it was called. console.log- is a function to inspect values and debugging

//Palindrome

function checkPalindrome(str) {
  // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
  var reverseStr = lowRegStr.split('').reverse().join('');
  // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr;
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
console.log(checkPalindrome("RADAR"));
// double saleTax(double price){
//   return 0.05*price;
// }
// saleTax(10.00);
