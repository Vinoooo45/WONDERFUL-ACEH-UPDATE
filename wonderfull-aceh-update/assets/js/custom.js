(function ($) {

	"use strict";

	// Tinggi header sticky (dipakai untuk offset scroll ke section)
	var HEADER_OFFSET = 79;

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});


	// ----- Plugin opsional: hanya jalan kalau plugin-nya dimuat di halaman -----
	var $grid = null;
	if ($.fn.isotope) {
	  $grid = $(".grid").isotope({
	    itemSelector: ".all",
	    percentPosition: true,
	    masonry: {
	      columnWidth: ".all"
	    }
	  });
	}

	$('.filters ul li').click(function(){
	  $('.filters ul li').removeClass('active');
	  $(this).addClass('active');

	  var data = $(this).attr('data-filter');
	  if ($grid) $grid.isotope({ filter: data });
	});

	if ($.fn.slick) {
	  $(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'linear',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>',
	  });
	}

	$('.search-icon a').on("click", function(event) {
	    event.preventDefault();
	    $("#search").addClass("open");
	    $('#search > form > input[type="search"]').focus();
	  });

	  $("#search, #search button.close").on("click keyup", function(event) {
	    if (
	      event.target == this ||
	      event.target.className == "close" ||
	      event.keyCode == 27
	    ) {
	      $(this).removeClass("open");
	    }
	  });

	  $("#search-box").submit(function(event) {
	    event.preventDefault();
	    return false;
	  });


	if ($.fn.owlCarousel) {
	  $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    pagination:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	  });
	}

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	if (typeof scrollReveal === 'function') {
	  window.sr = new scrollReveal();
	}


	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// ----- Scroll halus ke section (SATU handler untuk semua link #section) -----
	// Menggantikan dua handler lama yang saling bentrok dan mengisi hash
	// URL dengan objek jQuery (jadi "#[object Object]").
	$('a[href^="#"]:not([href="#"])').on('click', function (e) {
		var target = $(this.hash);
		if (!target.length) return;

		e.preventDefault();

		// tutup menu mobile kalau sedang terbuka
		if ($(window).width() < 991) {
			$('.menu-trigger').removeClass('active');
			$('.header-area .nav').slideUp(200);
		}

		var hash = this.hash;
		$('html, body').stop().animate({
			scrollTop: Math.max(target.offset().top - HEADER_OFFSET, 0)
		}, 600, 'swing', function () {
			if (window.history && history.replaceState) {
				history.replaceState(null, '', hash);
			}
		});
	});


	// ----- Tandai menu aktif sesuai posisi scroll -----
	// Hanya memeriksa link yang berawalan "#", jadi link ke halaman lain
	// (kuliner_aceh.html, sejarah-aceh.html) tidak ikut dan tidak error.
	function onScroll() {
		var scrollPos = $(window).scrollTop() + HEADER_OFFSET + 20;
		var $links = $('.nav a[href^="#"]:not([href="#"])');

		$links.each(function () {
			var ref = $(this.hash);
			if (!ref.length) return;

			var top = ref.offset().top;
			if (top <= scrollPos && top + ref.outerHeight() > scrollPos) {
				$links.removeClass('active');
				$(this).addClass('active');
			}
		});
	}
	$(window).on('scroll', onScroll);
	$(window).on('load', onScroll);


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length && $.fn.parallax){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);