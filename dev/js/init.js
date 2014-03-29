// A $( document ).ready() block.
$( document ).ready(function() {

	console.log( "ready!" );

	// Get the height of the browser window, and apply it to each scroll-wrap (panel) element
	$('.scroll-wrap').css('height', $(window).height());

	// Moves background image slightly when scorlling, i.e. Parallax affect
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

	// Causes snapping of panel at top of viewport
	$('.wrapper').snapscroll();

	// Fire a jquery event when top of element reached top of viewport
	$('.scroll-wrap:nth-child(3)').waypoint(function() {
	  alert('Basic example callback triggered.');
	});

});
