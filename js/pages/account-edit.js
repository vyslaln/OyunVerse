const currentUser = JSON.parse(localStorage.getItem('oyunverseCurrentUser'));

if (!currentUser) {
    window.location.href = 'login.html';
}

const editForm = document.getElementById('account-edit-form');
const editError = document.getElementById('edit-error');
const editSuccess = document.getElementById('edit-success');

document.getElementById('edit-fullname').value = currentUser ? currentUser.fullName : '';
document.getElementById('edit-email').value = currentUser ? currentUser.email : '';

editForm.addEventListener('submit', function(event){
    event.preventDefault();

    const newFullName = document.getElementById('edit-fullname').value.trim();
    const newEmail = document.getElementById('edit-email').value.trim().toLowerCase();
    const newPassword = document.getElementById('edit-password').value;
    const newPasswordConfirm = document.getElementById('edit-password-confirm').value;

    editError.classList.remove('active');
    editError.textContent = '';

    if (newPassword && newPassword !== newPasswordConfirm) {
        editError.textContent = 'Yeni şifreler birbiriyle uyuşmuyor.';
        editError.classList.add('active');
        return;
    }

    const users = JSON.parse(localStorage.getItem('oyunverseUsers')) || [];

    const emailTaken = users.some(function(user){
        return user.email === newEmail && user.email !== currentUser.email;
    });

    if (emailTaken) {
        editError.textContent = 'Bu e-posta başka bir hesapta kullanılıyor.';
        editError.classList.add('active');
        return;
    }

    const userIndex = users.findIndex(function(user){
        return user.email === currentUser.email;
    });

    if (userIndex !== -1) {
        users[userIndex].fullName = newFullName;
        users[userIndex].email = newEmail;
        if (newPassword) {
            users[userIndex].password = newPassword;
        }
        localStorage.setItem('oyunverseUsers', JSON.stringify(users));
    }

    localStorage.setItem('oyunverseCurrentUser', JSON.stringify({
        fullName: newFullName,
        email: newEmail,
        loggedInAt: currentUser.loggedInAt
    }));

    editForm.querySelector('button[type="submit"]').style.display = 'none';
    editSuccess.classList.add('active');

    setTimeout(function(){
        window.location.href = 'account.html';
    }, 1200);
});