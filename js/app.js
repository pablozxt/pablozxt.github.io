
(function($){
	
	var main=$("#main"),
		toggleButton=$("#menu-toggle"),
		wrapper=$("#wrapper"),
		topBar=$("#top-bar")
		navLinks=$(".nav-links"),
		mql=window.matchMedia("screen and (max-width: 800px)");//responsive menu breakpoint
	
		//add responsive classes to topBar and navLinks elements
		//menu only adopts responsive form if javascript has loaded 
		//and added these classes
		$(window).load(function(){
			if (topBar && navLinks){
				topBar.addClass("top-bar-resp");
				navLinks.addClass("nav-links-resp");	
			}//if topBar and navlinks
		});//window load
		
		//display toggleButton if max-width < breakpoint
		$(window).resize(function(){
			if (mql.matches){
			toggleButton.show();
			}//display toggleButton at breakpoint
			else {
				toggleButton.hide();
			}//hide toggleButton at breakpoint
		});//on window resize function
	
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

;(function($){
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

