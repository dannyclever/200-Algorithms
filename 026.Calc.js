/**Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).

 */

function calc(expr) {
    // TODO: Your awesome code here
    var res = 0;
    var s = [];
    var n;
    if(expr == "") res = 0;
    s = expr.split(" ")
    n = s.map((x)=> Number(x));
    if(s.length === 1) return n[0];
    if(s.length === 3 && s[2] == "+") return n[0] + n[1];
    if(s.length === 3 && s[2] == "*") return n[0] * n[1];
    if(s.length === 3 && s[2] == "-") return n[0] - n[1];
    if(s.length === 3 && s[2] == "/") return n[0] / n[1];
  }

console.log(calc(""))//, 0, "Should work with empty string");
console.log(calc("3"))//, 3, "Should parse numbers");
console.log(calc("3.5"))//, 3.5, "Should parse float numbers");
console.log(calc("1 3 +"))//, 4, "Should support addition");
console.log(calc("1 3 *"))//, 3, "Should support multiplication");
console.log(calc("1 3 -"))//, -2, "Should support subtraction");
console.log(calc("4 2 /"))//, 2, "Should support division");
