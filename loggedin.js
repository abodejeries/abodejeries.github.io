$(document).ready(function () {
    getUser();

    $('#logout').click(function () {
        logout();
    });
});

function getUser() {
    // Check if the user is looged in
    var user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
        if (user.username == '' || user.username == null) {
            logout();
        } else {
            var loggedUser = document.getElementById('username');
            loggedUser.innerText = `Logged User: ${user.username.toUpperCase()}`;
        }
    }else {
        logout();
    }
}

function logout() {
    localStorage.clear();
    window.open('login.html', '_self');
}