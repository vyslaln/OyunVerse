const products = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80",
        imageAlt: "Turuncu aydınlatmalı mekanik oyuncu klavyesi",
        category: "klavye", categoryLabel: "Klavye",
        brand: "Nova Strike", name: "Nova Strike Mekanik Klavye",
        price: "2.499 TL", oldPrice: "2.999 TL", badge: "İndirim",
        description: "Mekanik switch'ler ile hızlı ve hassas tepki süresi sunan Nova Strike, uzun oyun seanslarında bile konforunu koruyan ergonomik tasarımıyla öne çıkıyor. Özelleştirilebilir RGB aydınlatma ve dayanıklı gövde yapısı ile günlük kullanım ve rekabetçi oyun için idealdir."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=600&q=80",
        imageAlt: "Yeşil ve mavi RGB aydınlatmalı oyuncu klavyesi",
        category: "klavye", categoryLabel: "Klavye",
        brand: "Pulse", name: "Pulse RGB Klavye",
        price: "1.899 TL", oldPrice: "", badge: "Yeni",
        description: "Pulse RGB Klavye, canlı renk geçişleri sunan aydınlatma sistemi ve sessiz tuş yapısıyla hem oyun hem de ofis kullanımına uygun bir seçenek. Kompakt tasarımı sayesinde masanda daha fazla mouse alanı bırakır."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1558050032-160f36233a07?w=600&q=80",
        imageAlt: "Çok renkli aydınlatmalı kompakt oyuncu klavyesi",
        category: "klavye", categoryLabel: "Klavye",
        brand: "Aurora", name: "Aurora Mini Klavye",
        price: "1.599 TL", oldPrice: "", badge: "",
        description: "Aurora Mini, 60% form faktörüyle taşınabilirliği ön planda tutan oyuncular için tasarlandı. Çoklu renk aydınlatma profilleri ve dayanıklı tuş kapakları ile uzun ömürlü kullanım vaat ediyor."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=600&q=80",
        imageAlt: "Siyah kırmızı kablolu oyuncu mouse'u",
        category: "mouse", categoryLabel: "Mouse",
        brand: "Vortex", name: "Vortex Pro Gaming Mouse",
        price: "899 TL", oldPrice: "1.199 TL", badge: "İndirim",
        description: "Yüksek hassasiyetli optik sensörü ve hafif gövdesiyle Vortex Pro, hızlı reflekslerin önemli olduğu oyunlarda rakip avantajı sağlar. Ayarlanabilir DPI kademeleri ile her oyun tarzına uyum sağlar."
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1616296425622-4560a2ad83de?w=600&q=80",
        imageAlt: "Siyah kırmızı oyuncu mouse'u yakın çekim",
        category: "mouse", categoryLabel: "Mouse",
        brand: "Striker", name: "Striker Kablosuz Mouse",
        price: "1.099 TL", oldPrice: "", badge: "Yeni",
        description: "Striker, kablosuz özgürlüğü rekabetçi performanstan ödün vermeden sunuyor. Uzun pil ömrü ve düşük gecikmeli bağlantısıyla turnuva seviyesinde kullanıma hazır."
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=600&q=80",
        imageAlt: "Siyah mavi kablolu bilgisayar mouse'u",
        category: "mouse", categoryLabel: "Mouse",
        brand: "Nomad", name: "Nomad Hafif Mouse",
        price: "749 TL", oldPrice: "", badge: "",
        description: "Nomad, hafifletilmiş kabuk yapısı sayesinde bilek yorgunluğunu azaltır. Günlük kullanım ile rekabetçi oyunlar arasında dengeli bir seçenek arayanlar için tasarlandı."
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=600&q=80",
        imageAlt: "Turuncu ve siyah kulaklık takan bir kişi",
        category: "kulaklik", categoryLabel: "Kulaklık",
        brand: "Echo", name: "Echo Surround Kulaklık",
        price: "1.799 TL", oldPrice: "", badge: "Yeni",
        description: "Echo Surround, sanal 7.1 ses desteğiyle düşman adımlarını ve silah seslerini net biçimde ayırt etmeni sağlar. Yumuşak kulak yastıkları uzun seanslarda konfor sunar."
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1610041321327-b794c052db27?w=600&q=80",
        imageAlt: "Beyaz masa üzerinde siyah kırmızı kablolu kulaklık",
        category: "kulaklik", categoryLabel: "Kulaklık",
        brand: "Apex", name: "Apex Wireless Kulaklık",
        price: "2.199 TL", oldPrice: "2.599 TL", badge: "İndirim",
        description: "Apex Wireless, kablosuz bağlantı konforuyla stüdyo kalitesinde ses üretir. Gürültü engelleyici mikrofonu takım içi iletişimi netleştirir."
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80",
        imageAlt: "Camgöbeği ve pembe neon ışıkla aydınlatılmış kablosuz oyun kolu",
        category: "controller", categoryLabel: "Controller",
        brand: "Phantom", name: "Phantom Kablosuz Kontrolcü",
        price: "1.349 TL", oldPrice: "", badge: "Yeni",
        description: "Phantom, hassas analog çubukları ve titreşimli geri bildirim sistemiyle konsol ve PC'de akıcı bir oyun deneyimi sunar. Uzun pil ömrü sayesinde şarj derdi yaşatmaz."
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80",
        imageAlt: "Neon ışıklı kablosuz oyun kolu yakın çekim",
        category: "controller", categoryLabel: "Controller",
        brand: "Specter", name: "Specter Pro Kontrolcü",
        price: "1.599 TL", oldPrice: "1.899 TL", badge: "İndirim",
        description: "Specter Pro, değiştirilebilir tetik durdurucuları ve programlanabilir arka tuşlarıyla rekabetçi oyunculara ekstra kontrol avantajı sağlar."
    },
    {
        id: 11,
        image: "https://images.unsplash.com/photo-1603481546164-959efb269a4e?w=600&q=80",
        imageAlt: "Siyah mouse pad üzerinde siyah kırmızı oyuncu mouse'u",
        category: "mousepad", categoryLabel: "Mousepad",
        brand: "Titan", name: "Titan XL Mouse Pad",
        price: "349 TL", oldPrice: "", badge: "",
        description: "Titan XL, geniş yüzey alanı ile hem klavye hem de mouse'u tek bir zemin üzerinde barındırır. Kaymaz taban ve dikişli kenarlar uzun ömürlü kullanım sağlar."
    },
    {
        id: 12,
        image: "https://images.unsplash.com/photo-1603481546164-959efb269a4e?w=600&q=80",
        imageAlt: "Geniş siyah oyuncu mouse pad'i yakın çekim",
        category: "mousepad", categoryLabel: "Mousepad",
        brand: "Flux", name: "Flux Speed Mouse Pad",
        price: "279 TL", oldPrice: "", badge: "Yeni",
        description: "Flux Speed, pürüzsüz yüzeyi sayesinde hızlı mouse hareketlerinde düşük sürtünme sağlar. İnce ve hafif yapısı taşınabilirliği kolaylaştırır."
    }
];