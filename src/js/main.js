// maskinput
$(function () {
	$(".phone_mask").mask("8(999) 999-9999");
});

// Кнопка каталога в шапке
var buttonCatalog = document.querySelector('.button__catalog');
var catalogOpen = document.querySelector('.header__catalog--open');

buttonCatalog.addEventListener('click', function () {
	catalogOpen.classList.toggle('hidden')
})

// slick

$('.gallery__slick').slick({
	dots: true,
	dotsClass: "my-dots",
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	responsive: [{
		breakpoint: 481,
		settings: {
			dots: false
		}
	}]
});

$('.reviews__slick').slick({
	dots: true,
	dotsClass: "my-dots",
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 481,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '10px',
			slidesToShow: 1
		}
	}]
});

$('.catalog__items_slider').slick({
	dots: false,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 768,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '10px',
			slidesToShow: 3
		}
	},
	{
		breakpoint: 481,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '10px',
			slidesToShow: 2
		}
	},
]
});

$('.our-production__slick').slick({
	dots: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1
});

$(document).ready(function () {

	/* This is basic - uses default settings */

	$("a#single_image").fancybox();

	/* Using custom settings */

	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */

	$("a.group").fancybox({
		'transitionIn': 'elastic',
		'transitionOut': 'elastic',
		'speedIn': 600,
		'speedOut': 200,
		'overlayShow': false
	});

});

// Появление попапа
var callbackOpen = document.querySelector('.call-back__button')
var popupCallback = document.querySelector('.popup-callback')
var popupClose = document.querySelector('.popup__close')


callbackOpen.addEventListener('click', function (e) {
	popupCallback.classList.remove('hidden')
	e.preventDefault();
})
popupClose.addEventListener('click', function (e) {
	popupCallback.classList.add('hidden')
	e.preventDefault();
})

var writeOpen = document.querySelector('.write__button')
var popupWrite = document.querySelector('.popup-write')
var popupClose3 = document.querySelector('.popup__close3')


writeOpen.addEventListener('click', function (e) {
	popupWrite.classList.remove('hidden')
	e.preventDefault();
})
popupClose3.addEventListener('click', function (e) {
	popupWrite.classList.add('hidden')
	e.preventDefault();
})



// Скрытие попапа при клике на пустом месте
$(".popup-tnx").on('click', function (e) {
	if (e.target == this) $(".popup-tnx").addClass('hidden');
})
$(".popup-callback").on('click', function (e) {
	if (e.target == this) $(".popup-callback").addClass('hidden');
})
$(".popup-write").on('click', function (e) {
	if (e.target == this) $(".popup-write").addClass('hidden');
})

// Появление меню

var clickMenuButton = document.querySelector('.button__menu');
var mobileMenu = document.querySelector('.header__nav--mobile-menu');

clickMenuButton.addEventListener('click', function () {
	mobileMenu.classList.toggle('hidden')
})

