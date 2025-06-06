//simplified estimator function for transaction fees
function estimateTransactionFee(amountToSend){
    const basic = 1.5 * amountToSend;
    const minFee = 10;
    const maxFee = 70;

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
    console.log(`Total amount to be debited: KES ${amountPayable}`);
}