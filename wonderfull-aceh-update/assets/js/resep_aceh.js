/* Halaman Resep - Wonderful Aceh
   Setiap bahan: [jumlah untuk porsi asli, satuan, nama]. Jumlah null = "secukupnya" (tidak dikali). */
(function () {
    'use strict';

    var MIN_PORSI = 1, MAX_PORSI = 12;

    var RESEP = [
        {
            id: 'mie-aceh', nama: 'Mie Aceh Goreng', tag: 'Makanan Utama', img: 'assets/images/mie-aceh.jpg',
            porsi: 4, waktu: '30 menit', level: 'Mudah',
            intro: 'Mie kuning tebal berbumbu rempah kuat, pedas, dan gurih. Isinya bisa udang, daging sapi, atau cumi.',
            bahan: [
                { g: 'Bahan utama', i: [
                    [400, 'g', 'mi kuning tebal, rebus setengah matang'],
                    [250, 'g', 'udang atau daging sapi iris tipis'],
                    [2, 'buah', 'tomat, potong'],
                    [100, 'g', 'tauge'],
                    [2, 'batang', 'daun bawang'],
                    [2, 'sdm', 'kecap manis'],
                    [3, 'sdm', 'minyak goreng'],
                    [null, '', 'garam']
                ]},
                { g: 'Bumbu halus', i: [
                    [6, 'siung', 'bawang merah'],
                    [4, 'siung', 'bawang putih'],
                    [5, 'buah', 'cabai merah keriting'],
                    [3, 'butir', 'kemiri'],
                    [1, 'sdt', 'ketumbar sangrai'],
                    [0.5, 'sdt', 'jintan'],
                    [3, 'butir', 'kapulaga'],
                    [1, 'sdt', 'bubuk kari']
                ]}
            ],
            langkah: [
                'Tumis bumbu halus dengan minyak sampai harum dan matang, sekitar 5 menit.',
                'Masukkan udang atau daging, masak sampai berubah warna.',
                'Tambahkan tomat dan kecap manis, aduk rata.',
                'Masukkan mi dan tauge, aduk dengan api besar selama 3 menit.',
                'Tambahkan daun bawang dan garam. Sajikan dengan emping, acar, dan jeruk nipis.'
            ],
            tips: 'Tidak ada mi tebal? Spageti rebus atau mi telur lebar bisa dipakai.'
        },
        {
            id: 'kuah-beulangong', nama: 'Kuah Beulangong', tag: 'Makanan Utama', img: 'assets/images/kuah-beulangong.jpg',
            porsi: 5, waktu: '90 menit', level: 'Sedang',
            intro: 'Gulai daging berkuah santan kental dengan nangka muda, biasa disajikan saat kenduri. Cocok dengan nasi hangat.',
            bahan: [
                { g: 'Bahan utama', i: [
                    [500, 'g', 'daging kambing atau sapi, potong'],
                    [200, 'g', 'nangka muda, potong'],
                    [500, 'ml', 'santan kental'],
                    [500, 'ml', 'air'],
                    [2, 'batang', 'serai, memarkan'],
                    [3, 'lembar', 'daun kari'],
                    [2, 'lembar', 'daun jeruk'],
                    [1, 'sdm', 'asam sunti (atau belimbing wuluh)'],
                    [null, '', 'garam']
                ]},
                { g: 'Bumbu halus', i: [
                    [8, 'siung', 'bawang merah'],
                    [5, 'siung', 'bawang putih'],
                    [6, 'buah', 'cabai merah keriting'],
                    [3, 'cm', 'kunyit'],
                    [3, 'cm', 'jahe'],
                    [4, 'butir', 'kemiri'],
                    [1, 'sdm', 'ketumbar'],
                    [1, 'sdt', 'lada']
                ]},
                { g: 'Rempah utuh', i: [
                    [3, 'butir', 'kapulaga'],
                    [1, 'batang', 'kayu manis'],
                    [3, 'butir', 'cengkeh']
                ]}
            ],
            langkah: [
                'Rebus daging dengan air secukupnya 30 menit sampai setengah empuk, buang busanya.',
                'Tumis bumbu halus bersama rempah utuh, serai, daun kari, dan daun jeruk sampai harum.',
                'Masukkan tumisan ke rebusan daging bersama nangka muda dan asam sunti.',
                'Tuang santan sedikit demi sedikit sambil diaduk supaya tidak pecah.',
                'Masak dengan api kecil sekitar 45 menit sampai daging empuk dan kuah mengental.'
            ],
            tips: 'Pakai panci presto untuk merebus daging, waktunya jadi sekitar 20 menit.'
        },
        {
            id: 'ayam-pramugari', nama: 'Ayam Pramugari', tag: 'Makanan Utama', img: 'assets/images/ayam-pramugari.jpg',
            porsi: 4, waktu: '45 menit', level: 'Mudah',
            intro: 'Ayam goreng yang ditumpuki daun kari, daun pandan, dan cabai hijau goreng yang renyah. Di beberapa tempat dikenal sebagai ayam tangkap.',
            bahan: [
                { g: 'Ayam', i: [
                    [1, 'ekor', 'ayam, potong 8 bagian'],
                    [4, 'siung', 'bawang putih, haluskan'],
                    [3, 'cm', 'kunyit, haluskan'],
                    [1, 'sdt', 'garam'],
                    [0.5, 'sdt', 'lada'],
                    [null, '', 'minyak untuk menggoreng']
                ]},
                { g: 'Taburan', i: [
                    [5, 'genggam', 'daun kari, buang tangkai'],
                    [6, 'lembar', 'daun pandan, iris halus'],
                    [3, 'batang', 'serai, iris tipis'],
                    [10, 'buah', 'cabai hijau, iris serong'],
                    [6, 'siung', 'bawang merah, iris tipis']
                ]}
            ],
            langkah: [
                'Lumuri ayam dengan bumbu halus, garam, dan lada. Diamkan 30 menit.',
                'Goreng ayam sampai matang keemasan, angkat dan tiriskan.',
                'Di minyak yang sama, goreng bawang merah, serai, dan cabai hijau, lalu daun kari dan pandan sampai kering renyah.',
                'Tumpuk taburan di atas ayam dan sajikan selagi panas.'
            ],
            tips: 'Di Aceh dipakai daun temurui. Kalau sulit dicari, daun kari dan pandan sudah cukup dekat aromanya.'
        },
        {
            id: 'sie-reuboh', nama: 'Sie Reuboh', tag: 'Makanan Utama', img: 'assets/images/sie-reuboh.jpg',
            porsi: 6, waktu: '75 menit', level: 'Mudah',
            intro: 'Daging yang direbus dengan cuka dan bumbu. Awet disimpan dan rasanya makin meresap setelah didiamkan semalam.',
            bahan: [
                { g: 'Bahan', i: [
                    [500, 'g', 'daging sapi berlemak sedikit, potong kotak'],
                    [100, 'ml', 'cuka (cuka aren jika ada)'],
                    [8, 'siung', 'bawang merah, iris'],
                    [5, 'siung', 'bawang putih, iris'],
                    [10, 'buah', 'cabai merah, iris kasar'],
                    [3, 'cm', 'jahe, geprek'],
                    [2, 'cm', 'kunyit, memarkan'],
                    [1, 'sdt', 'lada butir'],
                    [300, 'ml', 'air'],
                    [null, '', 'garam']
                ]}
            ],
            langkah: [
                'Masukkan semua bahan ke panci bersama air.',
                'Didihkan, lalu kecilkan api.',
                'Rebus sekitar 60 menit sambil sesekali diaduk sampai daging empuk dan air menyusut.',
                'Koreksi rasa. Sajikan dengan nasi putih.'
            ],
            tips: 'Panaskan kembali sebelum disantap kalau disimpan semalam.'
        },
        {
            id: 'bu-sie-itek', nama: 'Bu Sie Itek', tag: 'Makanan Utama', img: 'assets/images/bue sie itiek.jpg',
            porsi: 4, waktu: '90 menit', level: 'Sedang',
            intro: 'Nasi putih hangat dengan sie itek, masakan itik berkuah rempah yang tidak berbau amis dan jadi andalan warung makan Aceh.',
            bahan: [
                { g: 'Itik dan kuah', i: [
                    [800, 'g', 'daging itik, potong sedang'],
                    [1, 'buah', 'jeruk nipis, untuk melumuri itik'],
                    [300, 'ml', 'santan kental'],
                    [400, 'ml', 'air'],
                    [2, 'batang', 'serai, memarkan'],
                    [3, 'lembar', 'daun kari'],
                    [1, 'sdm', 'asam sunti (atau 3 belimbing wuluh)'],
                    [3, 'sdm', 'minyak goreng'],
                    [null, '', 'garam']
                ]},
                { g: 'Bumbu halus', i: [
                    [8, 'siung', 'bawang merah'],
                    [5, 'siung', 'bawang putih'],
                    [6, 'buah', 'cabai merah keriting'],
                    [3, 'cm', 'kunyit'],
                    [3, 'cm', 'jahe'],
                    [4, 'butir', 'kemiri'],
                    [1, 'sdm', 'ketumbar'],
                    [1, 'sdt', 'lada']
                ]},
                { g: 'Rempah utuh', i: [
                    [3, 'butir', 'kapulaga'],
                    [1, 'batang', 'kayu manis'],
                    [3, 'butir', 'cengkeh']
                ]},
                { g: 'Penyajian', i: [
                    [4, 'piring', 'nasi putih hangat']
                ]}
            ],
            langkah: [
                'Lumuri itik dengan air jeruk nipis dan sedikit garam, diamkan 15 menit, lalu cuci bersih. Ini mengurangi bau amis.',
                'Rebus itik dengan air sampai mendidih sekitar 10 menit, buang air rebusan pertama dan busanya.',
                'Tumis bumbu halus bersama rempah utuh, serai, dan daun kari sampai harum dan matang.',
                'Masukkan itik, aduk sampai bumbu merata, lalu tuang air dan asam sunti. Masak dengan api kecil sampai itik hampir empuk.',
                'Tuang santan sedikit demi sedikit sambil diaduk. Masak sampai itik empuk dan kuah mengental, lalu beri garam. Sajikan dengan nasi hangat.'
            ],
            tips: 'Daging itik lebih alot daripada ayam, jadi sabar dengan api kecil. Panci presto bisa memangkas waktu menjadi sekitar 40 menit.'
        },
        {
            id: 'keumamah', nama: 'Keumamah', tag: 'Makanan Utama', img: 'assets/images/keumamah.jpg',
            porsi: 4, waktu: '40 menit', level: 'Sedang',
            intro: 'Gulai ikan kayu, yaitu tongkol yang direbus lalu dikeringkan, dimasak dengan asam sunti, kunyit, dan daun kari. Dulu jadi bekal para pejuang Aceh karena bisa disimpan lama.',
            bahan: [
                { g: 'Bahan utama', i: [
                    [400, 'g', 'ikan kayu (atau tongkol/cakalang asap), iris tipis'],
                    [400, 'ml', 'air'],
                    [200, 'ml', 'santan encer'],
                    [5, 'buah', 'asam sunti (atau 3 belimbing wuluh)'],
                    [5, 'lembar', 'daun kari'],
                    [5, 'buah', 'cabai merah, iris serong'],
                    [1, 'buah', 'tomat, potong'],
                    [2, 'batang', 'serai, memarkan'],
                    [2, 'sdm', 'minyak goreng'],
                    [null, '', 'garam']
                ]},
                { g: 'Bumbu halus', i: [
                    [8, 'siung', 'bawang merah'],
                    [4, 'siung', 'bawang putih'],
                    [6, 'buah', 'cabai merah keriting'],
                    [2, 'cm', 'kunyit'],
                    [2, 'cm', 'jahe'],
                    [3, 'butir', 'kemiri'],
                    [1, 'sdt', 'ketumbar']
                ]}
            ],
            langkah: [
                'Rendam irisan ikan kayu dengan air panas selama 10 menit supaya lunak, tiriskan dan peras.',
                'Tumis bumbu halus bersama serai dan daun kari sampai harum.',
                'Masukkan ikan kayu, aduk rata dengan bumbu.',
                'Tuang air, santan, dan asam sunti. Masak dengan api sedang sambil sesekali diaduk.',
                'Tambahkan cabai dan tomat, masak sampai kuah menyusut dan bumbu meresap, sekitar 15 menit. Koreksi rasa.'
            ],
            tips: 'Ikan kayu mudah dibeli di Banda Aceh, tapi di luar Aceh bisa diganti tongkol atau cakalang asap. Tambah cabai rawit kalau suka lebih pedas.'
        }
    ];

    var $ = function (id) { return document.getElementById(id); };
    var picker = $('rsPicker'), count = $('rsCount');
    var current = RESEP[0], porsi = current.porsi;

    /* ---------- format angka ---------- */
    var PECAHAN = { 0.25: '¼', 0.5: '½', 0.75: '¾' };

    function bulat(q, satuan) {
        var step = (satuan === 'g' || satuan === 'ml') ? 5 : (satuan === 'sdm' || satuan === 'sdt') ? 0.25 : 0.5;
        var v = Math.round(q / step) * step;
        return v < step ? step : v;
    }

    function format(q, satuan) {
        var v = bulat(q, satuan);
        if (satuan === 'g' && v >= 1000) { v /= 1000; satuan = 'kg'; }
        else if (satuan === 'ml' && v >= 1000) { v /= 1000; satuan = 'liter'; }

        var teks;
        if (satuan === 'kg' || satuan === 'liter') {
            teks = String(+v.toFixed(2)).replace('.', ',');
        } else {
            var bulatan = Math.floor(v), sisa = v - bulatan;
            teks = (bulatan ? bulatan : '') + (sisa ? PECAHAN[sisa] : '');
        }
        return teks + ' ' + satuan;
    }

    /* ---------- render ---------- */
    function renderPicker() {
        picker.innerHTML = '';
        RESEP.forEach(function (r) {
            var b = document.createElement('button');
            b.type = 'button';
            b.className = 'rs-pick';
            b.setAttribute('role', 'tab');
            b.setAttribute('aria-selected', r === current ? 'true' : 'false');
            b.innerHTML = '<img src="' + r.img + '" alt="" onerror="this.style.visibility=\'hidden\'"><span>' + r.nama + '</span>';
            b.addEventListener('click', function () { pilih(r); });
            picker.appendChild(b);
        });
    }

    function renderBahan() {
        var faktor = porsi / current.porsi;
        $('rsIngredients').innerHTML = current.bahan.map(function (grup) {
            var baris = grup.i.map(function (b) {
                var qty = b[0] === null ? 'secukupnya' : format(b[0] * faktor, b[1]);
                return '<li><span class="rs-qty">' + qty + '</span><span>' + b[2] + '</span></li>';
            }).join('');
            return '<div class="rs-group">' + grup.g + '</div><ul class="rs-ing">' + baris + '</ul>';
        }).join('');
    }

    function renderPorsi() {
        count.textContent = porsi;
        $('rsMinus').disabled = porsi <= MIN_PORSI;
        $('rsPlus').disabled = porsi >= MAX_PORSI;
        $('rsReset').hidden = porsi === current.porsi;
        $('rsReset').textContent = 'Kembali ke ' + current.porsi + ' porsi';
        renderBahan();
    }

    function renderResep() {
        var img = $('rsImg');
        img.style.visibility = 'visible';
        img.onerror = function () { img.style.visibility = 'hidden'; };
        img.src = current.img;
        img.alt = current.nama;
        $('rsTag').textContent = current.tag;
        $('rsTitle').textContent = current.nama;
        $('rsIntro').textContent = current.intro;
        $('rsTime').textContent = current.waktu;
        $('rsLevel').textContent = current.level;
        $('rsSteps').innerHTML = current.langkah.map(function (s) { return '<li>' + s + '</li>'; }).join('');
        $('rsTip').innerHTML = '<strong>Tips:</strong> ' + current.tips;
        renderPorsi();
    }

    function pilih(r, tanpaHash) {
        current = r;
        porsi = r.porsi;
        renderPicker();
        renderResep();
        if (!tanpaHash && window.history.replaceState) {
            window.history.replaceState(null, '', '#' + r.id);
        }
    }

    /* ---------- event ---------- */
    $('rsMinus').addEventListener('click', function () { if (porsi > MIN_PORSI) { porsi--; renderPorsi(); } });
    $('rsPlus').addEventListener('click', function () { if (porsi < MAX_PORSI) { porsi++; renderPorsi(); } });
    $('rsReset').addEventListener('click', function () { porsi = current.porsi; renderPorsi(); });

    /* buka resep dari hash, contoh: resep_aceh.html#sie-reuboh */
    var awal = RESEP.filter(function (r) { return '#' + r.id === window.location.hash; })[0];
    pilih(awal || RESEP[0], true);
})();