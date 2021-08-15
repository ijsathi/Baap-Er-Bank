// handle deposit  button event
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const currentDepositAmountText = depositTotal.innerText;
    const currentDepositAmount = parseFloat(currentDepositAmountText);

    const newDepositTotal = currentDepositAmount +depositAmount;
    depositTotal.innerText= newDepositTotal;

    // clear the deposit input feild
    depositInput.value ='';

    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmountText = balanceTotal.innerText;
    const currentBalanceAmount = parseFloat(balanceAmountText);

    const newBalanceTotal = currentBalanceAmount + depositAmount;
    balanceTotal.innerText = newBalanceTotal;

})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat( withdrawAmountText);
    
    // withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previusWithdrawText = withdrawTotal.innerText;
    const previusWithdrawTotal = parseFloat(previusWithdrawText);
    
    const newWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // clear the withdraw input feild
    withdrawInput.value ='';

    // update blnc
    const balanceTotally = document.getElementById('balance-total');
    const  previusBalanceText = balanceTotally.innerText;
    const previusBalanceTotal = parseFloat(previusBalanceText);
    const newBalanceTotal = previusBalanceTotal - newWithdrawAmount;
    balanceTotally.innerText = newBalanceTotal;

})