/* Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.

[output] integer

The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.
[JavaScript (ES6)] Syntax Tips

 */

function makeArrayConsecutive2(statues){
    statues.sort(function(a,b){return a-b})
    var total = statues[statues.length-1] - statues[0]+1
    return total - statues.length
}

//Soluçao mais directa
function makeArrayConsecutive2(statues){
    return Math.max(...statues) - Math.min(...statues)+1 - statues.length
}

var statues = [6, 2, 3, 8]
console.log(makeArrayConsecutive2(statues))