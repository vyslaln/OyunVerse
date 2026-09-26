# Navbar Notes

## Amac

`#header` icindeki tum elemanlarin (logo, nav linkleri, menu-toggle, ikon butonlari, giris yap butonu) gorsel duzenini ve etkilesim (hover) durumlarini tanimlar. Layout icin flexbox kullanilir, renkler ve boslukler `_variables.css` icindeki degiskenlerden gelir.

## Final Kod

```css
#header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 88px;
    padding-inline: var(--spacing-xl);
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
}

/* Hamburger menu buyuk ekranda gizlendi */
.menu-toggle{
    display: none;
}

/* Navbar elemanlari duzenleniyor */
.nav-list{
    display: flex;
    gap: 36px;
}

/* Navbar ul > li > a */
.nav-list a{
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--color-text-muted);
}

.nav-list a.active{
    color: var(--color-text);
}

.nav-list a:hover{
    color: var(--color-accent-cyan);
}

/* sepet - arama ikonlari */
.icon-btn{
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text);
}

.icon-btn:hover{
    color: var(--color-accent-cyan);
}

/* arama, sepet, giris yap butonunu bir arada tutan grup */
.navbar-actions{
    display: flex;
    align-items: center;
    gap: 10px;
}

/* giris yap butonu */
.btn-signin{
    background: linear-gradient(135deg, var(--color-accent-violet), #5a3ff0);
    color: var(--color-text);
    border: none;
    border-radius: var(--radius-sm);
    font-size: 14px;
    font-weight: 700;
    padding: 10px 22px;
    cursor: pointer;
}

.btn-signin:hover{
    filter: brightness(1.1);
}
```

## Yapilan Hatalar ve Duzeltmeler

- `height: 80px` yazilmisti, tasarimdaki gercek deger 88px oldugu icin duzeltildi.
- `background-color: var(--color-surface)` kullanilmisti. `--color-surface` kart gibi yuzeyler icin ayrilmis bir degisken, header sayfanin genel arka planinda oldugu icin `--color-bg` olmasi gerekiyordu.
- Logo ve nav'i yatayda hizalamak icin `display: block` yeterli sanilmisti. `block` elemanlari alt alta dizer, yan yana dizmek icin `display: flex` gerekiyor.
- Header'daki 4 duz flex child'i (logo, menu-toggle, nav, actions) `space-between` altinda birakmak, `menu-toggle` gizlense bile nav'in ortada tek basina kalmasina neden oluyordu. Gorsel bir A/B karsilastirmasiyla incelendi, mevcut yapinin (3 child: logo, nav, actions) `space-between` ile doğru sonucu verdigi onaylandi.
- `.nav-list a` icin varsayilan renk `var(--color-accent-violet)` yazilmisti. Accent renkleri sadece vurgu/aktif durumlar icin ayrilmis, varsayilan durum icin `--color-text-muted` kullanilmasi gerekiyordu.
- Hover'da renk degistirmek icin `transform` ozelligi kullanilabilecegi dusunulmustu. `transform` sadece scale/rotate/translate gibi donusumler icindir, renk degisimi icin `color` + `:hover` pseudo-class kullanilir.
- Ikon butonlarini gorunmez yapmak icin `border: solid 1px; border-color: var(--color-border);` yazilmisti — bu tam tersi bir etki yaratir (kenarlik ekler). Dogrusu `border: none; background: none;`.
- `.btn-signin:hover` icin yazilan `filter: brightness(1.1)` satiri yanlislikla `.btn-signin`'in kendi icine yazilmisti, bu da butonun hover olmadan da surekli parlak gorunmesine neden oluyordu. Satir ayri `.btn-signin:hover` seçicisine tasindi.
- `gap` degeri icin `_variables.css` icinde tam eslesen bir spacing token'i yoktu (36px navbar icin, 10px navbar-actions icin) — en yakin token'a yuvarlamak yerine literal deger kullanilmasi tercih edildi.
  