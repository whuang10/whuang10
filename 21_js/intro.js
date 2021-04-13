// Team Tomatoes - Winnie Huang, Renee Mui
// SoftDev
// K21 -- Get Scripty/Use prior knowledge of Java and Scheme to write basic fibonacci and factorial functions in JavaScript
// 2021-04-11

var factI = function factI(n) {
    var ans = 1; // stores answer
    for (i = 1; i <= n; i++) { // loops through all values from 1 to n
        ans *= i; // updates ans by multiplying each number to it
    }
    return ans;
}

var factR = function factR(n) {
    if (n <= 1) {
        return 1; // if n is less than 1, will return 1
    } else {
        return n * factR(n - 1); // otherwise, multiplies n with the factorial of n - 1
    }
}

var fibI = function fibI(num) {
// stores last two elements of current fibonacci sequence
var first = 1;
var sec = 1;
// iteratively adds last two elements to generate a third and updates what last two elements are
for (i = 3; i <= num; i++) {
sec = first + sec;
first = sec - first;
}
return sec;
}

var fibR = function fibR(num) {
// if num is 1 or 2, will return 1
if (num == 1 || num == 2) {
return 1;
}
// otherwise, return the sum of previous two elements in sequence
return fibR(num - 1) + fibR(num - 2);
}
