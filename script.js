/* ═══════════════════════════════════════════════════════════════
   سيرفر رين — REN RP  |  Interactions & Animations
═══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ─── Loader ─────────────────────────────────────────────
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.classList.add('hidden');
      setTimeout(() => loader && loader.remove(), 700);
    }, 1400);
  });

  // ─── Mobile Menu Toggle ─────────────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });

    // إغلاق القائمة عند الضغط على رابط
    sidebar.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('open');
          menuToggle.classList.remove('open');
        }
      });
    });

    // إغلاق القائمة عند الضغط خارجها
    document.addEventListener('click', (e) => {
      if (
        window.innerWidth <= 768 &&
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        sidebar.classList.remove('open');
        menuToggle.classList.remove('open');
      }
    });
  }

  // ─── Active Nav Link on Scroll ──────────────────────────
  const sections = document.querySelectorAll('main > section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    const scrollPos = window.scrollY + 120;
    let current = '';

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ─── Smooth scroll for nav links ───────────────────────
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 30;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  // ─── Counter animation ────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  let countersStarted = false;

  function animateCounters() {
    if (countersStarted) return;
    countersStarted = true;

    counters.forEach(counter => {
      const target = parseInt(counter.dataset.count, 10);
      const suffix = counter.parentElement.querySelector('[data-suffix]')?.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const value = Math.floor(eased * target);
        counter.textContent = value + (progress === 1 && suffix ? '' : '');
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    });
  }

  // تشغيل العداد عند رؤية القسم
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) heroObserver.observe(heroStats);

  // ─── Reveal on scroll ─────────────────────────────────
  const revealEls = document.querySelectorAll('.rule, .concept, .price-card, .robbery-card, .duration-card, .info-box, .ct-row, .section-head');
  revealEls.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // تأخير صغير لإعطاء أثر staggered
        const delay = Math.random() * 80;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // ─── Back to top ──────────────────────────────────────
  const backTop = document.getElementById('backTop');
  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Keyboard nav ─────────────────────────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      menuToggle.classList.remove('open');
    }
  });

})();
