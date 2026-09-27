const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const loginSuccess = document.getElementById('login-success');

loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;

    loginError.classList.remove('active');
    loginError.textContent = '';

    const users = JSON.parse(localStorage.getItem('oyunverseUsers')) || [];

    const matchedUser = users.find(function(user){
        return user.email === email && user.password === password;
    });

    if (!matchedUser) {
        loginError.textContent = 'E-posta veya şifre hatalı.';
        loginError.classList.add('active');
        return;
    }

    localStorage.setItem('oyunverseCurrentUser', JSON.stringify({
        fullName: matchedUser.fullName,
        email: matchedUser.email,
        loggedInAt: new Date().toISOString()
    }));

    loginForm.reset();
    loginForm.querySelector('button[type="submit"]').style.display = 'none';
    loginSuccess.classList.add('active');

    setTimeout(function(){
        window.location.href = 'index.html';
    }, 1000);
});