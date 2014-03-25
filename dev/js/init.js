// A $( document ).ready() block.
$( document ).ready(function() {

	console.log( "ready!" );

	// Get the height of the browser window, and apply it to each scroll-wrap element
	$('.scroll-wrap').css('height', $(window).height());

	// Get the height of the page, and then offset the background position
	$('.scroll-wrap[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		$window = $(window);
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
			 
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		});
	});

	$('.wrapper').snapscroll();

	$('.scroll-wrap:nth-child(3)').waypoint(function() {
	  alert('Basic example callback triggered.');
	});

});