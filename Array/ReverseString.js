
function reverseString(s) {
    
    let l = s.length
    let halfen= Math.floor(l/2)
    for(let i = 0 ; i<halfen;i++){
            t=s[i]
            s[i] = s[l-1-i]            
            s[l-1-i]=t
            

        
        }
    return s

}
let s = ["h","e","l","l","o"]
let res = reverseString(s)
console.log(res)
    
