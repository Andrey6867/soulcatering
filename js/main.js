$(function () {

	(function mobileMenu() {
		let $btn = $('.hamburger');
		let $menu = $('.header__nav');
		let $overlay = $('.overlay')

		$btn.on('click' , function() {

			$(this).toggleClass('is-active').next().toggleClass('active');
			$overlay.fadeToggle();
			$('body, html').toggleClass('no-scroll')


		});

		$overlay.on('click', function() {

			$(this).toggleClass('is-active').next().toggleClass('active');
			$overlay.fadeToggle();
			$('body, html').toggleClass('no-scroll')


		}) 


	})();

});