function mySqrt(x: number): number {
    if(x < 2) return x;

    let ans = 0;
    let left = 1;
    let right = Math.floor(x/2);

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if(square === x) return mid;
        else if(square < x){
            ans = mid;
            left = mid + 1;
        }
        else right = mid - 1
    }

    return ans;
};