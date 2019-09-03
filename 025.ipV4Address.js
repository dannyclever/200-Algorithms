/**An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
isIPv4Address(inputString) = true;

For inputString = "172.316.254.1", the output should be
isIPv4Address(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
isIPv4Address(inputString) = false.

There is no first number.
input/Output
[execution time limit] 4 seconds (js)
[input] string inputString
A string consisting of digits, full stops and lowercase English letters.
Guaranteed constraints:
1 ≤ inputString.length ≤ 30.
[output] boolean
true if inputString satisfies the IPv4 address naming rules, false otherwise.
[JavaScript (ES6)] Syntax Tips */

function isIPv4Address(inputString) {
    inputString = inputString.split(".")
    if(inputString.length !== 4) return false
    for(i in inputString){
        var z = parseInt(inputString[i])
        if(z > 255 || z < 0 || inputString[i] == "" || isNaN(inputString[i])) return false 
    }
    return true
}

//Another solution 
function isIPv4Address(s) {
    var  r=s.split(".")
    return r.length===4&&r.every(x=>x!=""&&!isNaN(x)&&x>=0&&x<256)
}


var inputString = "172.16.254.1"
console.log(isIPv4Address(inputString))

inputString = "172.316.254.1"
console.log(isIPv4Address(inputString))

inputString = ".254.255.0"
console.log(isIPv4Address(inputString))