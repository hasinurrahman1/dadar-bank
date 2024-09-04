document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const emailFieldValue = emailField.value;
    const passwordField = document.getElementById('password-field');
    const passwordFieldValue = passwordField.value;
    if(emailFieldValue == 'dadar@bank.com' && passwordFieldValue == 'secret'){
        window.location.href='bank.html';
    }
    else{
        alert('This password is incorrect');
    }
})
