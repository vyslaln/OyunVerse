// Turnuva haberleri
const tournamentNews = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1558008258-7ff8888b42b0?w=600&q=80",
        imageAlt: "Sahne ışıklarıyla aydınlatılmış bir e-spor turnuva alanı",
        title: "OG, Red Bull Arena'da sahne aldı",
        excerpt: "Takım, ana etkinlik öncesi son antrenman kampını tamamladı.",
        date: "2 saat önce"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1762136537222-59f23fcb4e31?w=600&q=80",
        imageAlt: "Kalabalık bir e-spor turnuvası salonunun genel görünümü",
        title: "Valorant Ligi çeyrek final eşleşmeleri belli oldu",
        excerpt: "Sekiz takım, şampiyonluk yolunda karşı karşıya gelecek.",
        date: "5 saat önce"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1548686304-5c3be888a00b?w=600&q=80",
        imageAlt: "Takımların sahnede yarıştığı bir e-spor final etkinliği",
        title: "LoL Dünya Şampiyonası başladı",
        excerpt: "Bu yılki turnuvaya 24 ülkeden takım katılıyor.",
        date: "1 gün önce"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&q=80",
        imageAlt: "Turnuva sahnesinde performans sergileyen bir e-spor takımı",
        title: "Team Secret yeni transferini duyurdu",
        excerpt: "Takım, orta koridor oyuncusuyla anlaşma sağladı.",
        date: "1 gün önce"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1612151388040-9ec75d2de8c7?w=600&q=80",
        imageAlt: "Seyircilerin izlediği bir e-spor turnuvası müsabakası",
        title: "Fortnite şampiyonasında sürpriz sonuç",
        excerpt: "Alt sıradaki bir takım finale kalarak herkesi şaşırttı.",
        date: "2 gün önce"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1598550487031-0898b4852123?w=600&q=80",
        imageAlt: "Yarışma sırasına dizilmiş oyuncu bilgisayarları",
        title: "EA FC ligi play-off aşamasına girdi",
        excerpt: "İlk 8 takım belli oldu, heyecan doruğa çıktı.",
        date: "2 gün önce"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1759701546851-1d903ac1a2e2?w=600&q=80",
        imageAlt: "Turnuva öncesi hazırlık yapan bir e-spor takımı",
        title: "Dying Light turnuvasında yeni format",
        excerpt: "Organizatörler bu sezon takım bazlı elemeye geçti.",
        date: "3 gün önce"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1558008412-40e4bac94bed?w=600&q=80",
        imageAlt: "Büyük ekranların bulunduğu bir e-spor etkinlik sahnesi",
        title: "Ulusal e-spor ligi başvuruları açıldı",
        excerpt: "Amatör takımlar için kayıtlar bu hafta başlıyor.",
        date: "4 gün önce"
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1759709867188-7d94e0041de2?w=600&q=80",
        imageAlt: "Milli takımın sahada yer aldığı bir turnuva anı",
        title: "Türkiye, uluslararası turnuvada temsil edildi",
        excerpt: "Milli takım, gruptan lider çıkmayı başardı.",
        date: "5 gün önce"
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?w=600&q=80",
        imageAlt: "Yaz sezonu turnuvalarının duyurulduğu bir etkinlik afişi",
        title: "Yaz sezonu turnuva takvimi açıklandı",
        excerpt: "Önümüzdeki üç ay boyunca 12 turnuva düzenlenecek.",
        date: "1 hafta önce"
    }
];

// Oyun haberleri
const gameNews = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1730933900185-6bf7eeefe23f?w=600&q=80",
        imageAlt: "Televizyonda bir futbol oyunu izleyen iki kişi",
        title: "EA FC yeni sezon güncellemesi yayınlandı",
        excerpt: "Oyuna yeni oyuncu kartları ve denge güncellemeleri geldi.",
        date: "1 gün önce"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1646708198974-4c4893e8a2d7?w=600&q=80",
        imageAlt: "Renkli bir oyun görüntüsünün yakın çekim ekran görüntüsü",
        title: "Fortnite yeni harita bölümünü duyurdu",
        excerpt: "Yeni sezonla birlikte haritaya üç bölge daha eklendi.",
        date: "2 gün önce"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=600&q=80",
        imageAlt: "Karanlık bir odada oyun oynayan bir oyuncu",
        title: "Dying Light için yeni DLC duyuruldu",
        excerpt: "Genişleme paketi yeni bir şehir bölgesi getiriyor.",
        date: "3 gün önce"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1757774636742-0a5dc7e5c07a?w=600&q=80",
        imageAlt: "Televizyon ekranında oynanan birinci şahıs nişancı oyunu",
        title: "Valorant yeni ajan tanıtıldı",
        excerpt: "Yeni karakterin yetenekleri ilk kez sızdırıldı.",
        date: "3 gün önce"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1626218174358-7769486c4b79?w=600&q=80",
        imageAlt: "RGB aydınlatmalı bir gaming kurulumunun yakın çekimi",
        title: "League of Legends dengesizlik yaması yayınlandı",
        excerpt: "Birden fazla şampiyonda güç ayarlaması yapıldı.",
        date: "4 gün önce"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80",
        imageAlt: "Ekranda yeni bir oyunun fragmanının oynatıldığı bir kurulum",
        title: "Yeni bir battle royale oyunu duyuruldu",
        excerpt: "Stüdyo, oyunun ilk fragmanını bugün paylaştı.",
        date: "5 gün önce"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1696710257827-75e2e5954059?w=600&q=80",
        imageAlt: "Kanepede kontrolcüyle oyun oynayan bir kişi",
        title: "Cloud gaming platformlarına yeni oyunlar eklendi",
        excerpt: "Bu ay 15 yeni oyun cloud kütüphanesine katıldı.",
        date: "5 gün önce"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=600&q=80",
        imageAlt: "Sunucu bağlantı ekranının göründüğü bir oyun oturumu",
        title: "Popüler oyunda sunucu sorunu giderildi",
        excerpt: "Geliştirici ekip, bağlantı sorunlarını çözdüğünü açıkladı.",
        date: "6 gün önce"
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=600&q=80",
        imageAlt: "Televizyon karşısında konsolla oyun oynayan bir kişi",
        title: "Yeni nesil konsol güncellemesi geldi",
        excerpt: "Güncelleme, yükleme sürelerini önemli ölçüde kısaltıyor.",
        date: "1 hafta önce"
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1661347561879-c9ab77bac89f?w=600&q=80",
        imageAlt: "Geliştirme araçlarının ekranda açık olduğu bir oyun motoru kurulumu",
        title: "Oyun motoru üreticisinden yeni araç seti",
        excerpt: "Geliştiriciler için yeni performans araçları tanıtıldı.",
        date: "1 hafta önce"
    }
];

// Kampanya / mağaza haberleri
const campaignNews = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1560419398-c36ab8c174b0?w=600&q=80",
        imageAlt: "Kulaklık takıp ekrana bakan bir kişi",
        title: "Kulaklıklarda %20 indirim başladı",
        excerpt: "Seçili gaming kulaklık modellerinde sınırlı süreli kampanya.",
        date: "Sınırlı süre"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1756388371735-cc845c578200?w=600&q=80",
        imageAlt: "Kırmızı ışıklı bir mekanik klavyenin yakın çekimi",
        title: "RGB klavye serisi stoklarda",
        excerpt: "Yeni mekanik klavye serisi mağazamıza eklendi.",
        date: "Yeni"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1603481546164-959efb269a4e?w=600&q=80",
        imageAlt: "Siyah bir mouse pad üzerinde duran kırmızı-siyah bir gaming mouse",
        title: "Mouse pad'lerde 2 al 1 öde",
        excerpt: "Tüm büyük boy mouse pad modellerinde geçerli.",
        date: "Sınırlı süre"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1636487658630-5a368420d840?w=600&q=80",
        imageAlt: "Bilgisayar ve gaming koltuğunun bulunduğu bir masa",
        title: "Gaming koltuklarında yıl sonu fırsatı",
        excerpt: "Seçili koltuk modellerinde %15'e varan indirim.",
        date: "Sınırlı süre"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80",
        imageAlt: "Neon ışıklar altında duran kablosuz bir oyun kontrolcüsü",
        title: "Yeni kontrolcü modeli satışa çıktı",
        excerpt: "Uzun pil ömrü ve özelleştirilebilir tuşlarla geldi.",
        date: "Yeni"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1726442116417-de02f3116eed?w=600&q=80",
        imageAlt: "Büyük bir monitör ve mouse'un bulunduğu bir gaming odası",
        title: "Monitörlerde kampanya haftası",
        excerpt: "144Hz ve üzeri monitörlerde özel fiyatlar.",
        date: "Sınırlı süre"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80",
        imageAlt: "Sony PS4 konsoluyla birlikte oyun oynayan iki kişi",
        title: "Cloud gaming aboneliğinde ilk ay hediye",
        excerpt: "Yeni üyelere özel deneme kampanyası başladı.",
        date: "Sınırlı süre"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1689771455000-7ca175aa03fe?w=600&q=80",
        imageAlt: "Arkasında kırmızı bir perde olan bir stüdyo mikrofonu",
        title: "Mikrofon ve stream ekipmanları mağazada",
        excerpt: "Yayıncılar için yeni ekipman kategorisi açıldı.",
        date: "Yeni"
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1758685733664-4cde7bbe4713?w=600&q=80",
        imageAlt: "Sınıfta laptopla ders çalışan bir öğrenci",
        title: "Öğrenci indirimi kampanyası başladı",
        excerpt: "Doğrulanan öğrenciler tüm kategoride %10 indirim kazanıyor.",
        date: "Sınırlı süre"
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1761494296583-99b15e9063c5?w=600&q=80",
        imageAlt: "Aydınlık bir mağazada ürünlere bakan bir müşteri",
        title: "Yeni gelen ürünler sayfası açıldı",
        excerpt: "Mağazaya bu hafta eklenen tüm ürünleri keşfet.",
        date: "Yeni"
    }
];