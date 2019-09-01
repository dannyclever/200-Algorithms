/** Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer

[JavaScript (ES6)] Syntax Tips

 */

function commonCharacterCount(s1, s2) {
    s1 = s1.split('')
    s2 = s2.split('')
    s1 = s1.filter(function(l){
       if(s2.includes(l)){
           s2.splice(s2.indexOf(l), 1)
           return true
       } else {
           return false
       }
})
    return s1.length;

}

var s1 = "aabcc" , s2 = "adcaa";
console.log(commonCharacterCount(s1, s2));