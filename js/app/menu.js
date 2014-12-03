
(function($){
	
	var offCanvas=$(".top-bar"),
		main=$(".main"),
		toggle=$(".menu-toggle");
	
	//toggle side menu when clicking on menu-toggle button
	toggle.on( "click", function( event ) {
		offCanvas.toggleClass("is-open");
		main.toggleClass("is-open");
	});//menu-toggle on click
	
	//dismiss opened side menu when clicking outside of menu
	$(document).on('click', function(event) {
		if ($(event.target).closest(".main").length && 
		!$(event.target).is(toggle)) {
			if(offCanvas.hasClass('is-open')){
				offCanvas.removeClass("is-open");
				main.removeClass("is-open");
			}//if offCanvas is-open, remove class
		}//if event.target closest and != toggle
	});//document on click
	
}(jQuery));//anonymous closure

