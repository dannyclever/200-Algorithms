/**Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
[JavaScript (ES6)] Syntax Tips

 */

function isLucky(){
    var s2 = n.toString().split('').map(x=>parseInt(x));
    var s1 = s2.splice(0, s2.length/2);
    return s1.reduce((t,n)=> t+n) == s2.reduce((t,n)=> t+n);
}

//Another solution
function isLucky(n){
    var a = (n + "").split(""), half = a.length/2, l = 0, r = 0;//(n + "") becomes a String
    while(a.length > half) r+= +a.pop();//+a Transforms the strings array to ints arrays
    while(a.length) l+= +a.pop();
    return l == r;
}

    


var n = 1230;
console.log(isLucky(n));

n = 239017;
console.log(isLucky(n));
