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
	cssEase: 'linear'
});

$('.reviews__slick').slick({
	dots: true,
	dotsClass: "my-dots",
	infinite: true,
	slidesToShow: 2,
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

callbackOpen.addEventListener('click', function (e) {
	popupCallback.classList.remove('hidden')
	e.preventDefault();
})

var popupClose = document.querySelector('.popup__close')
popupClose.addEventListener('click', function (e) {
	popupCallback.classList.add('hidden')
	e.preventDefault();
})


var callbackOpen2 = document.querySelector('.call-back__button2')
callbackOpen2.addEventListener('click', function (e) {
	popupCallback.classList.remove('hidden')
	e.preventDefault();
})

// Скрытие попапа при клике на пустом месте
$(".popup-tnx").on('click', function (e) {
	if (e.target == this) $(".popup-tnx").addClass('hidden');
})
$(".popup-callback").on('click', function (e) {
	if (e.target == this) $(".popup-callback").addClass('hidden');
})