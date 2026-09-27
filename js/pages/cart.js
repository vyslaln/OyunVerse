const cartItemTemplate = document.getElementById('cart-item-template');
const cartItemsContainer = document.getElementById('cart-items');
const cartLayout = document.querySelector('.cart-layout');
const cartEmptyMessage = document.getElementById('cart-empty');
const summarySubtotal = document.getElementById('summary-subtotal');
const summaryTotal = document.getElementById('summary-total');
const checkoutBtn = document.getElementById('checkout-btn');

function parsePrice(priceText){
    return Number(priceText.replace(/[^\d]/g, '')) || 0;
}

function formatPrice(amount){
    return amount.toLocaleString('tr-TR') + ' TL';
}

function getCart(){
    return JSON.parse(localStorage.getItem('oyunverseCart')) || [];
}

function saveCart(cart){
    localStorage.setItem('oyunverseCart', JSON.stringify(cart));
}

function renderCart(){
    const cart = getCart();
    cartItemsContainer.innerHTML = '';
    cartItemsContainer.appendChild(cartItemTemplate);

    if (cart.length === 0) {
        cartLayout.classList.add('hidden');
        cartEmptyMessage.classList.add('active');
        return;
    }

    cartLayout.classList.remove('hidden');
    cartEmptyMessage.classList.remove('active');

    let total = 0;

    cart.forEach(function(cartItem, index){
        const product = products.find(function(p){
            return p.id === cartItem.productId;
        });

        const row = cartItemTemplate.content.cloneNode(true);

        const img = row.querySelector('img');
        img.src = product ? product.image : '';
        img.alt = product ? product.imageAlt : cartItem.name;

        const name = row.querySelector('.cart-item-name');
        name.textContent = cartItem.name;

        const priceEl = row.querySelector('.cart-item-price');
        priceEl.textContent = cartItem.price;

        const qtyValue = row.querySelector('.cart-item-qty-value');
        qtyValue.textContent = cartItem.quantity;

        const unitPrice = parsePrice(cartItem.price);
        const lineSubtotal = unitPrice * cartItem.quantity;
        total += lineSubtotal;

        const subtotalEl = row.querySelector('.cart-item-subtotal');
        subtotalEl.textContent = formatPrice(lineSubtotal);

        const decreaseBtn = row.querySelector('.cart-decrease');
        decreaseBtn.addEventListener('click', function(){
            const currentCart = getCart();
            if (currentCart[index].quantity > 1) {
                currentCart[index].quantity -= 1;
                saveCart(currentCart);
                renderCart();
            }
        });

        const increaseBtn = row.querySelector('.cart-increase');
        increaseBtn.addEventListener('click', function(){
            const currentCart = getCart();
            currentCart[index].quantity += 1;
            saveCart(currentCart);
            renderCart();
        });

        const removeBtn = row.querySelector('.cart-remove-btn');
        removeBtn.addEventListener('click', function(){
            const currentCart = getCart();
            currentCart.splice(index, 1);
            saveCart(currentCart);
            renderCart();
        });

        cartItemsContainer.appendChild(row);
    });

    summarySubtotal.textContent = formatPrice(total);
    summaryTotal.textContent = formatPrice(total);
}

renderCart();

checkoutBtn.addEventListener('click', function(){
    const cart = getCart();
    if (cart.length > 0) {
        window.location.href = 'checkout.html';
    }
});