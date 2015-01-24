
(function($){
	
	var main=$("#main"),
		toggleButton=$("#menu-toggle"),
		wrapper=$("#wrapper"),
		topBar=$("#top-bar")
		navLinks=$(".nav-links"),
		mql=window.matchMedia("screen and (max-width: 800px)");//responsive menu media 		breakpoint
	
		//add responsive classes to topBar and navLinks elements
		//menu only adopts responsive form if javascript has loaded 
		//and added these classes
		//also display toggleButton
		$(window).load(function(){
			if (topBar && navLinks){
				topBar.addClass("top-bar-resp");
				navLinks.addClass("nav-links-resp");
				$(window).resize(function(){//if media query is true
					if (mql.matches){
					toggleButton.show();
					}//display toggleButton at breakpoint
					else {//if media query not true
						toggleButton.hide();//hide toggle button
					}
				});
			}
		});//window load
	
		//toggle .is-open class when clicking on menu-toggle button
		toggleButton.on( "click", function( event ) {
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

