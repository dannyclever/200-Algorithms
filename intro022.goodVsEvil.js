/**Description
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. Each parameter will be a string separated by a single space. Each string will contain the count of each race on the side of good and evil.
The first parameter will contain the count of each race on the side of good in the following order:
Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:
Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie. */

function goodVsEvil(good, evil) {
    const config = {
        good: {
            Hobbits: 1,
            Men: 2,
            Elves: 3,
            Dwarves: 3,
            Eagles: 4,
            Wizards: 10
        },
        evil: {
            Orcs: 1,
            Men: 2,
            Wargs: 2,
            Goblins: 2,
            Uruk: 3,
            Trolls: 5,
            Wizards: 10
        }
    };

    let good_arr = good.split(' ');
    let evil_arr = evil.split(' ');

    function getValues(obj) {
        let value_arr = [];
        for (let i in obj) {
            value_arr.push(obj[i])
        }
        return value_arr
    }

    let good_sum = getValues(config.good).reduce(function (sum, value, index) {
            return sum + value * parseInt(good_arr[index])
        }) + good_arr[0] * 1 - 1;
    let evil_sum = getValues(config.evil).reduce(function (sum, value, index) {
            return sum + value * parseInt(evil_arr[index])
        }) + evil_arr[0] * 1 - 1;

    let result = good_sum - evil_sum;

    return result > 0 ? "Battle Result: Good triumphs over Evil" :
        result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
            "Battle Result: No victor on this battle field";
}

//Another way
function goodVsEvil(good, evil){
    var g = 0, e = 0;
    var goodWorth = [1, 2, 3, 3, 4, 10], evilWorth = [1, 2, 2, 2, 3, 5, 10];
    for (n in good.split(" ")) g += +good.split(" ")[n]*goodWorth[n];
    for (n in evil.split(" ")) e += +evil.split(" ")[n]*evilWorth[n];
    return (g > e) ? "Battle Result: Good triumphs over Evil" 
      : (e > g) ? "Battle Result: Evil eradicates all trace of Good"
      : "Battle Result: No victor on this battle field";
  }

 
console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))