const productTemplate = document.getElementById('product-card-template');
const productGrid = document.getElementById('product-grid');

function renderProducts(productArray){
    productGrid.innerHTML = '';

    productArray.forEach(function(item){
        const card = productTemplate.content.cloneNode(true);

        const link = card.querySelector('a');
        link.href = `product-detail.html?id=${item.id}`;

        const img = card.querySelector('img');
        img.src = item.image;
        img.alt = item.imageAlt;

        const badge = card.querySelector('.product-badge');
        badge.textContent = item.badge;

        const categoryTag = card.querySelector('.product-category-tag');
        categoryTag.textContent = item.categoryLabel;

        const name = card.querySelector('.product-name');
        name.textContent = item.name;

        const price = card.querySelector('.product-price');
        price.textContent = item.price;

        const oldPrice = card.querySelector('.product-old-price');
        oldPrice.textContent = item.oldPrice;

        const addBtn = card.querySelector('.product-add-btn');
        addBtn.addEventListener('click', function(){
            addToCart(item);
        });

        productGrid.appendChild(card);
    });
}

function addToCart(item){
    const cart = JSON.parse(localStorage.getItem('oyunverseCart')) || [];
    cart.push({
        productId: item.id,
        name: item.name,
        price: item.price,
        addedAt: new Date().toISOString()
    });
    localStorage.setItem('oyunverseCart', JSON.stringify(cart));
}

renderProducts(products);

const filterButtons = document.querySelectorAll('.shop-tab-btn');

filterButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
        filterButtons.forEach(function(b){
            b.classList.remove('active');
        });
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        if (filter === 'tumu') {
            renderProducts(products);
        } else {
            const filtered = products.filter(function(item){
                return item.category === filter;
            });
            renderProducts(filtered);
        }
    });
});