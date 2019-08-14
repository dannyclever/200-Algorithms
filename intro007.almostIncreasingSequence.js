/** Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
[JavaScript (ES6)] Syntax Tips

 */

function almostIncreasingSequence(sequence) {
    var c = 0;
    for(let i = 0;i < sequence.length;i++){
      if(sequence[i] <= sequence[i-1]){
        if(i == 1){
          ++c;
        }else{
          if(++c > 1) return false;
          if(i==sequence.length-1) return true;
          if((sequence[i-1] < sequence[i+1]) || (sequence[i-2] < sequence[i])){
            c++;
          }
          else return false;
        }
      }
    }
    return true;

}

var a = [1, 2, 5, 3, 5];
console.log(almostIncreasingSequence(a));

a = [10, 1, 2, 3, 4, 5];
console.log(almostIncreasingSequence(a));

a = [1, 2, 1, 2];
console.log(almostIncreasingSequence(a));