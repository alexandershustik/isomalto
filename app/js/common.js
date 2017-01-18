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
	$('.product-pic').removeClass('active');

	$('.product-tabs-btns-wrap li button[data-href = '+ activeTab +']').addClass('active');
	$('.product-tab-desc-wrap[data-href = '+ activeTab +']').addClass('active');
	$('.product-pic[data-href = '+ activeTab +']').addClass('active');
})

