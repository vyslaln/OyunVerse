<div align="center">

<img src="assets/icons/oyunverse-wordmark.svg" alt="Oyunverse" width="280"/>

**Live:** [vyslaln.github.io/OyunVerse](https://vyslaln.github.io/OyunVerse/)

[English](#english) · [Türkçe](#türkçe)

</div>

## Demo

https://github.com/user-attachments/assets/95e2c6ca-9d91-402e-9936-01c011bf34a7

## English

A demo esports and gaming platform: tournaments, gaming news, an equipment shop and cloud gaming subscriptions. Built with plain HTML, CSS and JavaScript, no frameworks.

### Features

- **Home page** with a hero section, news tabs by category and featured games
- **Tournaments**: list, detail page and a registration form
- **News**: three categories (tournaments, games, campaigns) with detail pages
- **Shop**: product list with category filters, product detail page, add to cart
- **Cart and checkout**: quantity controls and a simulated card payment flow
- **Plans**: monthly and yearly subscription cards with their own checkout
- **Sign up, log in and account page**: profile, active plan, order and tournament history, edit account
- **Search** that works on every page (tournaments, news, products, plans)
- **Dashboard** with site statistics, visible only to the admin account
- About and contact pages, including a working contact form

### Built with

- HTML
- CSS with custom properties (design tokens) and a `base / layout / components / pages` folder structure
- Vanilla JavaScript (ES6+)
- `localStorage` for all saved data (users, cart, orders, registrations)

### Run it locally

No build step or install needed.

```bash
git clone https://github.com/vyslaln/OyunVerse.git
cd OyunVerse
```

Open `index.html` with a local server, for example the Live Server extension in VS Code.

### How it works

There is no backend. Everything a user does (signing up, adding to cart, ordering, registering for a tournament) is saved in the browser's `localStorage`, so it only exists in the browser you used. The dashboard checks the logged-in email against an `ADMIN_EMAIL` constant in `js/pages/dashboard.js`. That check runs in the browser, so it is only for the demo and is not real security.

### Known limitations

- Orders are not linked to the user who placed them.
- Passwords are stored as plain text (fine for a learning project, never for a real site).
- There is no real payment system; card details are not sent anywhere.

### What I'd add next

- Link orders to user accounts
- A real backend and API
- Password hashing

## Türkçe

Bir e-spor ve oyun platformu demosu: turnuvalar, oyun haberleri, ekipman mağazası ve bulut oyun abonelikleri. Framework kullanmadan, saf HTML, CSS ve JavaScript ile yapıldı.

### Özellikler

- **Ana sayfa:** hero bölümü, kategorilere ayrılmış haber sekmeleri ve öne çıkan oyunlar
- **Turnuvalar:** liste, detay sayfası ve kayıt formu
- **Haberler:** üç kategori (turnuva, oyun, kampanya) ve detay sayfaları
- **Mağaza:** kategori filtreli ürün listesi, ürün detay sayfası, sepete ekleme
- **Sepet ve ödeme:** adet kontrolü ve simüle edilmiş kart ödeme akışı
- **Planlar:** aylık ve yıllık abonelik kartları, ayrı ödeme sayfası
- **Kayıt, giriş ve hesabım:** profil, aktif plan, sipariş ve turnuva geçmişi, hesap düzenleme
- **Arama:** her sayfada çalışır (turnuva, haber, ürün, plan)
- **Dashboard:** site istatistikleri, sadece admin hesabına açık
- Hakkımızda ve iletişim sayfaları, çalışan bir iletişim formuyla

### Kullanılan teknolojiler

- HTML
- CSS: custom properties (design token) ve `base / layout / components / pages` klasör yapısı
- Saf JavaScript (ES6+)
- Tüm veriler için `localStorage` (kullanıcılar, sepet, siparişler, kayıtlar)

### Yerelde çalıştırma

Build ya da kurulum gerekmez.

```bash
git clone https://github.com/vyslaln/OyunVerse.git
cd OyunVerse
```

`index.html`'i bir yerel sunucuyla aç, örneğin VS Code'daki Live Server eklentisiyle.

### Nasıl çalışıyor?

Backend yok. Kullanıcının yaptığı her şey (kayıt, sepete ekleme, sipariş, turnuva kaydı) tarayıcının `localStorage`'ında saklanır, yani sadece kullanılan tarayıcıda durur. Dashboard, giriş yapan e-postayı `js/pages/dashboard.js` içindeki `ADMIN_EMAIL` sabitiyle karşılaştırır. Bu kontrol tarayıcıda çalıştığı için sadece demo amaçlıdır, gerçek bir güvenlik önlemi değildir.

### Bilinen sınırlamalar

- Siparişler, siparişi veren kullanıcıya bağlı değil.
- Şifreler düz metin olarak saklanıyor (öğrenme projesi için kabul edilebilir, gerçek bir sitede asla).
- Gerçek bir ödeme altyapısı yok; kart bilgileri hiçbir yere gönderilmiyor.

### Sırada ne var?

- Siparişleri kullanıcı hesaplarına bağlamak
- Gerçek bir backend ve API
- Şifreleri hash'lemek
