$(document).ready(function () {
	//////////////////////////////
	// GET IMAGE SVG Code
	//////////////////////////////
	$('img.svg').each(function() {
		var m = $(this).attr('src');
		var n = $(this);
		$.ajax({
			type: "GET",
			async: true,
			url: m,
			dataType: "text",
			success: function(xml){
				n.after('<div class="s svg">'+xml+'</div>')
				n.remove()
			}
		});
	});
	//////////////////////////////
	// Long text 
	//////////////////////////////
	$('.last-character').each(function() {
		var str = $(this).text().trim();
		var ind_text_begin = str.substring(0, str.length - 4)
		var ind_text_end = str.substring(str.length - 4)
		if(ind_text_begin.length > 8) {
			if($( window ).width() >= 991) {
				ind_text_begin = '...' + ind_text_begin.substring(ind_text_begin.length - 5)
			}
		}
		$(this).html(ind_text_begin+'<span>'+ind_text_end+'</span>')
	})
	$('.last-title').each(function() {
		var str = $(this).text().trim();
		if(str.length >= 15 && str.length < 22) {
			$(this).addClass('mediumtext')
		} else if(str.length >= 22) {
			$(this).addClass('longtext')
		}
	})
	//////////////////////////////
	// Slider
	//////////////////////////////
	$('.in-pending .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		loop: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1024: {
				items: 4,
			},
			1200: {
				items: 5,
			},
			1600: {
				items: 6,
			}
		}
	});
});
