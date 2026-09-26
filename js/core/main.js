//Burada hamburger menünün tanımlamasını yapacağız
const hamburgerMenuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

hamburgerMenuToggle.addEventListener('click', function(){
    navbar.classList.toggle('open');
});