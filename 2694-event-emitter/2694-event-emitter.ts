type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    
    private events = new Map<string, Set<Callback>>()
    
    subscribe(eventName: string, callback: Callback): Subscription {
        if(!this.events.has(eventName)){
            this.events.set(eventName, new Set([callback]))
        }
        else{
            this.events.get(eventName).add(callback)
        }
        
        return {
            unsubscribe: () => {
                this.events.get(eventName).delete(callback)
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        if(!this.events.has(eventName)){            
            return []
        }
        
        const result = [];
        
        this.events.get(eventName).forEach((callback) => {
            result.push(callback(...args))
        })
        
        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallbackj
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */