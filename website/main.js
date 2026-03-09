// ── SU HÀO Interior — Main JavaScript ──

document.addEventListener('DOMContentLoaded', () => {

    // ── Navbar Scroll Effect ──
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ── Mobile Menu ──
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('mobileMenu');
    const close = document.getElementById('mobileClose');
    if (toggle && menu) {
        toggle.addEventListener('click', () => menu.classList.add('active'));
        if (close) close.addEventListener('click', () => menu.classList.remove('active'));
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => menu.classList.remove('active'));
        });
    }

    // ── Scroll Reveal ──
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = document.querySelectorAll('.reveal');

    if (!prefersReducedMotion && reveals.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        reveals.forEach(el => observer.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('active'));
    }

    // ── Counter Animation ──
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count);
                    const suffix = el.dataset.suffix || '';
                    const prefix = el.dataset.prefix || '';
                    let current = 0;
                    const step = Math.ceil(target / 60);
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        el.textContent = prefix + current + (current >= 100 ? '+' : '') + suffix;
                    }, 30);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(el => counterObserver.observe(el));
    }

    // ── Back to Top ──
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            backBtn.classList.toggle('visible', window.scrollY > 500);
        });
        backBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── Portfolio Filter ──
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-grid-item');

    if (filterBtns.length && projectCards.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;

                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = '';
                        card.style.animation = 'fadeInUp 0.4s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ── Form Validation (Contact page) ──
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.textContent = 'Đang gửi...';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = 'Đã gửi thành công!';
                btn.style.background = '#22c55e';
                setTimeout(() => {
                    btn.textContent = 'Gửi yêu cầu tư vấn';
                    btn.style.background = '';
                    btn.disabled = false;
                    form.reset();
                }, 3000);
            }, 1500);
        });
    }

});
