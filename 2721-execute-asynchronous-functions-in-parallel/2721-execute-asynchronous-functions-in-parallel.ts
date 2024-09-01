type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {

    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let successful = 0;
        
        functions.forEach((fn, index) => 
            fn()
            .then(result => {
                results[index] = result;
                successful++;                
                
                if (successful === functions.length) resolve(results);
            })
            .catch(error => reject(error))
        );
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */