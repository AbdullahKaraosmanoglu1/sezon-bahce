# Sezon Bahçe Projesi - Claude Kuralları

## Proje Hakkında
Bu proje, Solaria HTML template'i kullanılarak oluşturulan **Sezon Bahçe** statik web sitesidir.

---

## Kurallar

### Kural 1: Dil
- Her zaman **Türkçe** cevap verilecek.

### Kural 2: Git İşlemleri
- Onaysız asla ve asla `git commit`, `git push`, `git fork` vb. işlemler yapılmayacak.
- Tüm git işlemleri için kullanıcıdan açık onay alınacak.

### Kural 3: Git Repo Koruması
- `default-template` klasörü git reposuna **gönderilmeyecek**.
- `.gitignore` dosyasında bu klasör mutlaka yer alacak.

### Kural 4: Template Koruması
- `default-template` klasöründe **asla ve asla değişiklik yapılmayacak**.
- Bu klasör pure/orijinal template olarak korunacak.
- Tüm değişiklikler kök dizindeki kopyalanmış dosyalarda yapılacak.

### Kural 5: Proje Yapısı
- **Sezon Bahçe** tamamen statik bir web sitesi olacak.
- Herhangi bir veritabanı (DB) bağlantısı olmayacak.
- Herhangi bir API bağlantısı olmayacak.
- Sadece HTML, CSS ve JS kullanılacak.

### Kural 6: Kod Standartları
- Mümkün olduğunca **inline CSS'lerden kaçınılacak**.
- Gerektiğinde yeni CSS dosyası oluşturulabilir.
- Aynı kural JS dosyaları ve scriptler için de geçerli.
- Inline `<script>` ve `style=""` attribute'larından kaçınılacak.

### Kural 7: SEO ve Erişilebilirlik
- Tüm `<img>` etiketlerinde `alt` attribute bulunacak.
- Sayfa başlıkları (`<title>`) ve meta açıklamaları Türkçe ve anlamlı olacak.
- Semantic HTML etiketleri tercih edilecek (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` vb.).

### Kural 8: CSS Override Stratejisi
- Template'in orijinal CSS dosyalarında (`style.css`, `plugins.css` vb.) değişiklik yapılmayacak.
- Tüm stil özelleştirmeleri `css/custom.css` dosyasında yapılacak.
- `custom.css` dosyası, HTML'de orijinal CSS'lerden sonra çağrılacak.

### Kural 9: JS Override Stratejisi
- Template'in orijinal JS dosyalarında (`designesia.js`, `plugins.js` vb.) değişiklik yapılmayacak.
- Tüm JavaScript özelleştirmeleri `js/custom.js` dosyasında yapılacak.
- `custom.js` dosyası, HTML'de orijinal JS'lerden sonra çağrılacak.
- Mevcut fonksiyonları ezmek yerine, yeni fonksiyonlar tanımlanacak veya event listener'lar eklenecek.

### Kural 10: Varlık (Asset) Yönetimi
- Yeni eklenen görseller `images/sezon-bahce/` klasöründe tutulacak.
- Template'den kalan kullanılmayan görseller (solar panel vb.) proje bitiminde temizlenecek.

---

## Dosya Yapısı

```
sezon-bahce/
├── css/                    # Stil dosyaları
├── js/                     # JavaScript dosyaları
├── fonts/                  # Font dosyaları
├── images/                 # Görseller
├── video/                  # Video dosyaları
├── index.html              # Ana sayfa
├── about.html              # Hakkımızda
├── services.html           # Hizmetler
├── contact.html            # İletişim
├── ...                     # Diğer sayfalar
├── default-template/       # [DOKUNULMAZ] Orijinal template
└── CLAUDE.md               # Bu dosya
```

---

## Notlar
- Template: Solaria - Solar Energy HTML Template
- Hedef: Bahçe/peyzaj temalı Türkçe web sitesi
- Tasarım Dili: Lüks, profesyonel, dingin
