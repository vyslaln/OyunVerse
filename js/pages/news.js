const newsTemplate = document.getElementById('news-card-template');
const tournamentGrid = document.querySelector('[data-panel="turnuva"] .news-grid');
const gameGrid = document.querySelector('[data-panel="oyun"] .news-grid');
const campaignGrid = document.querySelector('[data-panel="kampanya"] .news-grid');

function renderNews(newsArray, gridElement, tagLabel, categorySlug){
    newsArray.forEach(function(item) {
        const card = newsTemplate.content.cloneNode(true);

        const link = card.querySelector('a');
        link.href = `news-detail.html?id=${item.id}&cat=${categorySlug}`;

        const img = card.querySelector('img');
        img.src = item.image;
        img.alt = item.imageAlt;

        const title = card.querySelector('h3');
        title.textContent = item.title;

        const excerpt = card.querySelector('p');
        excerpt.textContent = item.excerpt;

        const spans = card.querySelectorAll('span');
        const tag = spans[0];
        const date = spans[1];
        tag.textContent = tagLabel;
        date.textContent = item.date;

        gridElement.appendChild(card);
    });
}

renderNews(tournamentNews, tournamentGrid, "TURNUVA", "turnuva");
renderNews(gameNews, gameGrid, "HABER", "oyun");
renderNews(campaignNews, campaignGrid, "KAMPANYA", "kampanya");

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
        document.querySelector(`.news-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
    });
});