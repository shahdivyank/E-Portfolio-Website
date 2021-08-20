$(document).ready(function(){
    let isChrome = navigator.userAgent.indexOf('Chrome')
    if (isChrome <= -1) {
        $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
            });
        }
        });
    }
  });