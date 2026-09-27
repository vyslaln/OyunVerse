//Burada hamburger menünün tanımlamasını yapacağız
const hamburgerMenuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

hamburgerMenuToggle.addEventListener('click', function(){
    navbar.classList.toggle('open');
});

// Giris durumuna gore navbar'daki "Giris Yap" / "Hesabim" alanini guncelle
const authNavLink = document.querySelector('.btn-signin');

if (authNavLink) {
    const loggedInUser = JSON.parse(localStorage.getItem('oyunverseCurrentUser'));

    if (loggedInUser) {
        authNavLink.textContent = loggedInUser.fullName.split(' ')[0];
        authNavLink.setAttribute('href', 'account.html');
    }
}