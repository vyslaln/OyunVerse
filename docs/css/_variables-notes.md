# _variables.css Notları

## Amaç
Projede tekrar tekrar kullanılacak renk, font, radius ve boşluk değerlerini tek bir yerde `:root` içinde tanımlamak — böylece bir değeri değiştirmek istediğimde tüm projede tek satırdan güncellenir.

## Kod

```css
:root {
    /* Renkler */
    --color-bg: #0a0a12;
    --color-surface: #14121f;
    --color-accent-violet: #7c5cff;
    --color-accent-cyan: #34e2e2;
    --color-text: #ffffff;
    --color-text-muted: #9b96b3;
    --color-text-dim: #6b6684;
    --color-border: #24203a;

    /* Fontlar */
    --font-display: 'Orbitron', sans-serif;
    --font-body: 'Inter', sans-serif;

    /* Köşe Yuvarlatma */
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-pill: 999px;

    /* Boşluklar */
    --spacing-xs: 8px;
    --spacing-sm: 16px;
    --spacing-md: 24px;
    --spacing-lg: 40px;
    --spacing-xl: 64px;
}
```

## Notlar

- İsimlendirme mantığı: `--kategori-detay` (örn. `--color-accent-violet`) — isminden ne olduğu anlaşılsın diye
- `--radius-sm` (8px) → butonlar gibi küçük elementler, `--radius-md` (16px) → kartlar (tournament-card, news-card, product-card), `--radius-pill` (999px) → tam yuvarlak rozet/etiketler
- Boşluklar T-shirt ölçeğiyle isimlendirildi (`xs` → `xl`) — örneğin `--spacing-xl: 64px`, header'daki `padding-inline: 64px` için; `--spacing-sm: 16px`, kart içi `gap` için
- Kullanım şekli: component CSS'lerinde sabit değer yazmak yerine `padding: var(--spacing-md);` gibi çağrılır
  