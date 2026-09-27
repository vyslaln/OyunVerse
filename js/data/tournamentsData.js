const tournaments = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1558008258-7ff8888b42b0?w=600&q=80",
        imageAlt: "Sahne ışıklarıyla aydınlatılmış bir e-spor turnuva alanı",
        game: "VALORANT",
        name: "Valorant Şampiyonlar Kupası",
        date: "12 Ekim 2026",
        prize: "500.000 TL Ödül Havuzu",
        participants: "16 Takım",
        description: "Ülkenin en iyi 16 Valorant takımı, tek eleme usulüyle şampiyonluk için sahne alacak. Final maçları canlı yayınlanacak ve seyirciye açık olacak."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1762136537222-59f23fcb4e31?w=600&q=80",
        imageAlt: "Kalabalık bir e-spor turnuvası salonunun genel görünümü",
        game: "LEAGUE OF LEGENDS",
        name: "LoL Bahar Ligi Finalleri",
        date: "20 Ekim 2026",
        prize: "750.000 TL Ödül Havuzu",
        participants: "8 Takım",
        description: "Bahar sezonunu lider tamamlayan 8 takım, grup aşaması olmadan doğrudan çeyrek finalden başlayarak şampiyonluğa oynayacak."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1548686304-5c3be888a00b?w=600&q=80",
        imageAlt: "Takımların sahnede yarıştığı bir e-spor final etkinliği",
        game: "EA FC",
        name: "EA FC Ulusal Ligi",
        date: "5 Kasım 2026",
        prize: "150.000 TL Ödül Havuzu",
        participants: "32 Oyuncu",
        description: "Bireysel katılımın esas olduğu bu turnuvada 32 oyuncu, İsviçre sistemiyle eşleşerek finale yükselmeye çalışacak."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&q=80",
        imageAlt: "Turnuva sahnesinde performans sergileyen bir e-spor takımı",
        game: "FORTNITE",
        name: "Fortnite Solo Şampiyonası",
        date: "18 Kasım 2026",
        prize: "300.000 TL Ödül Havuzu",
        participants: "100 Oyuncu",
        description: "100 oyuncunun aynı anda mücadele ettiği solo formatta, en yüksek toplam puanı toplayan oyuncu şampiyonluğu kazanacak."
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1612151388040-9ec75d2de8c7?w=600&q=80",
        imageAlt: "Seyircilerin izlediği bir e-spor turnuvası müsabakası",
        game: "CS2",
        name: "CS2 Major Elemeleri",
        date: "1 Aralık 2026",
        prize: "1.000.000 TL Ödül Havuzu",
        participants: "24 Takım",
        description: "Yıl içindeki en büyük ödül havuzuna sahip turnuva. 24 takım, uluslararası Major'a katılım hakkı için mücadele edecek."
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1598550487031-0898b4852123?w=600&q=80",
        imageAlt: "Yarışma sırasına dizilmiş oyuncu bilgisayarları",
        game: "DOTA 2",
        name: "Dota 2 Kış Ligi",
        date: "10 Aralık 2026",
        prize: "600.000 TL Ödül Havuzu",
        participants: "12 Takım",
        description: "Kış sezonu boyunca oynanacak lig formatındaki turnuvada, en çok puanı toplayan ilk 4 takım play-off'a yükselecek."
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1759701546851-1d903ac1a2e2?w=600&q=80",
        imageAlt: "Turnuva öncesi hazırlık yapan bir e-spor takımı",
        game: "ROCKET LEAGUE",
        name: "Rocket League Kupa Yarışması",
        date: "22 Aralık 2026",
        prize: "100.000 TL Ödül Havuzu",
        participants: "16 Takım",
        description: "Hızlı tempolu, tek maç eleme usulüyle oynanan kupa turnuvasında 16 takım bir günde şampiyonu belirleyecek."
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1558008412-40e4bac94bed?w=600&q=80",
        imageAlt: "Büyük ekranların bulunduğu bir e-spor etkinlik sahnesi",
        game: "PUBG",
        name: "PUBG Battle Grounds Ligi",
        date: "5 Ocak 2027",
        prize: "400.000 TL Ödül Havuzu",
        participants: "20 Takım",
        description: "Çoklu harita rotasyonuyla oynanan lig formatında takımlar hem yerleşim sırası hem de eleme sayısına göre puan toplayacak."
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1759709867188-7d94e0041de2?w=600&q=80",
        imageAlt: "Milli takımın sahada yer aldığı bir turnuva anı",
        game: "APEX LEGENDS",
        name: "Apex Legends Ulusal Kupası",
        date: "14 Ocak 2027",
        prize: "250.000 TL Ödül Havuzu",
        participants: "30 Takım",
        description: "Ülke genelinden 30 takımın katıldığı ulusal kupa, üç günlük final haftası ile tamamlanacak."
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?w=600&q=80",
        imageAlt: "Yaz sezonu turnuvalarının duyurulduğu bir etkinlik afişi",
        game: "OVERWATCH 2",
        name: "Overwatch 2 Şampiyonlar Ligi",
        date: "28 Ocak 2027",
        prize: "350.000 TL Ödül Havuzu",
        participants: "10 Takım",
        description: "Takım tabanlı bu turnuvada 10 profesyonel takım, çift devreli lig usulüyle şampiyonluğa oynayacak."
    },
    {
        id: 11,
        image: "https://images.unsplash.com/photo-1759701547393-b505730954dc?w=600&q=80",
        imageAlt: "Sahnede yarışan oyuncuların bulunduğu bir mobil oyun turnuvası",
        game: "MOBILE LEGENDS",
        name: "Mobile Legends Bölgesel Finali",
        date: "9 Şubat 2027",
        prize: "180.000 TL Ödül Havuzu",
        participants: "16 Takım",
        description: "Bölgesel elemeleri kazanan 16 takımın katılacağı final haftasında şampiyon, dünya turnuvasına katılım hakkı kazanacak."
    },
    {
        id: 12,
        image: "https://images.unsplash.com/photo-1759701547797-15ee208edc40?w=600&q=80",
        imageAlt: "Kalabalık bir salonda düzenlenen bir e-spor etkinliği",
        game: "FREE FIRE",
        name: "Free Fire Dünya Elemeleri",
        date: "20 Şubat 2027",
        prize: "220.000 TL Ödül Havuzu",
        participants: "24 Takım",
        description: "Dünya finaline katılım hakkı için düzenlenen bölgesel elemede 24 takım, üç haftalık lig formatında yarışacak."
    }
];