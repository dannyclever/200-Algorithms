/* Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer year

A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.

[output] integer

The number of the century the year is in.
[JavaScript (ES6)] Syntax Tips */



function centuryFromYear(year){
 
    if ((year/100)%2 == 0) {
        return year/100;
    } else {
        return Math.trunc(year/100) + 1;
    }


/*Another Solution*/
function centuryFromYear(year){
 
    if ((year/100)%2 == 0) {
        return year/100;
    } else {
        return Math.ceil(year/100);
    }
}



var y = 2000;
console.log(centuryFromYear(y));

y = 2001;
console.log(centuryFromYear(y));