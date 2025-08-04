function maxProfit (prices) {
    let min= prices[0]
    let maxprofit = 0
    for(let i =1 ; i< prices.length;i++){
        if(prices[i]-min  > maxprofit  ){
            maxprofit = prices[i]-min

        }
        if(prices[i]<min){
            min = prices[i]
        }
    }
    return maxprofit

    
}
let prices = [7,1,5,3,6,4]
let res = maxProfit(prices)
console.log(res)