document.getElementById('login-submit').addEventListener('click', function(){
    // get email
    const emailField = document.getElementById('user-mail');
    const userEmail = emailField.value;
    //  get password
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    if( userEmail == 'sontan@baap.com' && userPass == 'baap'){
        window.location.href = 'details.html'
    }
    else{
        window.location.href ='other.html'
    }
})

