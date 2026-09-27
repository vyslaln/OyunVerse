const tournamentTemplate = document.getElementById('tournament-card-template');
const tournamentGrid = document.getElementById('tournament-grid');

tournaments.forEach(function(item) {
    const card = tournamentTemplate.content.cloneNode(true);

    const link = card.querySelector('a');
    link.href = `tournament-detail.html?id=${item.id}`;

    const img = card.querySelector('img');
    img.src = item.image;
    img.alt = item.imageAlt;

    const gameTag = card.querySelector('.tournament-game-tag');
    gameTag.textContent = item.game;

    const name = card.querySelector('.tournament-name');
    name.textContent = item.name;

    const date = card.querySelector('.tournament-date');
    date.textContent = item.date;

    const prize = card.querySelector('.tournament-prize');
    prize.textContent = item.prize;

    const participants = card.querySelector('.tournament-participants');
    participants.textContent = item.participants;

    const detailBtn = card.querySelector('.tournament-detail-btn');
    detailBtn.href = `tournament-detail.html?id=${item.id}`;

    tournamentGrid.appendChild(card);
});