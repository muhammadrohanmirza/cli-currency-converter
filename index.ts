#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD: 1,   //base currency  // perminent rate
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.30,
    PKR: 277.54,
    KWD: 0.31
};
let confirmExit;

do{
    confirmExit = await inquirer.prompt(
        {
            name:"exit",
            type:"confirm",
            message:"Do you want to Convert Amount:"
        }
    );

if (!confirmExit.exit) {
    break;
}

    let userAns = await inquirer.prompt(
        [ 
             {
                 name:"from",
                 type:"list",
                 choices:["USD","EUR","GBP","INR","PKR","KWD"],
                 message:"Enter from currency"
             },
             {
                 name:"to",
                 type:"list",
                 choices:["USD","EUR","GBP","INR","PKR","KWD"],
                 message:"Enter to currency"
             },
             {
                 name:"amount",
                 type:"number",
                 message:"Enter your Amount"
             }
         ]    
     );
     
     // Dynamic Form
     
     let fromAmount = currency[userAns.from]  // exchange rate
     let toAmount = currency[userAns.to]       // exchange rate
     let amount =  userAns.amount
     
     let baseAmount = amount / fromAmount     // usd base currency // 4
     let convertedAmount = baseAmount * toAmount
     
     console.log(convertedAmount)
}while(confirmExit.exit);

