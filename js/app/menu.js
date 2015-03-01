
(function ($) {
	
    "use strict";
   
    var main = $('#main'),
		toggleButton = $('#menu-toggle'),
		wrapper = $('#wrapper'),
		topBar = $('#top-bar'),
		navLinks = $('.nav-links'),
		html = $('html'),
		mediaQuery = 'screen and (max-width: 44.44444em)',//responsive menu breakpoint
		mql = window.matchMedia(mediaQuery);//media query list
		
	//function allows to toggle an element if a media
	//query list is true or false
	function toggleResp(mediaQueryList, element) {
	    if (mediaQueryList.matches) {
			element.show();
		}//display element if breakpoint is met
		else {
			element.hide();
		}//hide element if breakpoint is not met
	}
	
	//if modernizr detects csstransforms3d, 
	// and if browser supports matchMedia, 
	//then add off-canvas menu
	if (html.hasClass('csstransforms3d') && (window.matchMedia)) { 
	
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
			toggleResp(mql, toggleButton);
		});//on window resize function

		//toggle .is-open class when clicking on menu-toggle button
		toggleButton.on('click', function() {
			wrapper.toggleClass('is-open');
			main.toggleClass('pointer');
		});//menu-toggle on click

		//dismiss opened side menu when clicking outside of menu
		$(document).on('click', function(event) {
		    if ($(event.target).closest(main).length && 
			!$(event.target).is(toggleButton)) {
				if (wrapper.hasClass('is-open')) {
					wrapper.removeClass('is-open');
					main.removeClass('pointer');
				}//if wrapper is-open, remove class
			}//if event.target closest and != toggle
		});//document on click
	}//if html has class 3d transform and 
	//browser supports matchMedia
		
}(jQuery));//close immediately invoked function expression

