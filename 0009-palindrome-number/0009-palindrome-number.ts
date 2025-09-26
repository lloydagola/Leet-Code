/**
    Time Complexity  : O(d)
    Space COmplexity : O(d)
 */

function _isPalindrome(x: number): boolean {
    return String(x).split('').reverse().join('') === String(x)
};

/**
    Time Complexity  : O(d)
    Space Complexity : O(n)
 */
function isPalindrome(x: number): boolean {
    if (x < 0) return false; // negative numbers are not palindromes

    let rev = 0;            // will hold the reversed digits we've processed so far
    let num = x;            // working copy of x that we will shorten

    while (num > 0) {
        const lastDigit = num % 10;        // 1) get the last digit
        rev = rev * 10 + lastDigit;       // 2) append it to 'rev'
        num = Math.floor(num / 10);       // 3) remove last digit from 'num' (integer division)
    }

    return rev === x; // if reversed number equals original, it's a palindrome

}