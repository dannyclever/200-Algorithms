/**Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
 */

function tripledouble(num1, num2) {
    let str1 = String(num1)
    let str2 = String(num2)
    let search1 = (str1.match(/(.)\1{2,}/g))
    if (search1) {
      for (let i = 0; i<search1.length; i++){ //iterate through results
        var replace = "(" + search1[i].slice(0,1) + ")\\1{1,}";
        var re = new RegExp(replace); // this adds the wrapping "/" chars
        let search2=(str2.match(re))
        if (search2) return 1
      }
    }
    return 0;
}

/**Another solution */
function TripleDouble(num1, num2) {

    // Split the numbers into arrays
    var first = num1.toString().split("");
    var second = num2.toString().split("");
    
    // Loop over each item in the first array
    for ( var i = 0; i < first.length; i++ ) {
        var count = 0;
    // Compare the current array item to other items in the first array
        for ( var j = 0; j < first.length; j++ ) {
    // If the items match, increment our counter
            if ( first[i] == first[j] ) {
            count ++;
        };
    };
    
    // If we have a triple, let’s compare against the second array
        if ( count >= 3 ) {
    // Set a second counter for the second array
        var dupe = 0;
    // Loop over the second array
        for ( var k = 0; k < second.length; k++ ) {
    // If the item from the first matches the item in the second, increment dupe
            if ( first[i] == second[k] ) {
            dupe++;
        };
    };
    // If dupe is greater than two, we have a double in the second array. Return 1.
        if ( dupe >= 2 ) {
        return 1;
            };
        };
    };
    
    // If we made it this far, everything failed. Return 0.
        return 0;
    };

    console.log(tripledouble(451999277,41177722899))//,1);
    console.log(tripledouble(1222345, 12345))//,0);
    console.log(tripledouble(12345, 12345))//,0);
    console.log(tripledouble(666789, 12345667))//,1);
    console.log(tripledouble(10560002, 100))//,1);
    console.log(tripledouble(1112, 122))//,0);
