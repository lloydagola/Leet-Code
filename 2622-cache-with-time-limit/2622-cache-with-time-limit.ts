type TCache = {
    [key:number]: {value: number, ref:NodeJS.Timeout}
}

class TimeLimitedCache {
    
    cache: TCache;

    constructor() {
        this.cache = {};
    }
    
    set(key: number, value: number, duration: number): boolean {
        
        const exists = Object.hasOwn(this.cache, key);
        
        
        if(exists) clearTimeout(this.cache[key].ref);     
        
        const timeout = setTimeout(() => {
            delete this.cache[key]
        }, duration);
        
         this.cache[key] = {value, ref:timeout};
        
         return exists;
    }
    
    get(key: number): number {
        const val = this.cache[key];
        if(!val) return -1
        return val.value;
    }
    
    count(): number {
        //@ToDo: count the number
      return Object.keys(this.cache).length;  
    }    
    
}


  const timeLimitedCache = new TimeLimitedCache()
  timeLimitedCache.set(1, 42, 0); // false
  timeLimitedCache.get(1) // 42
  timeLimitedCache.count() // 1
 
console.log(timeLimitedCache)