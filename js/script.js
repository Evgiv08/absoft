"use strict";

$('.slider').slick({
	dots: true,
	arrows: false
});

$(".price-mob-enter .hide-show").click(function () {
	if ($(".price-mob-enter ul").is(':hidden')) {
		$(".price-mob-enter ul").show(400);
		$(".price-mob-enter .hide-show").html('<img src="img/arrow-mob-up.svg" alt="arrow">');
	} else {
		$(".price-mob-enter ul").hide(400);
		$(".price-mob-enter .hide-show").html('LEARN MORE <img src="img/arrow-mob.svg" alt="arrow">');
	}
});

$(".price-mob-prem .hide-show").click(function () {
	if ($(".price-mob-prem ul").is(':hidden')) {
		$(".price-mob-prem ul").show(400);
		$(".price-mob-prem .hide-show").html('<img src="img/arrow-mob-up.svg" alt="arrow">');
	} else {
		$(".price-mob-prem ul").hide(400);
		$(".price-mob-prem .hide-show").html('LEARN MORE <img src="img/arrow-mob.svg" alt="arrow">');
	}
});

$(".price-mob-stand .hide-show").click(function () {
	if ($(".price-mob-stand ul").is(':hidden')) {
		$(".price-mob-stand ul").show(400);
		$(".price-mob-stand .hide-show").html('<img src="img/arrow-mob-up.svg" alt="arrow">');
	} else {
		$(".price-mob-stand ul").hide(400);
		$(".price-mob-stand .hide-show").html('LEARN MORE <img src="img/arrow-mob.svg" alt="arrow">');
	}
});

$(".see-more-btn").click(function () {
	$(".price").css("height", "819px");
	$(".see-more-btn").css("display", "none");
	$(".not-show-btn").css("display", "initial");
});

$(".not-show-btn").click(function () {
	$(".price").css("height", "");
	$(".see-more-btn").css("display", "");
	$(".not-show-btn").css("display", "");
});
//# sourceMappingURL=script.js.map
