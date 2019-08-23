/**Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string picture

A non-empty array of non-empty equal-length strings.

Guaranteed constraints:
1 ≤ picture.length ≤ 100,
1 ≤ picture[i].length ≤ 100.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.
[JavaScript (ES6)] Syntax Tips

 */

 function addBorder(p){
    var ast = '*'.repeat(p[0].length+2);
    return [].concat([ast], p.map(e=> '*'+e+"*"), [ast])
}

var picture = ["abc",
"ded"]

console.log(addBorder(picture))
console.log(["*****",
"*abc*",
"*ded*",
"*****"])