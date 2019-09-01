/** Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
[JavaScript (ES6)] Syntax Tips */

function allLongestStrings(inputArray) {
    var a = [""]
    for(x of inputArray){
        if(x.length > a[0].length){
            a = [x]
      }else if(x.length === a[0].length){
            a.push(x)
         }
    }
    return a

}

var inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(allLongestStrings(inputArray));