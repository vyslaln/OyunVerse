# Index.html — Head Notları

## Meta Etiketleri

- `charset="UTF-8"` → karakter kodlaması, Türkçe karakterlerin doğru görünmesi için gerekli
- `viewport` → mobil uyum için zorunlu. `initial-scale=1.0` yazımını dikkatli yaz, `initial-sclae` gibi bir yazım hatası attribute'u geçersiz kılar ve mobilde responsive davranış çalışmaz

## SEO Etiketleri

- `description` → arama motorunda sayfanın altında çıkan özet metin
- `keywords` → artık çoğu arama motoru dikkate almıyor, öğrenme amaçlı tutuluyor
- `robots` → arama motorlarının siteyi taraması gerekip gerekmediğini belirtir (`index,follow` = tara ve linkleri takip et)

## Open Graph Etiketleri

Linki bir sosyal medya/mesajlaşma uygulamasında (WhatsApp, Discord, Twitter) paylaşınca çıkan önizleme kartını belirler.

- `og:title`, `og:description`, `og:image`, `og:type`, `og:locale`
- Proje canlıya alınmayacağı için pratikte hiç tetiklenmeyecek, ama gerçek bir sitede standart olarak bulunur

## Favicon

- `type="image/svg+xml"` → sekme ikonu olarak SVG kullanıyoruz (oyunverse-icon.svg)
- `apple-touch-icon` → iPhone'da siteyi ana ekrana eklerse görünecek ikon (PNG format ister)

## CSS Link Sırası

### Yanlış (ilk kurduğum sıra)

```html
<link rel="stylesheet" href="css/base/_reset.css">
<link rel="stylesheet" href="css/base/_variables.css">
<link rel="stylesheet" href="css/components/navbar.css">
<link rel="stylesheet" href="css/components/news-card.css">
<link rel="stylesheet" href="css/components/buttons.css">
<link rel="stylesheet" href="css/components/footer.css">
<link rel="stylesheet" href="css/components/product-card.css">
<link rel="stylesheet" href="css/components/tournament-card.css">
<link rel="stylesheet" href="css/layout/layout.css">
<link rel="stylesheet" href="css/pages/home.css">
<link rel="stylesheet" href="css/responsive.css">
<link rel="stylesheet" href="css/style.css">
```

### Doğru

```html
<link rel="stylesheet" href="css/base/_reset.css">
<link rel="stylesheet" href="css/base/_variables.css">
<link rel="stylesheet" href="css/layout/layout.css">
<link rel="stylesheet" href="css/components/navbar.css">
<link rel="stylesheet" href="css/components/news-card.css">
<link rel="stylesheet" href="css/components/buttons.css">
<link rel="stylesheet" href="css/components/footer.css">
<link rel="stylesheet" href="css/components/product-card.css">
<link rel="stylesheet" href="css/components/tournament-card.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/pages/home.css">
<link rel="stylesheet" href="css/responsive.css">
```

### Neden

**Değişiklik 1 — layout.css component'lerden önce gelmeli.**
layout.css, sayfanın genel iskeletini kurar (.container, .section gibi temel yapı sınıfları). Component'ler (navbar, kartlar) bu iskeletin içine yerleşir, yani ona bağımlıdır. CSS'te genel kural, özel kuraldan önce gelmeli ki özel kural onu düzgün override edebilsin. Layout sonradan gelirse, component'lerdeki bir class ile çakışan bir layout kuralı component'in stilini beklenmedik şekilde ezebilir.

**Değişiklik 2 — responsive.css en sona, style.css'ten sonraya alınmalı.**
CSS cascade kuralı: aynı specificity'deki iki kural çakıştığında dosyada en son yazılan kazanır. responsive.css farklı ekran boyutları için düzeltme kuralları içerir. style.css ondan sonra gelirse, style.css'teki genel bir kural responsive.css'in küçük ekran için yazdığı kuralı ezebilir, mobilde tasarım bozulur. Responsive her zaman zincirin en sonunda olmalı.

## Header (Body)

### HTML Yapısı

```html
<header id="header">
    <a href="index.html">
        <img src="assets/icons/oyunverse-wordmark.svg" alt="OyunVerse">
    </a>

    <button id="menu-toggle" class="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <nav id="navbar">
        <ul class="nav-list" id="nav-list">
            <li><a href="index.html">Ana Sayfa</a></li>
            <li><a href="tournaments.html">Turnuvalar</a></li>
            <li><a href="news.html">Haberler</a></li>
            <li><a href="shop.html">Mağaza</a></li>
            <li><a href="plans.html">Planlar</a></li>
        </ul>
    </nav>

    <div class="navbar-actions">
        <button class="icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </button>
        <button class="icon-btn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
        </button>
        <button class="btn-signin">Giriş Yap</button>
    </div>
</header>
```

### Notlar

- Yapı Gamics'teki navbar pattern'ini taşıyor: `header` → logo + `menu-toggle` (mobil hamburger buton) + `nav` > `ul.nav-list`
- Sağ taraf (`navbar-actions`) ayrı bir bölüm: arama ikonu, sepet ikonu, "Giriş Yap" butonu
- SVG ikonlarda `stroke="currentColor"` kullanıldı — bu sayede ikonun rengi CSS'te butona verilen `color` değerini otomatik alır, ayrıca renk tanımlamaya gerek kalmaz
- Wordmark görselinde "Oyun" kısmı ilk açılışta görünmüyordu çünkü SVG'de beyaz (`#ffffff`) renkte ve sayfa arka planı henüz varsayılan beyazdı — CSS bağlanıp `--color-bg` uygulanınca otomatik düzeldi, HTML'de bir hata yoktu
  