
(function($){
	
	var main = $('#main'),
		toggleButton = $('#menu-toggle'),
		wrapper = $('#wrapper'),
		topBar = $('#top-bar')
		navLinks = $('.nav-links'),
		mediaQuery ='screen and (max-width: 800px)',//responsive menu breakpoint
		mql = window.matchMedia(mediaQuery);//media query list
	
		//function allows to toggle an element if a media
		//query list is true or false
		function toggleResp(mediaQueryList,element) {
		    if (mediaQueryList.matches) {
			element.show();
			}//display element if breakpoint is met
			else {
				element.hide();
			}//hide element if breakpoint is not met
		}
		
		//add responsive classes to topBar and navLinks elements
		//menu only adopts responsive form if javascript has loaded 
		//and added these classes
		$(window).load(function () {
			if (topBar && navLinks) {
				topBar.addClass('top-bar-resp');
				navLinks.addClass('nav-links-resp');	
			}//if topBar and navlinks
			toggleResp(mql,toggleButton);
		});//window load
		
		//display toggleButton if max-width < breakpoint
		$(window).resize(function () {
			toggleResp(mql,toggleButton);
		});//on window resize function
	
		//toggle .is-open class when clicking on menu-toggle button
		toggleButton.on( 'click', function(event) {
			wrapper.toggleClass('is-open');
		});//menu-toggle on click

		//dismiss opened side menu when clicking outside of menu
		$(document).on('click', function(event) {
		    if ($(event.target).closest(main).length && 
			!$(event.target).is(toggleButton)) {
				if (wrapper.hasClass('is-open')) {
					wrapper.removeClass('is-open');
				}//if wrapper is-open, remove class
			}//if event.target closest and != toggle
		});//document on click
	
}(jQuery));//anonymous closure

;(function($){
	
	"use strict";
	
	var moreButton = $('.read-more-button'),//array containing all .read-more-button 
		more = $('.read-more'),//array containing all .read-more divs
		text = moreButton.html(),//.read-more-button inner html, should be "Read more"
		altText = moreButton.data('alt-text');//alternate text to be set after displaying .read-more
	
		$(window).load(function () {
			moreButton.each(function () {
				$(this).toggleClass("hidden");
			});//remove "hidden" class from all read-more buttons
		});//on window load event
		
		moreButton.click(function (event) {
			var target = $(event.target);
			target.next('.read-more').slideToggle("slow",function () {
				if (target.html() === text) {
					target.html(altText);
				} else {
					target.html(text);
				}//set .read-more-button text to either text or altText
			});//slideToggle the .read-more div
		});//on moreButton click event
}(jQuery));

