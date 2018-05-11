$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		if (wScroll > $('.about-one').offset().top - ($(window).height()/2)){
			$('.ek').each(function(){
				$('.ek').addClass('is-showing')
			})
		}
	});
});
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		if (wScroll > $('.about-one').offset().top - ($(window).height()/2)){
			$('.pehla').each(function(){
				$('.pehla').addClass('is-showing')
			})
		}
	});
});
 $(document).ready(function() {
    $("a").on("click", function(e) {
        if ("" !== this.hash) {
            e.preventDefault();
            var a = this.hash;
            $("html, body").animate({
                scrollTop: $(a).offset().top
            }, 800, function() {
                window.location.hash = a
            })
        }
    })
});