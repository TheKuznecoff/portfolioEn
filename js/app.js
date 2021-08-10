$(function () {

	/*модальные окна*/
	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");

	modalCall.on("click", function (event) {
		event.preventDefault();

		let $this = $(this);
		let modalId = $this.data('modal');

		$(modalId).addClass('show');
		$("body").addClass('no-scroll');

	});

	modalClose.on("click", function (event) {
		event.preventDefault();

		let $this = $(this);
		let modalParent = $this.parents('.modal');

		modalParent.removeClass('show');
		$("body").removeClass('no-scroll');

	});

	$(".modal").on("click", function (event) {
		$(this).removeClass('show');
		$("body").removeClass('no-scroll');

	});

	$(".modal__dialog").on("click", function (event) {
		event.stopPropagation();

	});
	var elements = $('.modal');



	/*Smooth scroll*/
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top - 80;

		$("html, body").animate({
			scrollTop: blockOffset
		});

	});

	/*Burger*/
	$('.burger, .nav').click(function(event) {
		$('.burger,.nav').toggleClass('active');
			$('body').toggleClass('lock');
	});

});