/* ==========================================================
   Sejarah Aceh - Wonderful Aceh
   Fitur: filter babak, animasi masuk, tombol ke atas
   ========================================================== */
(function () {
    'use strict';

    var timeline = document.getElementById('timeline');
    if (!timeline) return;

    var filterWrap = document.getElementById('eraFilter');
    var chips = filterWrap ? filterWrap.querySelectorAll('.chip') : [];
    var entries = timeline.querySelectorAll('.tl-era, .tl-item');
    var items = timeline.querySelectorAll('.tl-item');
    var toTop = document.getElementById('toTop');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- Selang-seling kiri/kanan (hanya item yang terlihat) ---- */
    function layoutSides() {
        var n = 0;
        items.forEach(function (item) {
            if (item.classList.contains('is-hidden')) return;
            item.classList.toggle('right', n % 2 === 1);
            n++;
        });
    }

    /* ---- Filter babak ---- */
    function applyFilter(era) {
        entries.forEach(function (el) {
            var show = era === 'all' || el.getAttribute('data-era') === era;
            el.classList.toggle('is-hidden', !show);
        });
        layoutSides();
        revealVisible();
    }

    chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            chips.forEach(function (c) { c.classList.remove('active'); });
            chip.classList.add('active');
            applyFilter(chip.getAttribute('data-filter'));
        });
    });

    /* ---- Animasi masuk saat di-scroll ---- */
    var observer = null;
    if ('IntersectionObserver' in window && !reduceMotion) {
        observer = new IntersectionObserver(function (list) {
            list.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
    }

    function revealVisible() {
        items.forEach(function (item) {
            if (item.classList.contains('is-hidden')) return;
            if (!observer) { item.classList.add('in'); return; }
            if (!item.classList.contains('in')) observer.observe(item);
        });
    }

    /* ---- Tombol kembali ke atas ---- */
    if (toTop) {
        window.addEventListener('scroll', function () {
            toTop.classList.toggle('show', window.scrollY > 600);
        }, { passive: true });
        toTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
        });
    }

    /* ---- Mulai ---- */
    document.documentElement.classList.add('js-ready');
    layoutSides();
    revealVisible();
})();