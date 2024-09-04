document.getElementById('deposit-btn').addEventListener('click', function () {
    // Deposit field
    const depositField = document.getElementById('deposit-field');
    const depositFieldValueString = depositField.value;
    const depositFieldValue = parseFloat(depositFieldValueString);
    depositField.value = '';
    // Previous deposit
    const previousDeposit = document.getElementById('previous-deposit');
    const previousDepositValueString = previousDeposit.innerText;
    const previousDepositValue = parseFloat(previousDepositValueString);
    const totalDeposit = previousDepositValue + depositFieldValue;
    previousDeposit.innerText = totalDeposit;
    // Total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceValueString = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceValueString);
    const allBalance = totalBalanceValue + depositFieldValue;
    totalBalance.innerText = allBalance;
})