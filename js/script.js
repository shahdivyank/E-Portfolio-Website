$(document).ready(function () {
	let isChrome = navigator.userAgent.indexOf('Chrome')
	if (isChrome <= -1) {
		$("a").on('click', function (event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function () {
					window.location.hash = hash;
				});
			}
		});
	}
});

function dark_mode() {
	$("*").not("#fieldset *").css("backgroundColor", "#111111");
	$("*").not("#fieldset *").css("--text_color", "white");
	$("*").not("#fieldset *").css("color", "white");
	$("*").not("#fieldset *").css("--text_background", "#111111");
	$("*").not("#fieldset *").css("--placeholder", "white");
	$(".button, .card").css("border-color", "white");
	$("ul li a").css("color", "white");
	$(".required p").css("color", "lightcoral");

	$(".card a").hover(function () {
		$(this).css("background-color", "white");
		$(this).css("color", "black");
	}, function () {
		$(this).css("background-color", "black");
		$(this).css("color", "white");
		
	});
}

function light_mode() {
	$("*").not("#fieldset *").css("backgroundColor", "white");
	$("*").not("#fieldset *").css("--text_color", "black");
	$("*").not("#fieldset *").css("color", "black");
	$("*").not("#fieldset *").css("--text_background", "white");
	$("*").not("#fieldset *").css("--placeholder", "gray");
	$(".button, .card").css("border-color", "black");
	$("ul li a").css("color", "black");
	$(".required p").css("color", "lightcoral");

	$(".card a").hover(function () {
		$(this).css("background-color", "black");
		$(this).css("color", "white");
	}, function () {
		$(this).css("background-color", "white");
		$(this).css("color", "black");
		
	});
}

function auto_mode() {
	if (window.matchMedia) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			dark_mode();
		} else {
			light_mode();
		}
	}
}