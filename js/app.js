
(function($){
	
	var main=$("#main"),
		toggle=$("#menu-toggle"),
		wrapper=$("#wrapper");
	

	//toggle .is-open class when clicking on menu-toggle button
	toggle.on( "click", function( event ) {
		wrapper.toggleClass("is-open");
	});//menu-toggle on click

	//dismiss opened side menu when clicking outside of menu
	$(document).on('click', function(event) {
		if ($(event.target).closest("#main").length && 
		!$(event.target).is(toggle)) {
			if(wrapper.hasClass('is-open')){
				wrapper.removeClass("is-open");
			}//if wrapper is-open, remove class
		}//if event.target closest and != toggle
	});//document on click
	
}(jQuery));//anonymous closure

;(function($){
	var moreButton = $('.read-more-button'),//array containing all .read-more-button 
	more = $('.read-more');//array containing all .read-more divs
	
		$(window).load(function() {
			moreButton.each(function(){
				$(this).toggleClass("hidden");
			});//remove "hidden" class from all read-more buttons
		});//on window load event
		
		moreButton.click(function(event){
			var target = $(event.target);
			target.next('.read-more').slideToggle("slow",function(){
				if (target.html() == "Read more"){
					target.html("Read less");
				} else {
					target.html("Read more");
				}//set .read-more-button text to either "Read more" or "Read less"
			});//slideToggle the .read-more div
		});//on moreButton click event
}(jQuery));

