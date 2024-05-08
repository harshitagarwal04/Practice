// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

const isPalindrome = function (x) {
    x = String(x);
    const len = x.length;
    for (let i = 0; i < len / 2; i++) {
        if (x[i] !== x[len - 1 - i]) {
            return false;
        }
    }
    return true;
};