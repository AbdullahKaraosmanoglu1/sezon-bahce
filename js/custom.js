/**
 * Sezon Bahçe - Custom GSAP Animations
 * Template'in orijinal JS dosyalarına dokunmadan,
 * tüm özelleştirmeler bu dosyada yapılır.
 */

(function () {
    'use strict';

    // GSAP ve ScrollTrigger'ı register et
    gsap.registerPlugin(ScrollTrigger);

    /**
     * Split Text Utility
     * Metni karakter veya kelime bazında böler ve span'lara sarar
     * @param {HTMLElement} element - Bölünecek element
     * @param {string} type - 'chars' veya 'words'
     * @returns {HTMLElement[]} - Oluşturulan span elementleri
     */
    function splitText(element, type = 'chars') {
        const text = element.textContent;
        element.innerHTML = '';
        element.setAttribute('aria-label', text);

        const items = type === 'chars' ? text.split('') : text.split(' ');
        const spans = [];

        items.forEach((item, index) => {
            const span = document.createElement('span');
            span.textContent = item === ' ' ? '\u00A0' : item;
            span.style.display = 'inline-block';
            span.classList.add(`split-${type.slice(0, -1)}`);
            element.appendChild(span);

            // Kelime modunda boşluk ekle
            if (type === 'words' && index < items.length - 1) {
                const space = document.createTextNode(' ');
                element.appendChild(space);
            }

            spans.push(span);
        });

        return spans;
    }

    /**
     * Hero Section Animasyonları
     */
    function initHeroAnimations() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;

        const heroTitle = heroSection.querySelector('.hero-title');
        const heroSubtitle = heroSection.querySelector('.hero-subtitle');
        const heroCta = heroSection.querySelector('.hero-cta');
        const heroAvatars = heroSection.querySelectorAll('.hero-avatar');
        const heroStats = heroSection.querySelector('.hero-stats');

        // Başlangıç durumları
        gsap.set([heroSubtitle, heroCta, heroStats], {
            opacity: 0,
            y: 30
        });

        gsap.set(heroAvatars, {
            opacity: 0,
            scale: 0,
            x: -20
        });

        // Başlığı karakterlere böl
        let titleChars = [];
        if (heroTitle) {
            titleChars = splitText(heroTitle, 'chars');
            gsap.set(titleChars, {
                opacity: 0,
                y: 100,
                rotateX: -90
            });
        }

        // Ana timeline
        const heroTl = gsap.timeline({
            defaults: {
                ease: 'power3.out'
            },
            delay: 0.5 // Sayfa yüklendikten sonra
        });

        // 1. Önce alt yazı (paragraf)
        if (heroSubtitle) {
            heroTl.to(heroSubtitle, {
                opacity: 1,
                y: 0,
                duration: 0.8
            });
        }

        // 2. Başlık karakterleri stagger ile
        if (titleChars.length > 0) {
            heroTl.to(titleChars, {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.8,
                stagger: {
                    amount: 0.6,
                    from: 'start'
                },
                ease: 'back.out(1.7)'
            }, '-=0.4');
        }

        // 3. CTA butonu
        if (heroCta) {
            heroTl.to(heroCta, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.3');
        }

        // 4. Avatarlar stagger ile
        if (heroAvatars.length > 0) {
            heroTl.to(heroAvatars, {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'back.out(2)'
            }, '-=0.3');
        }

        // 5. İstatistik yazısı
        if (heroStats) {
            heroTl.to(heroStats, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.2');
        }

        // Scroll Parallax Efekti
        const heroContent = heroSection.querySelector('.hero-content');
        if (heroContent) {
            gsap.to(heroContent, {
                y: -100,
                opacity: 0.3,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        }

        // Mouse Hover Efekti - Harfler mouse'a tepki verir
        if (heroTitle && titleChars.length > 0) {
            initTitleHoverEffect(heroTitle, titleChars);
        }
    }

    /**
     * Başlık Hover Efekti
     * Mouse harflere yaklaştıkça harfler tepki verir
     */
    function initTitleHoverEffect(titleElement, chars) {
        const config = {
            radius: 100,        // Etki alanı (px)
            intensity: 0.4,     // Hareket yoğunluğu
            scale: 1.2,         // Maksimum büyüme
            duration: 0.3       // Animasyon süresi
        };

        let isHovering = false;
        let mouseX = 0;
        let mouseY = 0;

        // Mouse pozisyonunu takip et
        titleElement.addEventListener('mouseenter', () => {
            isHovering = true;
        });

        titleElement.addEventListener('mouseleave', () => {
            isHovering = false;
            // Tüm harfleri orijinal konumuna döndür
            chars.forEach(char => {
                gsap.to(char, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    color: '',
                    duration: config.duration,
                    ease: 'power2.out'
                });
            });
        });

        titleElement.addEventListener('mousemove', (e) => {
            if (!isHovering) return;

            const rect = titleElement.getBoundingClientRect();
            mouseX = e.clientX;
            mouseY = e.clientY;

            chars.forEach(char => {
                const charRect = char.getBoundingClientRect();
                const charCenterX = charRect.left + charRect.width / 2;
                const charCenterY = charRect.top + charRect.height / 2;

                // Mouse ile harf arasındaki mesafe
                const deltaX = mouseX - charCenterX;
                const deltaY = mouseY - charCenterY;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                if (distance < config.radius) {
                    // Mesafeye göre etki gücü (yakın = güçlü)
                    const force = (1 - distance / config.radius) * config.intensity;

                    // Harfi mouse'tan uzaklaştır (repel efekti)
                    const moveX = -deltaX * force;
                    const moveY = -deltaY * force;

                    // Yakın harfler büyür
                    const scale = 1 + (config.scale - 1) * (1 - distance / config.radius);

                    gsap.to(char, {
                        x: moveX,
                        y: moveY,
                        scale: scale,
                        duration: config.duration,
                        ease: 'power2.out'
                    });
                } else {
                    // Etki alanı dışındaki harfler normale döner
                    gsap.to(char, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        duration: config.duration,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }

    /**
     * Why Choose Us - 3D Tilt Kart Efekti
     */
    function initTiltCards() {
        const cards = document.querySelectorAll('.tilt-card');
        if (cards.length === 0) return;

        const config = {
            maxTilt: 15,        // Maksimum eğilme açısı
            scale: 1.05,        // Hover'da büyüme
            speed: 400,         // Geçiş süresi (ms)
            glare: true,        // Işık efekti
            maxGlare: 0.3       // Maksimum parlaklık
        };

        cards.forEach(card => {
            const inner = card.querySelector('.tilt-card-inner');
            if (!inner) return;

            // Mouse enter
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: config.scale,
                    duration: config.speed / 1000,
                    ease: 'power2.out'
                });
            });

            // Mouse move - 3D tilt
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;

                // -1 ile 1 arasında normalize et
                const rotateY = (mouseX / (rect.width / 2)) * config.maxTilt;
                const rotateX = -(mouseY / (rect.height / 2)) * config.maxTilt;

                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    duration: 0.1,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });

                // Glare efekti (iç element üzerinde)
                if (config.glare) {
                    const glareX = (mouseX / rect.width + 0.5) * 100;
                    const glareY = (mouseY / rect.height + 0.5) * 100;
                    inner.style.background = `
                        radial-gradient(
                            circle at ${glareX}% ${glareY}%,
                            rgba(255,255,255,${config.maxGlare}) 0%,
                            transparent 60%
                        )
                    `;
                }
            });

            // Mouse leave
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    duration: config.speed / 1000,
                    ease: 'power2.out'
                });

                if (config.glare) {
                    inner.style.background = '';
                }
            });
        });
    }

    /**
     * Why Choose Us - Sayaç Animasyonu
     */
    function initCounterAnimation() {
        const counter = document.querySelector('.why-choose-counter');
        if (!counter) return;

        const target = parseInt(counter.getAttribute('data-target')) || 325;

        // ScrollTrigger ile viewport'a girdiğinde başlat
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { innerHTML: 1 },
                    onUpdate: function () {
                        counter.innerHTML = Math.round(parseFloat(counter.innerHTML)) + '%';
                    }
                });
            }
        });
    }

    /**
     * Why Choose Us - Parallax Görseller
     */
    function initWhyChooseParallax() {
        const section = document.querySelector('.why-choose-section');
        if (!section) return;

        const mainImg = section.querySelector('.why-choose-img-main');
        const secondaryImg = section.querySelector('.why-choose-img-secondary');
        const badge = section.querySelector('.why-choose-badge');

        // Ana görsel - yavaş hareket
        if (mainImg) {
            gsap.to(mainImg, {
                y: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        }

        // İkincil görsel - daha hızlı (derinlik hissi)
        if (secondaryImg) {
            gsap.to(secondaryImg, {
                y: -80,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5
                }
            });
        }

        // Badge - floating efekti
        if (badge) {
            // Sürekli yukarı-aşağı salınım
            gsap.to(badge, {
                y: -10,
                duration: 2,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1
            });
        }
    }

    /**
     * Why Choose Us - Kartların Stagger Reveal
     */
    function initCardsReveal() {
        const cards = document.querySelectorAll('.tilt-card');
        if (cards.length === 0) return;

        // Başlangıçta gizle
        gsap.set(cards, {
            opacity: 0,
            y: 50,
            scale: 0.9
        });

        // ScrollTrigger ile reveal
        ScrollTrigger.create({
            trigger: '.why-choose-cards',
            start: 'top 80%',
            once: true,
            onEnter: () => {
                gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: {
                        amount: 0.8,
                        grid: [3, 2],
                        from: 'start'
                    },
                    ease: 'back.out(1.2)'
                });
            }
        });
    }

    /**
     * Sayfa yüklendiğinde başlat
     */
    function init() {
        // Animasyonların sadece bir kere çalışmasını garantile
        let hasInitialized = false;

        function runOnce() {
            if (hasInitialized) return;
            hasInitialized = true;
            initAllAnimations();
        }

        // Preloader bitene kadar bekle (varsa)
        const loader = document.getElementById('de-loader');

        if (loader) {
            // MutationObserver ile loader'ın kaybolmasını izle
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' &&
                        (loader.style.display === 'none' || loader.style.opacity === '0')) {
                        observer.disconnect();
                        runOnce();
                    }
                });
            });

            observer.observe(loader, {
                attributes: true,
                attributeFilter: ['style', 'class']
            });

            // Fallback: 2 saniye sonra yine de başlat
            setTimeout(() => {
                observer.disconnect();
                runOnce();
            }, 2000);
        } else {
            // Loader yoksa direkt başlat
            runOnce();
        }
    }

    /**
     * Services - Magnetic Button Efekti
     * Ok butonları mouse'a doğru çekilir
     */
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.magnetic-btn');
        if (buttons.length === 0) return;

        const config = {
            strength: 0.4,      // Çekim gücü (0-1)
            radius: 80,         // Etki alanı (px)
            duration: 0.3       // Animasyon süresi
        };

        buttons.forEach(btn => {
            const btnRect = btn.getBoundingClientRect();

            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const deltaX = e.clientX - centerX;
                const deltaY = e.clientY - centerY;

                // Mouse'a doğru çekil
                gsap.to(btn, {
                    x: deltaX * config.strength,
                    y: deltaY * config.strength,
                    duration: config.duration,
                    ease: 'power2.out'
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: config.duration,
                    ease: 'elastic.out(1, 0.5)'
                });
            });
        });
    }

    /**
     * Services - Hover Lift Efekti
     */
    function initServiceCardsHover() {
        const cards = document.querySelectorAll('.service-card');
        if (cards.length === 0) return;

        cards.forEach(card => {
            const content = card.querySelector('.service-card-content');
            const img = card.querySelector('.service-card-img img');

            card.addEventListener('mouseenter', () => {
                // Kart yukarı kalkar
                gsap.to(card, {
                    y: -10,
                    duration: 0.3,
                    ease: 'power2.out'
                });

                // İçerik kutusu daha yukarı
                if (content) {
                    gsap.to(content, {
                        y: -5,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }

                // Görsel zoom
                if (img) {
                    gsap.to(img, {
                        scale: 1.1,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });

                if (content) {
                    gsap.to(content, {
                        y: 0,
                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }

                if (img) {
                    gsap.to(img, {
                        scale: 1,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }

    /**
     * Tüm animasyonları başlat
     */
    function initAllAnimations() {
        // Hero animasyonları
        initHeroAnimations();

        // Why Choose Us animasyonları
        initTiltCards();
        initCounterAnimation();
        initWhyChooseParallax();
        initCardsReveal();

        // Services animasyonları
        initMagneticButtons();
        initServiceCardsHover();
    }

    // DOM hazır olduğunda
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
