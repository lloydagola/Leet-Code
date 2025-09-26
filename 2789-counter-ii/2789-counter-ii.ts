type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let result = init;
    return {
        increment: function (){
            result ++;
            return result;
        },
        decrement: function (){
            result--;
            return result
        },
        reset: function (){
            result = init;
            return result
        },
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */