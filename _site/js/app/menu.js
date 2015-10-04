
(function ($) {
	
    "use strict";
   
    var main = $('#main'),
		toggleButton = $('#menu-toggle'),
		closeButton = $('#menu-close'),
		wrapper = $('#wrapper'),
		nav = $('#navigation'),
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
	
		//add responsive classes to nav and navLinks elements
		//menu only adopts responsive form if javascript has loaded 
		//and added these classes
		
		//check if nav is not empty, which occurs only for the home page
		if (nav.length) {
		
			$(window).load(function () {
				nav.addClass('nav-resp');
				toggleResp(mql,toggleButton);
				toggleResp(mql,closeButton);
			});//window load
	
			//display toggleButton if max-width < breakpoint
			$(window).resize(function () {
				toggleResp(mql, toggleButton);
				toggleResp(mql, closeButton);
			});//on window resize function

			//toggle .is-open class when clicking on menu-toggle button
			//also add pointer class to main
			toggleButton.on('click', function () {
				wrapper.toggleClass('is-open');
				main.toggleClass('pointer');
			});//menu-toggle button on click

			//toggle .is-open class when clicking on menu-close button
			//also add pointer class to main
			closeButton.on('click', function () {
				wrapper.toggleClass('is-open');
				main.toggleClass('pointer');
			});//menu-close button on click

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
		}//if nav is not empty
	}//if html has class 3d transform and 
	//browser supports match
		
}(jQuery));//close immediately invoked function expression

