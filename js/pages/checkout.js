function parsePrice(priceText){
    return Number(priceText.replace(/[^\d]/g, '')) || 0;
}

function formatPrice(amount){
    return amount.toLocaleString('tr-TR') + ' TL';
}

const orderList = document.getElementById('checkout-order-list');
const checkoutTotal = document.getElementById('checkout-total');

const cart = JSON.parse(localStorage.getItem('oyunverseCart')) || [];
let total = 0;

if (cart.length === 0) {
    orderList.innerHTML = '<p>Sepetin boş, ödeme yapılacak bir ürün yok.</p>';
} else {
    cart.forEach(function(item){
        const quantity = item.quantity || 1;
        const unitPrice = parsePrice(item.price);
        const lineTotal = unitPrice * quantity;
        total += lineTotal;

        const row = document.createElement('div');
        row.className = 'checkout-order-row';
        row.innerHTML = `<span>${item.name} x${quantity}</span><span>${formatPrice(lineTotal)}</span>`;
        orderList.appendChild(row);
    });
}

checkoutTotal.textContent = formatPrice(total);

// Kart numarasi yazarken otomatik bosluk ekleme
const cardNumberInput = document.getElementById('card-number');
cardNumberInput.addEventListener('input', function(){
    let digits = cardNumberInput.value.replace(/\D/g, '').slice(0, 16);
    cardNumberInput.value = digits.replace(/(.{4})/g, '$1 ').trim();
});

// Son kullanma tarihi yazarken otomatik "/" ekleme
const cardExpiryInput = document.getElementById('card-expiry');
cardExpiryInput.addEventListener('input', function(){
    let digits = cardExpiryInput.value.replace(/\D/g, '').slice(0, 4);
    if (digits.length > 2) {
        digits = digits.slice(0, 2) + '/' + digits.slice(2);
    }
    cardExpiryInput.value = digits;
});

const checkoutForm = document.getElementById('checkout-form');
const paymentSuccess = document.getElementById('payment-success');

checkoutForm.addEventListener('submit', function(event){
    event.preventDefault();

    if (cart.length === 0) {
        return;
    }

    // Siparisi kaydet, sepeti bosalt
    const orders = JSON.parse(localStorage.getItem('oyunverseOrders')) || [];
    orders.push({
        items: cart,
        total: total,
        orderedAt: new Date().toISOString()
    });
    localStorage.setItem('oyunverseOrders', JSON.stringify(orders));
    localStorage.removeItem('oyunverseCart');

    checkoutForm.reset();
    checkoutForm.querySelector('button[type="submit"]').style.display = 'none';
    paymentSuccess.classList.add('active');
});