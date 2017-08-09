jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
        
        // $('.cd-popup-trigger').addClass('animated zoomIn');
		//$('.cd-popup').addClass('is-visible');
	});
	
	
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});