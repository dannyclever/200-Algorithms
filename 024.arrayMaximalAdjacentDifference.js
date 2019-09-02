/**Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.

Input/Output
[execution time limit] 4 seconds (js)
[input] array.integer inputArray
Guaranteed constraints:
3 ≤ inputArray.length ≤ 10,
-15 ≤ inputArray[i] ≤ 15.
[output] integer
The maximal absolute difference.
[JavaScript (ES6)] Syntax Tips
*/

function arrayMaximalAdjacentDifference(inputArray) {
    var dif = [];
    var i = 0
    for (; i < inputArray.length-1; i++) {
        dif.push(Math.abs(inputArray[i] - inputArray[i+1]));

    }
    return dif.sort((a,b)=> b - a)[0];
}

var inputArray = [2, 4, 1, 0]
console.log(arrayMaximalAdjacentDifference(inputArray))

inputArray = [10, 11, 13]
console.log(arrayMaximalAdjacentDifference(inputArray))
