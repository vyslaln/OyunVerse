# _reset.css Notları

## Amaç
Tarayıcıların element'lere verdiği varsayılan stilleri sıfırlamak — böylece her tarayıcıda aynı başlangıç noktasından tasarım yapılır.

## Kod

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
```

## Notlar

- `*` (universal selector) → sayfadaki HER elemente uygulanır, tek tek seçmeye gerek kalmaz
- `margin: 0; padding: 0;` → tarayıcıların element'lere (h1, p, ul vb.) verdiği varsayılan boşlukları sıfırlar
- `box-sizing: border-box` → **dikkat:** bunu ilk yazışımda `box-sizing: 0;` yazmıştım, bu geçersiz bir değer, tarayıcı satırı yok sayıyor. Doğrusu `border-box` gibi bir keyword olmalı. `border-box`, bir elementin width/height hesabına padding ve border'ı da dahil eder — `width: 300px; padding: 20px;` verdiğinde gerçek genişlik yine 300px kalır, padding dışarı taşmaz
- `list-style: none` → `ul`/`ol` listelerindeki madde işaretlerini kaldırır
- `text-decoration: none` → linklerdeki alt çizgiyi kaldırır
