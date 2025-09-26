type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        
        const ans = functions.reduceRight((result, fn) => {

            return fn(result);

        }, x);

        return ans;

    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */