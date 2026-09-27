const registerForm = document.getElementById('register-form');
const registerError = document.getElementById('register-error');
const registerSuccess = document.getElementById('register-success');

registerForm.addEventListener('submit', function(event){
    event.preventDefault();

    const fullName = document.getElementById('register-fullname').value.trim();
    const email = document.getElementById('register-email').value.trim().toLowerCase();
    const password = document.getElementById('register-password').value;
    const passwordConfirm = document.getElementById('register-password-confirm').value;

    registerError.classList.remove('active');
    registerError.textContent = '';

    if (password !== passwordConfirm) {
        registerError.textContent = 'Şifreler birbiriyle uyuşmuyor.';
        registerError.classList.add('active');
        return;
    }

    const users = JSON.parse(localStorage.getItem('oyunverseUsers')) || [];

    const alreadyExists = users.some(function(user){
        return user.email === email;
    });

    if (alreadyExists) {
        registerError.textContent = 'Bu e-posta ile zaten bir hesap var. Giriş yapmayı dene.';
        registerError.classList.add('active');
        return;
    }

    users.push({
        fullName: fullName,
        email: email,
        password: password,
        registeredAt: new Date().toISOString()
    });
    localStorage.setItem('oyunverseUsers', JSON.stringify(users));

    registerForm.reset();
    registerForm.querySelector('button[type="submit"]').style.display = 'none';
    registerSuccess.classList.add('active');

    setTimeout(function(){
        window.location.href = 'login.html';
    }, 1500);
});