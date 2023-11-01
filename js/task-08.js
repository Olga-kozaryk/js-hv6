const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', onSubmit);
function onSubmit(evt) {
    evt.preventDefault();
    const {email, password} = evt.currentTarget.elements;
    const dataLogin ={
        email: email.value,
        password: password.value
    }
    console.log(dataLogin);
    if (email.value === '' || password.value === '') {
        window.alert("Всі поля повинні бути заповнені!");
    }
    evt.target.reset();
}
