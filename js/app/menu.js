
(function($){
	
	var transformer=$(".transformer");
	
	//toggle side menu when clicking on menu-toggle button
	$( document ).ready(function() {
		$(".menu-toggle" ).on( "click", function( event ) {
		    event.preventDefault();
			transformer.toggleClass("is-open");
		});//menu-toggle on click
	});//document ready
	
	//dismiss opened side menu when clicking outside of menu
	$(document).on('click', function(event) {
		if ($(event.target).closest(".main-inner").length) {
			if(transformer.hasClass('is-open')){
				transformer.removeClass("is-open");
			}//if transformer is-open
		}//if event.target closest
	});
	
}(jQuery));//anonymous closure

