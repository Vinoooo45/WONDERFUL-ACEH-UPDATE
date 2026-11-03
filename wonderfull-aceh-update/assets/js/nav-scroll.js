/* ==========================================================
   Scroll ke section di halaman utama (index.html)
   Muat paling akhir, setelah custom.js dan page-transition.js.

   Versi ini tidak bergantung pada jQuery dan memakai fase "capture",
   jadi jalan lebih dulu daripada handler lain (custom.js template,
   page-transition.js) dan menghentikan mereka untuk link #section.
   ========================================================== */
(function () {
    'use strict';

    var OFFSET = 80; // tinggi header sticky
    var reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Matikan handler scroll lama milik template (kalau ada jQuery)
    if (window.jQuery) {
        window.jQuery(document).off('scroll');
    }

    function sectionTop(hash) {
        if (hash === '#top') return 0;
        var el = document.querySelector(hash);
        if (!el) return null;
        return Math.max(el.getBoundingClientRect().top + window.pageYOffset - OFFSET + 1, 0);
    }

    function closeMobileMenu() {
        if (window.innerWidth > 767) return;
        var nav = document.querySelector('.header-area .main-nav .nav');
        var trigger = document.querySelector('.menu-trigger');
        if (nav) nav.style.display = 'none';
        if (trigger) trigger.classList.remove('active');
    }

    // Klik menu (#about, #features, ...) atau tombol panah ke bawah
    document.addEventListener('click', function (e) {
        var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
        if (!link) return;

        var hash = link.getAttribute('href');
        if (!hash || hash === '#') return;

        var top;
        try { top = sectionTop(hash); } catch (err) { return; }
        if (top === null) return;

        // hentikan semua handler lain untuk klik ini
        e.preventDefault();
        e.stopImmediatePropagation();

        window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
        if (history.replaceState) history.replaceState(null, '', hash);
        closeMobileMenu();
    }, true);

    // Tandai menu aktif sesuai posisi scroll
    var spyLinks = Array.prototype.slice.call(
        document.querySelectorAll('.main-nav .nav li.scroll-to-section a[href^="#"]')
    );

    function spy() {
        var y = window.pageYOffset + OFFSET + 20;
        var current = null;
        spyLinks.forEach(function (a) {
            var top = sectionTop(a.getAttribute('href'));
            if (top !== null && top + OFFSET - 1 <= y) current = a;
        });
        if (!current) return;
        spyLinks.forEach(function (a) { a.classList.remove('active'); });
        current.classList.add('active');
    }

    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener('resize', spy);
    window.addEventListener('load', spy);
    spy();
})();