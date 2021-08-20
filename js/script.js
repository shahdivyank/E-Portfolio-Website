// $(document).ready(function(){

// 	var ua = navigator.userAgent.toLowerCase();
// 	if(ua.indexOf("safari") != -1){
// 		if(!(ua.indexOf("chrome") >= -1)){
// 			$("a").on('click', function(event) {
// 			if (this.hash !== "") {
// 				event.preventDefault();
// 				var hash = this.hash;
// 				$('html, body').animate({
// 					scrollTop: $(hash).offset().top
// 				}, 200, function(){
// 					window.location.hash = hash;
// 				});
// 			} 
// 			});
// 		}
// 	}
// });

$(document).ready(function(){
    let isChrome = navigator.userAgent.indexOf('Chrome')
    if (isChrome <= -1) {
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            var hash = this.hash;
    
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
        });
    }
  });