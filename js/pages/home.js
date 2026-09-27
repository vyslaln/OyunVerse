const newsTemplate = document.getElementById('news-card-template');
const tournament = document.querySelector('[data-panel="turnuva"] .news-card-track');
const games = document.querySelector('[data-panel="oyun"] .news-card-track');
const campaign = document.querySelector('[data-panel="kampanya"] .news-card-track');

function renderNews(newsArray, trackElement,tagLabel){
    newsArray.forEach(function(item) {
        const card = newsTemplate.content.cloneNode(true);

        const link = card.querySelector('a');
        link.href = `news-detail.html?id=${item.id}`;

        const title = card.querySelector('h3');
        title.textContent = item.title;

        const img = card.querySelector('img');
        img.src = item.image;
        img.alt = item.imageAlt;

        const excerpt = card.querySelector('p');
        excerpt.textContent = item.excerpt;

        const spans = card.querySelectorAll('span');
        const tag = spans[0];   // ilk span - etiket
        const date = spans[1];  // ikinci span - tarih
        tag.textContent = tagLabel;
        date.textContent = item.date;

        trackElement.appendChild(card);
    });
}

renderNews(tournamentNews, tournament, "TURNUVA");
renderNews(gameNews, games, "HABER");
renderNews(campaignNews, campaign, "KAMPANYA");

const buttons = document.querySelectorAll('.news-btn');
const panels = document.querySelectorAll('.news-panel');

buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
        buttons.forEach(function(b){
            b.classList.remove('active');
        });
        btn.classList.add('active');

        panels.forEach(function(p){
            p.classList.remove('active');
        });
        // burada "doğru paneli" bulup active eklememiz lazım - bir sonraki adım bu
        document.querySelector(`.news-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
    });
});

panels.forEach(function(panel){
    const track = panel.querySelector('.news-card-track');
    const leftArrow = panel.querySelector('.left-arrow');
    const rightArrow = panel.querySelector('.right-arrow');

    leftArrow.addEventListener('click', function(){
        track.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', function(){
    track.scrollBy({ left: 300, behavior: 'smooth' });
    });
});
