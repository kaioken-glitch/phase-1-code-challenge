//simplified estimator function for transaction fees
function estimateTransactionFee(amountToSend){
    const basic = (1.5 / 100) * amountToSend;
    const minFee = 10;
    const maxFee = 70;
    let amountPayable;

    //if else loop that checks whether the input lies below or above the thresholds 
    if(basic < minFee){
        amountPayable = minFee;
    }else if( basic > maxFee){
        amountPayable =  maxFee;
    }else{
        amountPayable = basic;
    }

    console.log(`Sending KES ${amountToSend}`);
    console.log(`Calculated Transaction Fee: KES ${basic}`);
    console.log(`Total amount to be debited: KES ${amountToSend + amountPayable}`);

    //returns the payable amount
    return amountPayable
}

const amount = prompt("Enter Amount To Send: ");

//converts the prompt input to a number and pass to the function
estimateTransactionFee(Number(amount));