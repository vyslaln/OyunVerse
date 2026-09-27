const currentUser = JSON.parse(localStorage.getItem('oyunverseCurrentUser'));

if (!currentUser) {
    window.location.href = 'login.html';
} else {
    document.getElementById('account-avatar').textContent = currentUser.fullName.charAt(0).toUpperCase();
    document.getElementById('account-name').textContent = currentUser.fullName;
    document.getElementById('account-email').textContent = currentUser.email;

    const subscription = JSON.parse(localStorage.getItem('oyunverseSubscription'));
    if (subscription) {
        const subscriptionBox = document.getElementById('account-subscription-box');
        subscriptionBox.innerHTML = `
            <div class="account-plan-row">
                <span class="account-plan-name">${subscription.planName}</span>
                <span class="account-list-item-value">${subscription.price}</span>
            </div>
            <p class="account-plan-meta">${subscription.billing === 'yearly' ? 'Yıllık' : 'Aylık'} faturalandırma</p>
        `;
    }

    const registrations = JSON.parse(localStorage.getItem('oyunverseRegistrations')) || [];
    const myRegistrations = registrations.filter(function(reg){
        return reg.email === currentUser.email;
    });

    if (myRegistrations.length > 0) {
        const registrationsBox = document.getElementById('account-registrations-box');
        registrationsBox.innerHTML = '';

        const list = document.createElement('div');
        list.className = 'account-list';

        myRegistrations.forEach(function(reg){
            const item = document.createElement('div');
            item.className = 'account-list-item';
            item.innerHTML = `
                <span class="account-list-item-title">${reg.tournamentName}</span>
                <span class="account-list-item-meta">${new Date(reg.registeredAt).toLocaleDateString('tr-TR')}</span>
            `;
            list.appendChild(item);
        });

        registrationsBox.appendChild(list);
    }

    const orders = JSON.parse(localStorage.getItem('oyunverseOrders')) || [];

    if (orders.length > 0) {
        const ordersBox = document.getElementById('account-orders-box');
        ordersBox.innerHTML = '';

        const list = document.createElement('div');
        list.className = 'account-list';

        orders.forEach(function(order){
            const item = document.createElement('div');
            item.className = 'account-list-item';
            item.innerHTML = `
                <span class="account-list-item-title">${order.items.length} ürün</span>
                <span class="account-list-item-meta">${new Date(order.orderedAt).toLocaleDateString('tr-TR')}</span>
                <span class="account-list-item-value">${order.total.toLocaleString('tr-TR')} TL</span>
            `;
            list.appendChild(item);
        });

        ordersBox.appendChild(list);
    }
}

const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', function(){
    localStorage.removeItem('oyunverseCurrentUser');
    window.location.href = 'index.html';
});