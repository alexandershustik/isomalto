$('.mobile-menu-btn').click(function(){
	$(this).toggleClass('active');
	$('.mob-menu-icon').toggleClass('active');
	$('.list-wrap').toggleClass('open');
})

//main-slider
var slideDomCount = $('.slide-wrap[data-slide]').length;
activeSlide = 0;

interval =  setInterval( changeSlide, 4000);

function changeSlide(){
	slideDomEl = '.slide-wrap[data-slide=' + activeSlide + ']';

	$('.slide-wrap').removeClass('active');
	$('.slide-wrap').removeClass('left');

	$(slideDomEl).addClass('active');
	(activeSlide <= 0) ? $('.arrows-wrap span.left').attr('data-slide', slideDomCount - 1) : $('.arrows-wrap span.left').attr('data-slide', activeSlide - 1);
	(activeSlide >= slideDomCount - 1) ? $('.arrows-wrap span.right').attr('data-slide', 0) : $('.arrows-wrap span.right').attr('data-slide', parseInt(activeSlide) + 1);

	(activeSlide <= 0) ? $('.slide-wrap:last-child').addClass('left') : $(slideDomEl).prev().addClass('left');

	(activeSlide < slideDomCount - 1) ? activeSlide++ : activeSlide = 0;
}
changeSlide();

$('.arrows-wrap span.left').click(function(){
	activeSlide = $('.arrows-wrap span.left').attr('data-slide');
	interval = clearInterval(interval);
	changeSlide();
	interval =  setInterval( changeSlide, 4000);
});
$('.arrows-wrap span.right').click(function(){
	activeSlide = $('.arrows-wrap span.right').attr('data-slide');
	interval = clearInterval(interval);
	changeSlide();
	interval =  setInterval( changeSlide, 4000);
});

//about-slider
var aboutSlideDomCount = $('.about-slide[data-slide]').length;
aboutActiveSlide = 0;

for( i = 0; i < aboutSlideDomCount; i++){
	$('.about-indicators-wrap').append('<span data-indicator='+i+'></span>');
}

aboutInterval =  setInterval( aboutChangeSlide, 5000);

function aboutChangeSlide(){
	slideDomEl = '.about-slide[data-slide=' + aboutActiveSlide + ']';
	
	slideDomInd = '.about-indicators-wrap span[data-indicator=' + aboutActiveSlide + ']';
	
	$('.about-slide').removeClass('active');
	$('.about-slide').removeClass('left');

	$('.about-indicators-wrap span').removeClass('active');

	$(slideDomEl).addClass('active');
	$(slideDomInd).addClass('active');

	(aboutActiveSlide <= 0) ?
		$('.about-arrows-wrap span.left').attr('data-slide', aboutSlideDomCount - 1) :
		$('.about-arrows-wrap span.left').attr('data-slide', aboutActiveSlide - 1);

	(aboutActiveSlide >= aboutSlideDomCount - 1) ?
		$('.about-arrows-wrap span.right').attr('data-slide', 0) :
		$('.about-arrows-wrap span.right').attr('data-slide', parseInt(aboutActiveSlide) + 1);

	(aboutActiveSlide <= 0) ?
		$('.about-slide:last-child').addClass('left') :
		$(slideDomEl).prev().addClass('left');

	(aboutActiveSlide < aboutSlideDomCount - 1) ?
		aboutActiveSlide++ :
		aboutActiveSlide = 0;
}
aboutChangeSlide();

$('.about-arrows-wrap span.left').click(function(){
	aboutActiveSlide = $('.about-arrows-wrap span.left').attr('data-slide');
	aboutInterval = clearInterval(aboutInterval);
	aboutChangeSlide();
	aboutInterval =  setInterval( aboutChangeSlide, 5000);
});
$('.about-arrows-wrap span.right').click(function(){
	aboutActiveSlide = $('.about-arrows-wrap span.right').attr('data-slide');
	aboutInterval = clearInterval(aboutInterval);
	aboutChangeSlide();
	aboutInterval =  setInterval( aboutChangeSlide, 5000);
});

$('.about-indicators-wrap span').click(function(){
	aboutActiveSlide = $(this).attr('data-indicator');
	console.log(aboutActiveSlide);
	aboutInterval = clearInterval(aboutInterval);
	aboutChangeSlide();
	aboutInterval =  setInterval( aboutChangeSlide, 5000);
});

