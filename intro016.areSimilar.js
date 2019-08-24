/**Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Array of integers.

Guaranteed constraints:
3 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ 1000.

[input] array.integer b

Array of integers of the same length as a.

Guaranteed constraints:
b.length = a.length,
1 ≤ b[i] ≤ 1000.

[output] boolean

true if a and b are similar, false otherwise.
[JavaScript (ES6)] Syntax Tips

 */

function areSimilar(a, b) {
    var indice = []
    for (let i = 0; i < a.length; i++) {
        if(a[i] != b[i]) indice.push(i)  
        if(indice.length > 2) return false
    }
    return a[indice[0]] == b[indice[1]] && a[indice[1]] == b[indice[0]]
}

//Another way 
function areSimilar(a, b){
    const ad = a.filter((x,i)=> x!=b[i])
    const bd = b.filter((x,i)=> x!=b[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}

var a = [1, 2, 3] 
var b = [1, 2, 3]
console.log(areSimilar(a,b))

a = [1, 2, 3, 10] , b = [2, 1, 3, 11]
console.log(areSimilar(a,b))

a = [1, 2, 2] , b = [2, 1, 1]
console.log(areSimilar(a,b))

a = [4, 6, 3] , b = [3, 4, 6]
console.log(areSimilar(a,b))

a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]
b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
console.log(areSimilar(a,b))