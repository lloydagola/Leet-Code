function isPalindrome(x: number): boolean {
    //if(!x) return false;
    if(x < 0 ) return false;
    
  const numStringArray = String(x).split('');
  const numCopy = numStringArray.slice().reverse().join('');
    
    return Number(numCopy) === x;
};