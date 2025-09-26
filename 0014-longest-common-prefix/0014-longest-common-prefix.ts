function longestCommonPrefix(strs: string[]): string {
    if(strs.length < 1) return ""

    let res = ''

    for(let i = 0; i < strs[0].length; i++){
        const c = strs[0][i]

        for(let j = 1; j < strs.length; j++){
            if(i >= strs[j].length || strs[j][i] !== c) return res
        }
        res += c
    }
    return res
};