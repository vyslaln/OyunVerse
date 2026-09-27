// Tum veriler localStorage'dan okunuyor, gercek bir sunucu yok
const users = JSON.parse(localStorage.getItem('oyunverseUsers')) || [];
const orders = JSON.parse(localStorage.getItem('oyunverseOrders')) || [];
const registrations = JSON.parse(localStorage.getItem('oyunverseRegistrations')) || [];
const messages = JSON.parse(localStorage.getItem('oyunverseContactMessages')) || [];
const subscription = JSON.parse(localStorage.getItem('oyunverseSubscription'));

// Ust stat kartlari
document.getElementById('stat-users').textContent = users.length;
document.getElementById('stat-orders').textContent = orders.length;

const totalRevenue = orders.reduce(function(sum, order){
    return sum + (order.total || 0);
}, 0);
document.getElementById('stat-revenue').textContent = totalRevenue.toLocaleString('tr-TR') + ' TL';

document.getElementById('stat-subscriptions').textContent = subscription ? 1 : 0;
document.getElementById('stat-registrations').textContent = registrations.length;
document.getElementById('stat-messages').textContent = messages.length;

// Turnuvalara gore kayit dagilimi
if (registrations.length > 0) {
    const counts = {};

    registrations.forEach(function(reg){
        counts[reg.tournamentName] = (counts[reg.tournamentName] || 0) + 1;
    });

    const maxCount = Math.max.apply(null, Object.values(counts));
    const barList = document.getElementById('tournament-bar-list');
    barList.innerHTML = '';

    Object.keys(counts).forEach(function(tournamentName){
        const count = counts[tournamentName];
        const percent = Math.round((count / maxCount) * 100);

        const row = document.createElement('div');
        row.className = 'bar-row';
        row.innerHTML = `
            <div class="bar-row-label">
                <span>${tournamentName}</span>
                <span>${count}</span>
            </div>
            <div class="bar-track">
                <div class="bar-fill" style="width: ${percent}%"></div>
            </div>
        `;
        barList.appendChild(row);
    });
}

// Son kayitli kullanicilar (en yeni once, en fazla 8 tane)
if (users.length > 0) {
    const usersTableBody = document.getElementById('users-table-body');
    usersTableBody.innerHTML = '';

    const recentUsers = users.slice().reverse().slice(0, 8);

    recentUsers.forEach(function(user){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.fullName}</td>
            <td>${user.email}</td>
            <td>${new Date(user.registeredAt).toLocaleDateString('tr-TR')}</td>
        `;
        usersTableBody.appendChild(row);
    });
}

// Son siparisler (en yeni once, en fazla 8 tane)
if (orders.length > 0) {
    const ordersTableBody = document.getElementById('orders-table-body');
    ordersTableBody.innerHTML = '';

    const recentOrders = orders.slice().reverse().slice(0, 8);

    recentOrders.forEach(function(order){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${new Date(order.orderedAt).toLocaleDateString('tr-TR')}</td>
            <td>${order.items.length}</td>
            <td>${order.total.toLocaleString('tr-TR')} TL</td>
        `;
        ordersTableBody.appendChild(row);
    });
}

// Sadece admin hesabi dashboard'a erisebilir
const ADMIN_EMAIL = 'vorbitttt@gmail.com';
const currentUser = JSON.parse(localStorage.getItem('oyunverseCurrentUser'));

if (!currentUser || currentUser.email !== ADMIN_EMAIL) {
    window.location.href = 'index.html';
}