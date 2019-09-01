/**Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.

[output] boolean

true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
[JavaScript (ES6)] Syntax Tips

 */

function palindromeRearranging(s) {
    var letters = {}
    for (l of s) {
        letters[l] = (letters.hasOwnProperty(l))? letters[l]+1 : 1;
    }
    var even = 0;
    for (const l in letters) {
        even += letters[l]&1; //1 if even, 0 if odd
        if (even > 1)
            return false
        }
            return true
}

//Another Way
function palindromeRearranging(inputString) {
    return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2;

}

var a = 'ababcdc'
console.log(true, palindromeRearranging(a))

a = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"
console.log(false, palindromeRearranging(a))