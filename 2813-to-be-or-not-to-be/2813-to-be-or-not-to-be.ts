type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    
    return {
        toBe: function(assertVal ){
           const flag = val === assertVal;
            if(!flag) throw new Error("Not Equal")
            
            return flag;
        },
        notToBe: function(assertVal){
            const flag = val !== assertVal;
            
            if(!flag) throw new Error("Equal")
            
            return flag;
        }       
    }
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */