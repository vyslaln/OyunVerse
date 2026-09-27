const params = new URLSearchParams(window.location.search);
const newsId = Number(params.get('id'));
const category = params.get('cat');

// URL'deki cat parametresine gore hangi array'e ve hangi etikete bakacagimizi seciyoruz
let newsArray;
let categoryLabel;

if (category === 'turnuva') {
    newsArray = tournamentNews;
    categoryLabel = 'TURNUVA';
} else if (category === 'oyun') {
    newsArray = gameNews;
    categoryLabel = 'HABER';
} else if (category === 'kampanya') {
    newsArray = campaignNews;
    categoryLabel = 'KAMPANYA';
}

const newsItem = newsArray ? newsArray.find(function(item) {
    return item.id === newsId;
}) : undefined;

if (newsItem) {
    document.getElementById('detail-image').src = newsItem.image;
    document.getElementById('detail-image').alt = newsItem.imageAlt;
    document.getElementById('detail-tag').textContent = categoryLabel;
    document.getElementById('detail-title').textContent = newsItem.title;
    document.getElementById('detail-date').textContent = newsItem.date;
    document.getElementById('detail-excerpt').textContent = newsItem.excerpt;

    document.title = `${newsItem.title} | Oyunverse`;
} else {
    document.querySelector('.news-detail-layout').innerHTML =
        '<p>Aradığınız haber bulunamadı.</p>';
}