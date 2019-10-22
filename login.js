// Default user
var user = {
    username: 'developer',
    password: '1234',
    email: 'test@mail.com',
    phone: '1234567890'
}
// Validate the login form
document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check that the inputs are not empty
    if (username.length > 0 && password.length > 0) {
        // Check whether the login credentials are correct
        if (username == user.username && password == user.password) {
            setCookie('LoggedUser', username, 100000);
            //save the username
            localStorage.setItem('user', JSON.stringify(user));
            window.open('index.html','_self');
        } else {
            alert('Incorrect username or password');
        }
    } else {
        alert('Please fill all the fields');
    }
});

// Set the session cookie
function setCookie(cname, cvalue, exdays) {
    var date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
