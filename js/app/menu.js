
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

