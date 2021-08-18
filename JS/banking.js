/* function doubleIt(num){
    const result =  num *2;

    return result;
}

const first = doubleIt(5);
const second = doubleIt(7);

console.log(first, second); */

function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);

    //clear input field;
    inputField.value = '';

    return inputAmount;
}

function updateTotalfield(totalFieldId, amount) {

    const totalElement = document.getElementById(totalFieldId);

    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    // console.log(depositTotalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    /*const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */

    const previousBalanceTotal = getCurrentBalance();


    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}




document.getElementById('deposit-button').addEventListener('click', function () {

    /*  const depositInput= document.getElementById('deposit-input');
 
     const depositAmountText= depositInput.value;
     const depositAmount = parseFloat(depositAmountText); */

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalfield('deposit-total', depositAmount);
        updateBalance(depositAmount, true)
    }


    // console.log(depositAmount);

    //get and update deposit total;

    /*    const depositTotal = document.getElementById('deposit-total');
   
       const depositTotalText = depositTotal.innerText;
       const previousDepositTotal = parseFloat(depositTotalText);
   
       // console.log(depositTotalText);
       depositTotal.innerText = previousDepositTotal + depositAmount; */
    // updateTotalfield('deposit-total', depositAmount);
    // console.log(depositTotalText);

    //Update Balance Total;

    //    const balanceTotal = document.getElementById('balance-total');
    //    const balanceTotalText = balanceTotal.innerText;
    //    const previousBalanceTotal = parseFloat(balanceTotalText);
    //    balanceTotal.innerText = previousBalanceTotal + amount;

    // updateBalance(depositAmount, true);


});



// Handle Withdraw Button;

document.getElementById('withdraw-button').addEventListener('click', function () {

    /* const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */

    // console.log(withdrawAmountText);

    const withdrawAmount = getInputValue('withdraw-input')

    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalfield('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

    if (withdrawAmount > currentBalance) {
        console.log('You do not have enough money');
    }

    //get and update withdraw Total;
    /*  const withdrawTotal= document.getElementById('withdraw-total');
 
     const previousWithdrawTotalText = withdrawTotal.innerText;
     const previousWithdrawTotal= parseFloat(previousWithdrawTotalText);
 
     withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

    // updateTotalfield('withdraw-total', withdrawAmount);

    // update Balance Total after withdraw money;
    /* 
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

    // updateBalance(withdrawAmount, false);


})