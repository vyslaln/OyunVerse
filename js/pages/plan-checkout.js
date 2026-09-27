const params = new URLSearchParams(window.location.search);
const planId = Number(params.get('plan'));
const billing = params.get('billing') === 'yearly' ? 'yearly' : 'monthly';

const plan = plans.find(function(item){
    return item.id === planId;
});

const planSummaryName = document.getElementById('plan-summary-name');
const planSummaryTagline = document.getElementById('plan-summary-tagline');
const planSummaryBilling = document.getElementById('plan-summary-billing');
const planSummaryPrice = document.getElementById('plan-summary-price');

if (plan) {
    planSummaryName.textContent = plan.name;
    planSummaryTagline.textContent = plan.tagline;
    planSummaryBilling.textContent = billing === 'yearly' ? 'Yıllık' : 'Aylık';
    planSummaryPrice.textContent = billing === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;

    document.title = `${plan.name} Planı Ödeme | Oyunverse`;
} else {
    document.querySelector('.checkout-layout').innerHTML =
        '<p>Seçilen plan bulunamadı. Lütfen planlar sayfasına dönüp tekrar dene.</p>';
}

const cardNumberInput = document.getElementById('card-number');
cardNumberInput.addEventListener('input', function(){
    let digits = cardNumberInput.value.replace(/\D/g, '').slice(0, 16);
    cardNumberInput.value = digits.replace(/(.{4})/g, '$1 ').trim();
});

const cardExpiryInput = document.getElementById('card-expiry');
cardExpiryInput.addEventListener('input', function(){
    let digits = cardExpiryInput.value.replace(/\D/g, '').slice(0, 4);
    if (digits.length > 2) {
        digits = digits.slice(0, 2) + '/' + digits.slice(2);
    }
    cardExpiryInput.value = digits;
});

const planCheckoutForm = document.getElementById('plan-checkout-form');
const paymentSuccess = document.getElementById('payment-success');

planCheckoutForm.addEventListener('submit', function(event){
    event.preventDefault();

    if (!plan) {
        return;
    }

    localStorage.setItem('oyunverseSubscription', JSON.stringify({
        planId: plan.id,
        planName: plan.name,
        billing: billing,
        price: billing === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice,
        startedAt: new Date().toISOString()
    }));

    planCheckoutForm.reset();
    planCheckoutForm.querySelector('button[type="submit"]').style.display = 'none';
    paymentSuccess.classList.add('active');
});