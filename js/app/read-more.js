(function($){
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

