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

// Arama kutusu - tum sayfalarda calisir, HTML/CSS'i kendi kendine olusturur
(function(){
    const style = document.createElement('style');
    style.textContent = `
        .search-overlay{ position: fixed; inset: 0; background-color: rgba(0,0,0,0.6); display: none; align-items: flex-start; justify-content: center; padding-top: 100px; z-index: 999; }
        .search-overlay.active{ display: flex; }
        .search-overlay-box{ background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--spacing-sm); width: min(500px, 90%); display: flex; align-items: center; gap: var(--spacing-xs); }
        .search-overlay-box input{ flex: 1; background: none; border: none; color: var(--color-text); font-family: var(--font-body); font-size: 0.95rem; padding: 8px; }
        .search-overlay-box input:focus{ outline: none; }
        .search-overlay-box button{ background: none; border: none; color: var(--color-text-muted); font-size: 1.1rem; cursor: pointer; padding: 6px; }
        .search-overlay-box button:hover{ color: var(--color-accent-cyan); }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.className = 'search-overlay';
    overlay.id = 'search-overlay';
    overlay.innerHTML = `
        <div class="search-overlay-box">
            <input type="text" id="search-overlay-input" placeholder="Turnuva, haber, ürün veya plan ara...">
            <button type="button" id="search-overlay-submit"><i class="bi bi-search"></i></button>
            <button type="button" id="search-overlay-close"><i class="bi bi-x-lg"></i></button>
        </div>
    `;
    document.body.appendChild(overlay);

    const searchInput = document.getElementById('search-overlay-input');

    function runSearch(){
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    }

    const searchToggleBtn = document.querySelector('[aria-label="Search"]');
    if (searchToggleBtn) {
        searchToggleBtn.addEventListener('click', function(){
            overlay.classList.add('active');
            searchInput.focus();
        });
    }

    document.getElementById('search-overlay-close').addEventListener('click', function(){
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function(event){
        if (event.target === overlay) {
            overlay.classList.remove('active');
        }
    });

    document.getElementById('search-overlay-submit').addEventListener('click', runSearch);

    searchInput.addEventListener('keydown', function(event){
        if (event.key === 'Enter') runSearch();
        if (event.key === 'Escape') overlay.classList.remove('active');
    });
})();