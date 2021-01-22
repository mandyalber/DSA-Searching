/*The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.*/

function maxProfit(array) {
    let buy = 0;
    let sell = 1;
    let min = 0;
    let max_profit = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[min]) {
            min = i
        }

        if (array[sell] - array[buy] < array[i] - array[min]) {
            sell = i
            buy = min
        }
    }
    max_profit = array[sell] - array[buy]
    return { max_profit, buy, sell }
}

console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]))
