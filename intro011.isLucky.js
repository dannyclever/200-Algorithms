function isLucky(){
    var s2 = n.toString().split('').map(x=>parseInt(x));
    var s1 = s2.splice(0, s2.length/2);
    return s1.reduce((t,n)=> t+n) == s2.reduce((t,n)=> t+n);
}

//Another solution
function isLucky(n){
    var a = (n + "").split(""), half = a.length/2, l = 0, r = 0;//(n + "") becomes a String
    while(a.length > half) r+= +a.pop();//+a makes to comeback to int numbers
    while(a.length) l+= +a.pop();
    return l == r;
}

    


var n = 1230;
console.log(isLucky(n));

n = 239017;
console.log(isLucky(n));
