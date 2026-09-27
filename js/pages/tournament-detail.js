const params = new URLSearchParams(window.location.search);
const tournamentId = Number(params.get('id'));

const tournament = tournaments.find(function(item) {
    return item.id === tournamentId;
});

if (tournament) {
    document.getElementById('detail-image').src = tournament.image;
    document.getElementById('detail-image').alt = tournament.imageAlt;
    document.getElementById('detail-game').textContent = tournament.game;
    document.getElementById('detail-name').textContent = tournament.name;
    document.getElementById('detail-date').textContent = tournament.date;
    document.getElementById('detail-prize').textContent = tournament.prize;
    document.getElementById('detail-participants').textContent = tournament.participants;
    document.getElementById('detail-description').textContent = tournament.description;

    document.title = `${tournament.name} | Oyunverse`;
} else {
    document.querySelector('.tournament-detail-layout').innerHTML =
        '<p>Aradığınız turnuva bulunamadı.</p>';
}

// Kayıt formu (modal) mantığı
const openModalBtn = document.getElementById('open-register-modal');
const closeModalBtn = document.getElementById('close-register-modal');
const modalOverlay = document.getElementById('register-modal-overlay');
const modalTournamentName = document.getElementById('modal-tournament-name');
const registerForm = document.getElementById('register-form');
const registerSuccess = document.getElementById('register-success');

openModalBtn.addEventListener('click', function(){
    modalTournamentName.textContent = tournament ? tournament.name : '';
    modalOverlay.classList.add('active');
});

closeModalBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('active');
});

// arka plana (kutunun disina) tiklaninca da modal kapansin
modalOverlay.addEventListener('click', function(event){
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

registerForm.addEventListener('submit', function(event){
    event.preventDefault();

    const fullName = document.getElementById('register-fullname').value;
    const email = document.getElementById('register-email').value;
    const team = document.getElementById('register-team').value;

    const registration = {
        tournamentId: tournament.id,
        tournamentName: tournament.name,
        fullName: fullName,
        email: email,
        team: team,
        registeredAt: new Date().toISOString()
    };

    // localStorage'da zaten kayit varsa oku, yoksa bos bir dizi ile basla
    const existing = JSON.parse(localStorage.getItem('oyunverseRegistrations')) || [];
    existing.push(registration);
    localStorage.setItem('oyunverseRegistrations', JSON.stringify(existing));

    registerForm.reset();
    registerForm.style.display = 'none';
    registerSuccess.classList.add('active');
});