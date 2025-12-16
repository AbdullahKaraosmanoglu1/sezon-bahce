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
