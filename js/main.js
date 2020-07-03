//@prepros-append jq-start.js
//@prepros-append forms.js
//@prepros-append script.js
//@prepros-append jq-end.js


var cc = document.getElementById('phone');
var oc = 1;
function phone() {
	if (oc == 1) {
		oc++;
		cc.style.display="block";
	}else{
		oc--;
		cc.style.display="none";
	}
}

var cc1 = document.getElementById('phone2');
var oc1 = 1;
function phone1() {
	if (oc1 == 1) {
		oc1++;
		cc1.style.opacity="1";
	}else{
		oc1--;
		cc1.style.opacity="0";
	}
}

$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		adaptiveHeight: false,
		slideToShow: 3,
		autoplay: true,
		autoplaySpeed:5000,
		centerMode:false,
		variableHeight: false,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots:false
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots:false,
				arrows:false,
				}
			}
		]
	});
});
var tw = document.getElementById('toggle__wrap');
var twg = 1;
function twg1() {
	if (twg == 1) {
		twg++;
		tw.style.top = "0"
	}else{
		twg--;
		tw.style.top = "-101%"
	}
}
function scroll1(id) {
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset().top -offset
	},500);
	return false;
}
new WOW().init();
var scene = document.getElementById('parahead');
var parallaxInstance = new Parallax(scene);

$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title="Вверх"><i class="fas fa-chevron-up"></i></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});