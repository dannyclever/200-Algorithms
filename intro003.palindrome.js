/* Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.
[JavaScript (ES6)] Syntax Tips */

function checkPalindromo(inputString){
    var s = '';
    for (l of inputString) {
        s = l + s; //Reverse the given String
    }
    return inputString === s;
}

function checkPalindromo(inputString){
    
    return inputString === inputString.split('').reverse().join(''); //break,Reverse,Join and compare with given string
}

var s = "abcd";
console.log(checkPalindromo(s));


s = "abcddcba";
console.log(checkPalindromo(s));