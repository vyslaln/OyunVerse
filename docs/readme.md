<div align="center">

<img src="assets/icons/oyunverse-wordmark.svg" alt="Oyunverse" width="280"/>

### Compete. Connect. Conquer.

Bir e-spor ve gaming platformu demo projesi — turnuvalar, oyun haberleri, ekipman mağazası ve cloud gaming abonelikleri.
A demo esports & gaming platform — tournaments, gaming news, an equipment shop, and cloud gaming subscriptions.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/Framework-None%20(Vanilla)-8A2BE2)
![Status](https://img.shields.io/badge/Status-Demo%20%2F%20Learning%20Project-lightgrey)
![License](https://img.shields.io/badge/License-MIT-green)

**[🇹🇷 Türkçe](#-türkçe)** • **[🇬🇧 English](#-english)**

</div>

---

## 🎥 Demo

<div align="center">

<video src="docs/demo.mp4" controls width="800">
  Tarayıcın video etiketini desteklemiyor. / Your browser does not support the video tag.
</video>

</div>

> Not / Note: Video GitHub üzerinde `docs/demo.mp4` dosyası repoya push edildiğinde otomatik oynatılabilir hâle gelir. / The video above renders automatically on GitHub once `docs/demo.mp4` is committed to the repository.

---

# 🇹🇷 Türkçe

## İçindekiler
- [🇹🇷 Türkçe](#-türkçe)
  - [İçindekiler](#i̇çindekiler)
  - [Proje Hakkında](#proje-hakkında)
  - [Özellikler](#özellikler)
  - [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
  - [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
  - [Proje Yapısı](#proje-yapısı)
  - [Veri Modeli (localStorage)](#veri-modeli-localstorage)
  - [Admin / Dashboard Erişimi](#admin--dashboard-erişimi)
  - [Bilinen Sınırlamalar](#bilinen-sınırlamalar)
  - [Yol Haritası](#yol-haritası)
  - [Lisans](#lisans)
  - [İletişim](#i̇letişim)
- [🇬🇧 English](#-english)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Data Model (localStorage)](#data-model-localstorage)
  - [Admin / Dashboard Access](#admin--dashboard-access)
  - [Known Limitations](#known-limitations)
  - [Roadmap](#roadmap)
  - [License](#license)
  - [Contact](#contact)

## Proje Hakkında
Oyunverse, gerçek bir backend/sunucu içermeyen, tamamen istemci taraflı (client-side) çalışan bir e-spor ve gaming platformu demosudur. Tüm veri kalıcılığı tarayıcının `localStorage`'ı üzerinden simüle edilir. Kullanıcı kaydı, sepet, siparişler, turnuva kayıtları, abonelikler ve iletişim mesajları yalnızca kullanıldığı tarayıcıda saklanır. Proje, modern front-end geliştirme pratiklerini (component bazlı CSS mimarisi, template tabanlı dinamik render, URL parametreleriyle sayfa geçişi, form doğrulama) sergilemek amacıyla geliştirilmiştir.

## Özellikler
| Modül | Açıklama |
|---|---|
| **Ana Sayfa** | Hero bölümü, kategorilere ayrılmış haber sekmeleri, öne çıkan oyunlar |
| **Turnuvalar** | Turnuva listesi, detay sayfası, kayıt formu |
| **Haberler** | Üç kategoride (Turnuva/Oyun/Kampanya) haber listesi ve detay sayfası |
| **Mağaza** | Kategori filtreli ürün listesi, ürün detay sayfası, sepete ekleme |
| **Sepet & Ödeme** | Adet yönetimi, simüle edilmiş kart ödeme akışı |
| **Planlar** | Aylık/yıllık abonelik kartları, plan ödeme sayfası |
| **Kurumsal Sayfalar** | Hakkımızda, İletişim (form gönderimi dahil) |
| **Kimlik Doğrulama** | Kayıt, giriş, oturum yönetimi |
| **Hesabım** | Profil, aktif plan, sipariş/turnuva geçmişi, hesap düzenleme |
| **Arama** | Tüm sayfalarda çalışan global arama (turnuva/haber/ürün/plan) |
| **Dashboard** | Admin-only site istatistikleri paneli |

## Kullanılan Teknolojiler
- **HTML5** — semantik yapı
- **CSS3** — custom properties (design token) tabanlı, component/page ayrımlı mimari
- **Vanilla JavaScript (ES6+)** — framework/kütüphane bağımlılığı yok
- **Google Fonts** (Orbitron, Inter), **Bootstrap Icons** (CDN)
- **localStorage** — veri kalıcılık katmanı

## Kurulum ve Çalıştırma
Build aracı veya bağımlılık kurulumu gerektirmez.

```bash
git clone <repo-url>
cd OyunVerse
```

Ardından `index.html`'i bir local server üzerinden aç (tarayıcı güvenlik politikaları nedeniyle doğrudan çift tıklamak yerine önerilir):
- VS Code kullanıyorsan **Live Server** eklentisiyle "Go Live"
- veya `python -m http.server` gibi basit bir local server

## Proje Yapısı

```
OyunVerse/
  index.html
  tournaments.html
  tournament-detail.html
  news.html
  news-detail.html
  shop.html
  product-detail.html
  cart.html
  checkout.html
  plans.html
  plan-checkout.html
  about.html
  contact.html
  login.html
  register.html
  account.html
  account-edit.html
  dashboard.html
  search.html

  docs/
    demo.mp4

  assets/
    icons/

  css/
    base/
      _reset.css
      _variables.css
    layout/
      layout.css
    components/
      navbar.css
      buttons.css
      footer.css
      news-card.css
      product-card.css
      tournament-card.css
      plan-card.css
      payment-form.css
    pages/
      (her sayfaya ozel stil dosyalari)
    style.css
    responsive.css

  js/
    core/
      main.js
    data/
      tournamentsData.js
      newsData.js
      productsData.js
      plansData.js
    pages/
      (her sayfaya ozel js dosyalari)
```

## Veri Modeli (localStorage)
| Anahtar | İçerik |
|---|---|
| `oyunverseCart` | `{productId, name, price, quantity, addedAt}[]` |
| `oyunverseOrders` | `{items, total, orderedAt}[]` |
| `oyunverseSubscription` | `{planId, planName, billing, price, startedAt}` |
| `oyunverseRegistrations` | `{tournamentId, tournamentName, fullName, email, team, registeredAt}[]` |
| `oyunverseContactMessages` | `{name, email, subject, message, sentAt}[]` |
| `oyunverseUsers` | `{fullName, email, password, registeredAt}[]` |
| `oyunverseCurrentUser` | `{fullName, email, loggedInAt}` |

## Admin / Dashboard Erişimi
`dashboard.html`, yalnızca `js/pages/dashboard.js` içinde tanımlı `ADMIN_EMAIL` sabitine karşılık gelen hesapla giriş yapıldığında erişilebilir. Bu kontrol tamamen istemci taraflıdır ve gerçek bir güvenlik önlemi teşkil etmez; yalnızca demo amaçlıdır.

## Bilinen Sınırlamalar
- Sipariş kayıtları (`oyunverseOrders`) hangi kullanıcıya ait olduğunu tutmuyor.
- Şifreler düz metin olarak saklanıyor (yalnızca öğrenme amaçlı, üretime uygun değil).
- Gerçek bir ödeme altyapısı bulunmuyor; kart bilgileri hiçbir yere iletilmiyor.

## Yol Haritası
- [ ] Sipariş kayıtlarını kullanıcı hesabına bağlama
- [ ] Gerçek bir backend/API entegrasyonu
- [ ] Şifreleme (hashing) katmanı

## Lisans
Bu proje eğitim/öğrenme amaçlı geliştirilmiştir. Lisans türünü kendi tercihine göre belirleyebilirsin (örn. MIT).

## İletişim
**Yazar:** Veysel Alan
**E-posta:** aveysel836@gmail.com

---

# 🇬🇧 English

## Table of Contents
- [🇹🇷 Türkçe](#-türkçe)
  - [İçindekiler](#i̇çindekiler)
  - [Proje Hakkında](#proje-hakkında)
  - [Özellikler](#özellikler)
  - [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
  - [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
  - [Proje Yapısı](#proje-yapısı)
  - [Veri Modeli (localStorage)](#veri-modeli-localstorage)
  - [Admin / Dashboard Erişimi](#admin--dashboard-erişimi)
  - [Bilinen Sınırlamalar](#bilinen-sınırlamalar)
  - [Yol Haritası](#yol-haritası)
  - [Lisans](#lisans)
  - [İletişim](#i̇letişim)
- [🇬🇧 English](#-english)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Data Model (localStorage)](#data-model-localstorage)
  - [Admin / Dashboard Access](#admin--dashboard-access)
  - [Known Limitations](#known-limitations)
  - [Roadmap](#roadmap)
  - [License](#license)
  - [Contact](#contact)

## About the Project
Oyunverse is a fully client-side esports & gaming platform demo with no real backend or server. All data persistence is simulated through the browser's `localStorage`. User registration, cart, orders, tournament registrations, subscriptions, and contact messages are stored only in the browser being used. The project was built to demonstrate modern front-end practices: component-based CSS architecture, template-driven dynamic rendering, URL-parameter-based navigation, and form validation.

## Features
| Module | Description |
|---|---|
| **Home** | Hero section, categorized news tabs, featured games |
| **Tournaments** | Tournament list, detail page, registration form |
| **News** | News list across three categories (Tournament/Game/Campaign) with detail page |
| **Shop** | Category-filtered product list, product detail page, add-to-cart |
| **Cart & Checkout** | Quantity management, simulated card-payment flow |
| **Plans** | Monthly/yearly subscription cards, plan checkout page |
| **Corporate Pages** | About, Contact (with form submission) |
| **Authentication** | Register, login, session management |
| **My Account** | Profile, active plan, order/tournament history, account editing |
| **Search** | Global search working across every page (tournaments/news/products/plans) |
| **Dashboard** | Admin-only site-wide statistics panel |

## Tech Stack
- **HTML5** — semantic structure
- **CSS3** — custom-properties (design tokens), component/page-separated architecture
- **Vanilla JavaScript (ES6+)** — zero framework/library dependencies
- **Google Fonts** (Orbitron, Inter), **Bootstrap Icons** (CDN)
- **localStorage** — data persistence layer

## Getting Started
No build tools or dependency installation required.

```bash
git clone <repo-url>
cd OyunVerse
```

Then open `index.html` through a local server (recommended over double-clicking the file directly, due to browser security policies):
- VS Code's **Live Server** extension ("Go Live")
- or a simple local server such as `python -m http.server`

## Project Structure
*(identical to the Turkish section above — see [Proje Yapısı](#proje-yapısı))*

## Data Model (localStorage)
| Key | Contents |
|---|---|
| `oyunverseCart` | `{productId, name, price, quantity, addedAt}[]` |
| `oyunverseOrders` | `{items, total, orderedAt}[]` |
| `oyunverseSubscription` | `{planId, planName, billing, price, startedAt}` |
| `oyunverseRegistrations` | `{tournamentId, tournamentName, fullName, email, team, registeredAt}[]` |
| `oyunverseContactMessages` | `{name, email, subject, message, sentAt}[]` |
| `oyunverseUsers` | `{fullName, email, password, registeredAt}[]` |
| `oyunverseCurrentUser` | `{fullName, email, loggedInAt}` |

## Admin / Dashboard Access
`dashboard.html` is only accessible when logged in with the account matching the `ADMIN_EMAIL` constant defined in `js/pages/dashboard.js`. This check is entirely client-side and does not constitute real security — it exists purely for demo purposes.

## Known Limitations
- Order records (`oyunverseOrders`) don't track which user placed them.
- Passwords are stored in plaintext (for learning purposes only — not production-ready).
- There is no real payment infrastructure; card details are never transmitted anywhere.

## Roadmap
- [ ] Tie order records to user accounts
- [ ] Real backend/API integration
- [ ] Password hashing layer

## License
This project was built for educational/learning purposes. Choose a license that fits your needs (e.g., MIT).

## Contact
**Author:** Veysel Alan
**Email:** aveysel836@gmail.com