//product-tabs

$('.product-tabs-btns-wrap li button').click(function(){
	activeTab = $(this).attr('data-href');

	$('.product-tabs-btns-wrap li button').removeClass('active');
	$('.product-tab-desc-wrap').removeClass('active');

	$('.product-tabs-btns-wrap li button[data-href = '+ activeTab +']').addClass('active');
	$('.product-tab-desc-wrap[data-href = '+ activeTab +']').addClass('active');
});

// script-desc-tabs

$('.script-desc-tabs a').click(function(){
	activeTab = $(this).attr('data-href');

	$('.script-desc-tabs a').removeClass('active');
	$('.script-desc-tab').removeClass('active');

	$('.script-desc-tabs a[data-href = '+ activeTab +']').addClass('active');
	$('.script-desc-tab[data-href = '+ activeTab +']').addClass('active');
});

// script-tabs

$('.script-tabs a').click(function(){
	activeTab = $(this).attr('data-href');

	$('.script-tabs a').removeClass('active');
	$('.script-row').removeClass('active');

	$('.script-tabs a[data-href = '+ activeTab +']').addClass('active');
	$('.script-row[data-href = '+ activeTab +']').addClass('active');
});

// map

	function initMap() {
	// Create a map object and specify the DOM element for display.
		var map = new google.maps.Map(document.getElementById('map'), {
			scrollwheel: false,
			zoom: 12,
			center: {lat: 55.718889, lng: 38.626745},
			disableDefaultUI: true,
			scrollwheel: false,
			draggable: false,
			panControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP
			},
		});

		var styles = [
		  {
		    stylers: [
		      { hue: "#8bd434" },
		      { saturation: -60 }
		    ]
		  }
		];

		map.setOptions({styles: styles});

		var mark = new google.maps.Marker({
			position: {lat: 55.718889, lng: 38.626745},
			map: map,
			icon: '../img/map-marker.png'
		});
	}

//smoot-scroll
	$(".main-menu ul").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
	$(".main-mobile-menu ul").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
	$(".about-info-wrap").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

//test-validation

$patternName = /^[а-яА-ЯёЁa-zA-Z\s]+$/;
$patternMessage = /^[а-яА-ЯёЁa-zA-Z0-9!?,.@#()\s]+$/;
$patternEmail = /[^\s]+[@][^\s]+/;

$testName = $('.test-name');
$testEmail = $('.test-email');
$testSubmit = $('.test-submit');

$testName.on('input', function(){
	if($(this).val().search($patternName) != 0){
		$(this).addClass('fail');
		$(this).removeClass('success');
	}
	else {
		$(this).removeClass('fail');
		$(this).addClass('success');
		enableSubmit();
	}
});
$testEmail.on('input', function(){
	if($(this).val().search($patternEmail) != 0){
		$(this).addClass('fail');
		$(this).removeClass('success');
	}
	else {
		$(this).removeClass('fail');
		$(this).addClass('success');
		enableSubmit();
	}
});
function enableSubmit(){
 	if(
 		$testName.hasClass('success') &&
 		$testEmail.hasClass('success')
 	) $testSubmit.prop( "disabled", false );
 	else $testSubmit.prop( "disabled", true );
}


$feedName = $('.feedback-name');
$feedEmail = $('.feedback-email');
$feedSubmit = $('.feedback-submit');

$feedName.on('input', function(){
	if($(this).val().search($patternName) != 0){
		$(this).addClass('fail');
		$(this).removeClass('success');
	}
	else {
		$(this).removeClass('fail');
		$(this).addClass('success');
		enableSubmitFeed();
	}
});
$feedEmail.on('input', function(){
	if($(this).val().search($patternEmail) != 0){
		$(this).addClass('fail');
		$(this).removeClass('success');
	}
	else {
		$(this).removeClass('fail');
		$(this).addClass('success');
		enableSubmitFeed();
	}
});
function enableSubmitFeed(){
 	if(
 		$feedName.hasClass('success') &&
 		$feedEmail.hasClass('success')
 	) $feedSubmit.prop( "disabled", false );
 	else $feedSubmit.prop( "disabled", true );
}

//ajax

	$(".feedback-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".feedback-success-wrap").addClass('success');
		});
		return false;
	});
