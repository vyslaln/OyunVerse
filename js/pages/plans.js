const planTemplate = document.getElementById('plan-card-template');
const plansGrid = document.getElementById('plans-grid');

let currentBilling = 'monthly';

function renderPlans(){
    plansGrid.innerHTML = '';

    plans.forEach(function(item){
        const card = planTemplate.content.cloneNode(true);

        const cardEl = card.querySelector('.plan-card');
        if (item.highlighted) {
            cardEl.classList.add('highlighted');
        }

        const badge = card.querySelector('.plan-badge');
        badge.textContent = item.badge;

        const name = card.querySelector('.plan-name');
        name.textContent = item.name;

        const tagline = card.querySelector('.plan-tagline');
        tagline.textContent = item.tagline;

        const price = card.querySelector('.plan-price');
        const period = card.querySelector('.plan-period');
        if (currentBilling === 'monthly') {
            price.textContent = item.monthlyPrice;
            period.textContent = '/ ay';
        } else {
            price.textContent = item.yearlyPrice;
            period.textContent = '/ yıl';
        }

        const featuresList = card.querySelector('.plan-features');
        item.features.forEach(function(feature){
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        const selectBtn = card.querySelector('.plan-select-btn');
        selectBtn.addEventListener('click', function(){
            window.location.href = `plan-checkout.html?plan=${item.id}&billing=${currentBilling}`;
        });

        plansGrid.appendChild(card);
    });
}

renderPlans();

const billingButtons = document.querySelectorAll('.billing-btn');

billingButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
        billingButtons.forEach(function(b){
            b.classList.remove('active');
        });
        btn.classList.add('active');

        currentBilling = btn.dataset.billing;
        renderPlans();
    });
});