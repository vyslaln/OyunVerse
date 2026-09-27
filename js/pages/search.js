const params = new URLSearchParams(window.location.search);
const query = (params.get('q') || '').trim().toLowerCase();

document.getElementById('search-query').innerHTML = query
    ? `<span>"${query}"</span> için arama sonuçları`
    : 'Bir arama terimi girmedin.';

const resultsBox = document.getElementById('search-results');
const emptyMessage = document.getElementById('search-empty');

function matchesQuery(fields) {
    return fields
        .filter(Boolean)
        .some(function(field){
            return field.toString().toLowerCase().includes(query);
        });
}

function renderGroup(title, items, buildItemHtml) {
    if (items.length === 0) return;

    emptyMessage.remove();

    const group = document.createElement('div');
    group.className = 'search-group';

    const list = document.createElement('div');
    list.className = 'search-result-list';

    items.forEach(function(item){
        list.innerHTML += buildItemHtml(item);
    });

    group.innerHTML = `<h3>${title}</h3>`;
    group.appendChild(list);
    resultsBox.appendChild(group);
}

if (query) {
    // Turnuvalar
    if (typeof tournaments !== 'undefined') {
        const matchedTournaments = tournaments.filter(function(item){
            return matchesQuery([item.name, item.title, item.game]);
        });

        renderGroup('Turnuvalar', matchedTournaments, function(item){
            return `
                <a href="tournament-detail.html?id=${item.id}" class="search-result-item">
                    <img src="${item.image}" alt="${item.imageAlt || ''}" class="search-result-image">
                    <div>
                        <div class="search-result-title">${item.name || item.title}</div>
                        <div class="search-result-meta">${item.game || ''}</div>
                    </div>
                </a>
            `;
        });
    }

    // Haberler (3 ayri diziyi tek tek tariyoruz, her biri kendi kategori slug'ini biliyor)
    if (typeof tournamentNews !== 'undefined') {
        const newsGroups = [
            { array: tournamentNews, slug: 'turnuva' },
            { array: gameNews, slug: 'oyun' },
            { array: campaignNews, slug: 'kampanya' }
        ];

        let matchedNews = [];
        newsGroups.forEach(function(group){
            const matches = group.array.filter(function(item){
                return matchesQuery([item.title, item.excerpt]);
            });
            matches.forEach(function(item){
                matchedNews.push({ item: item, slug: group.slug });
            });
        });

        renderGroup('Haberler', matchedNews, function(entry){
            const item = entry.item;
            return `
                <a href="news-detail.html?id=${item.id}&cat=${entry.slug}" class="search-result-item">
                    <img src="${item.image}" alt="${item.imageAlt || ''}" class="search-result-image">
                    <div>
                        <div class="search-result-title">${item.title}</div>
                        <div class="search-result-meta">${item.date || ''}</div>
                    </div>
                </a>
            `;
        });
    }

    // Magaza urunleri
    if (typeof products !== 'undefined') {
        const matchedProducts = products.filter(function(item){
            return matchesQuery([item.name, item.brand, item.categoryLabel]);
        });

        renderGroup('Mağaza', matchedProducts, function(item){
            return `
                <a href="product-detail.html?id=${item.id}" class="search-result-item">
                    <img src="${item.image}" alt="${item.imageAlt || ''}" class="search-result-image">
                    <div>
                        <div class="search-result-title">${item.name}</div>
                        <div class="search-result-meta">${item.categoryLabel || ''}</div>
                    </div>
                </a>
            `;
        });
    }

    // Planlar
    if (typeof plans !== 'undefined') {
        const matchedPlans = plans.filter(function(item){
            return matchesQuery([item.name, item.tagline]);
        });

        renderGroup('Planlar', matchedPlans, function(item){
            return `
                <a href="plans.html" class="search-result-item">
                    <div>
                        <div class="search-result-title">${item.name}</div>
                        <div class="search-result-meta">${item.tagline || ''}</div>
                    </div>
                </a>
            `;
        });
    }
}