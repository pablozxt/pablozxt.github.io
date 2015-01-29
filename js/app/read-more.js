(function($){
	
	"use strict";
	
	var moreButton = $('.read-more-button'),//array containing all .read-more-button 
		more = $('.read-more'),//array containing all .read-more divs
		text=moreButton.html(),//.read-more-button inner html, should be "Read more"
		altText=moreButton.data('alt-text');//alternate text to be set after displaying .read-more
	
		$(window).load(function() {
			moreButton.each(function(){
				$(this).toggleClass("hidden");
			});//remove "hidden" class from all read-more buttons
		});//on window load event
		
		moreButton.click(function(event){
			var target = $(event.target);
			target.next('.read-more').slideToggle("slow",function(){
				if (target.html() == text){
					target.html(altText);
				} else {
					target.html(text);
				}//set .read-more-button text to either text or altText
			});//slideToggle the .read-more div
		});//on moreButton click event
}(jQuery));

