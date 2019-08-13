/* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements.
[JavaScript (ES6)] Syntax Tips

 */

function adjacentElementsProduct(inputArray){
    var produtos = [];
    for (let i = 0; i < inputArray.length-1; i++) {
        produtos.push(inputArray[i] * inputArray[i+1]);
        
    }
   return produtos.sort(function(a,b){return b - a})[0];
}

//Outra soluçao mais elegante
function adjacentElementsProduct(inputArray){
    var prod = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length-1; i++) {
        prod = Math.max(prod, inputArray[i] * inputArray[i+1])
        
    }
    return prod;
  
}

var inputArray = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(inputArray));