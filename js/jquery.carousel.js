(function($){
    jQuery.fn.carousel = function(){
	
$(function() {
	var $item = $('.myCarousel__item');
	var currItem = 0;
	$item.addClass('myCarousel__item--hide')
		 .eq(currItem).removeClass('myCarousel__item--hide');
	$('.myCarousel__button--left').on('click', function(){
	    var nextItem = (currItem + 1) % $item.length;
		$item.eq(nextItem).removeClass('myCarousel__item--hide');
		$item.eq(currItem).addClass('myCarousel__item--hide');
		currItem = nextItem;
	});	
	$('.myCarousel__button--right').on('click', function(){
	    var nextItem = (currItem - 1 + $item.length) % $item.length;
		$item.eq(nextItem).removeClass('myCarousel__item--hide');
		$item.eq(currItem).addClass('myCarousel__item--hide');
		currItem = nextItem;
	});			
});
 return this;   
};
})(jQuery);
