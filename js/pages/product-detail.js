const params = new URLSearchParams(window.location.search);
const productId = Number(params.get('id'));

const product = products.find(function(item) {
    return item.id === productId;
});

if (product) {
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-image').alt = product.imageAlt;
    document.getElementById('detail-badge').textContent = product.badge;
    document.getElementById('detail-category').textContent = product.categoryLabel;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-brand').textContent = product.brand;
    document.getElementById('detail-price').textContent = product.price;
    document.getElementById('detail-old-price').textContent = product.oldPrice;
    document.getElementById('detail-description').textContent = product.description;

    document.title = `${product.name} | Oyunverse`;
} else {
    document.querySelector('.product-detail-layout').innerHTML =
        '<p>Aradığınız ürün bulunamadı.</p>';
}

// Sepete ekle butonu
const addToCartBtn = document.getElementById('add-to-cart-btn');
const quantityInput = document.getElementById('detail-quantity');
const cartSuccess = document.getElementById('cart-success');
const decreaseBtn = document.getElementById('quantity-decrease');
const increaseBtn = document.getElementById('quantity-increase');

decreaseBtn.addEventListener('click', function(){
    const current = Number(quantityInput.value) || 1;
    if (current > 1) {
        quantityInput.value = current - 1;
    }
});

increaseBtn.addEventListener('click', function(){
    const current = Number(quantityInput.value) || 1;
    quantityInput.value = current + 1;
});

addToCartBtn.addEventListener('click', function(){
    const quantity = Number(quantityInput.value) || 1;

    const cart = JSON.parse(localStorage.getItem('oyunverseCart')) || [];
    cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        addedAt: new Date().toISOString()
    });
    localStorage.setItem('oyunverseCart', JSON.stringify(cart));

    cartSuccess.classList.add('active');
});