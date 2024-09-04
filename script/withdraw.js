document.getElementById('withdraw-btn').addEventListener('click', function () {
    // Withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValueString = withdrawField.value;
    const withdrawFieldValue = parseFloat(withdrawFieldValueString);
    withdrawField.value = '';
    // Previous withdraw
    const previousWithdraw = document.getElementById('previous-withdraw');
    const previousWithdrawValueString = previousWithdraw.innerText;
    const previousWithdrawValue = parseFloat(previousWithdrawValueString);
    const totalWithdraw = previousWithdrawValue + withdrawFieldValue;
    previousWithdraw.innerText = totalWithdraw;
    // Total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceValueString = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceValueString);
    const allBalance = totalBalanceValue - withdrawFieldValue;
    totalBalance.innerText = allBalance;
})