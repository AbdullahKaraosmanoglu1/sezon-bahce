# Sezon Bahçe

Profesyonel bahçe tasarımı ve peyzaj hizmetleri sunan **Sezon Bahçe** firmasının kurumsal web sitesi.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## Proje Hakkında

Sezon Bahçe, bahçe tasarımı, peyzaj düzenlemesi ve yeşil alan bakımı konularında profesyonel hizmetler sunan bir firmadır. Bu web sitesi, firmanın hizmetlerini, projelerini ve iletişim bilgilerini tanıtmak amacıyla geliştirilmiştir.

### Tasarım Dili
- **Lüks** ve **profesyonel** görünüm
- **Dingin** ve doğayla uyumlu renk paleti
- Modern ve responsive tasarım

---

## Özellikler

- Tamamen **statik** web sitesi (DB/API bağlantısı yok)
- **Responsive** tasarım (mobil uyumlu)
- **SEO** dostu yapı
- Hızlı yüklenme süresi
- Modern tarayıcı desteği
- Türkçe içerik ve URL yapısı

---

## Sayfa Yapısı

| Sayfa | Dosya | Açıklama |
|-------|-------|----------|
| Ana Sayfa | `index.html` | Firma tanıtımı ve öne çıkan içerikler |
| Hakkımızda | `hakkimizda.html` | Firma hakkında bilgiler |
| Hizmetler | `hizmetler.html` | Sunulan hizmetlerin listesi |
| Hizmet Detay | `hizmet-detay.html` | Tekil hizmet sayfası |
| Projeler | `projeler.html` | Tamamlanan projeler galerisi |
| Proje Detay | `proje-detay.html` | Tekil proje sayfası |
| Ekibimiz | `ekibimiz.html` | Ekip üyeleri tanıtımı |
| Referanslar | `referanslar.html` | Müşteri yorumları |
| Blog | `blog.html` | Blog yazıları listesi |
| SSS | `sss.html` | Sıkça Sorulan Sorular |
| İletişim | `iletisim.html` | İletişim formu ve bilgileri |
| Teklif Al | `teklif-al.html` | Online teklif formu |

---

## Teknolojiler

- **HTML5** - Semantic markup
- **CSS3** - Modern stil ve animasyonlar
- **JavaScript** - Etkileşimli öğeler
- **Bootstrap 5** - Responsive grid sistemi
- **Swiper.js** - Slider/Carousel
- **Font Awesome 6** - İkonlar
- **IcoFont** - Ek ikon seti

---

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# Repoyu klonlayın
git clone https://github.com/AbdullahKaraosmanoglu1/sezon-bahce.git

# Proje dizinine gidin
cd sezon-bahce

# Herhangi bir web sunucusu ile çalıştırın
# Örnek: VS Code Live Server, Python HTTP Server, vb.

# Python ile basit sunucu
python -m http.server 8000

# Tarayıcıda açın
# http://localhost:8000
```

---

## Dosya Yapısı

```
sezon-bahce/
├── css/
│   ├── bootstrap.min.css
│   ├── style.css
│   ├── plugins.css
│   ├── swiper.css
│   ├── custom.css          # Özelleştirmeler
│   └── colors/
│       ├── scheme-1.css    # Ana renk şeması
│       ├── scheme-2.css
│       └── scheme-3.css
├── js/
│   ├── plugins.js
│   ├── designesia.js
│   ├── swiper.js
│   └── custom.js           # Özelleştirmeler
├── fonts/
│   ├── fontawesome6/
│   ├── icofont/
│   └── ...
├── images/
│   └── sezon-bahce/        # Proje görselleri
├── video/
├── index.html
├── hakkimizda.html
├── hizmetler.html
├── projeler.html
├── iletisim.html
├── ...
├── CLAUDE.md               # Geliştirme kuralları
└── README.md
```

---

## Renk Paleti

Proje için özelleştirilmiş renk şeması `css/colors/scheme-1.css` dosyasında tanımlanmıştır:

```css
:root {
  --primary-color: #XXX;      /* Ana renk */
  --bg-dark-1: #XXX;          /* Koyu arka plan 1 */
  --bg-dark-2: #XXX;          /* Koyu arka plan 2 */
  --bg-dark-3: #XXX;          /* Koyu arka plan 3 */
}
```

---

## Geliştirme Kuralları

Proje geliştirme kuralları `CLAUDE.md` dosyasında detaylı olarak belirtilmiştir:

1. **Dil**: Türkçe
2. **Git İşlemleri**: Onay gerektirir
3. **Template Koruması**: `default-template/` klasörü dokunulmaz
4. **Statik Yapı**: DB/API bağlantısı yok
5. **Kod Standartları**: Inline CSS/JS kullanılmaz
6. **CSS Override**: `custom.css` kullanılır
7. **JS Override**: `custom.js` kullanılır

---

## Lisans

Bu proje özel kullanım içindir. Tüm hakları saklıdır.

---

## İletişim

**Sezon Bahçe**

- Web: [sezonbahce.com](https://sezonbahce.com)
- E-posta: info@sezonbahce.com

---

<p align="center">
  <sub>Claude Code ile geliştirilmiştir.</sub>
</p>
