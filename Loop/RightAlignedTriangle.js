let n = 5;
for (let i = 0; i < n; i++){
    let row=""
    for (j = 0; j < (n - i) - 1; j++){
        row+="-"
    }
    for (k = 0; k <= i; k++){
            
        row+="*"
    }
    console.log(row)

}