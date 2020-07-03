"use strict";

// None
console.log('IAC Group Ready!');
var timeleft = 1800;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
  }

  document.getElementById("progressBar").value = 1800 - timeleft;
  $('.time').text(timeleft);
  timeleft -= 1;
}, 1800); // Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
  document.head.appendChild(msViewportStyle);
}

$(function () {
  var nua = navigator.userAgent;
  var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;

  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%');
  }
});
$(document).ready(function () {
  //////////////////////////////
  // GET IMAGE SVG Code
  //////////////////////////////
  $('.svg').each(function () {
    var m = $(this).attr('src');
    var n = $(this);
    $.ajax({
      type: "GET",
      async: true,
      url: m,
      dataType: "text",
      success: function success(xml) {
        n.after('<div class="s">' + xml + '</div>');
        n.remove();
      }
    });
  }); //////////////////////////////
  // Long text 
  //////////////////////////////

  $('.last-character').each(function () {
    var str = $(this).text().trim();
    var ind_text_begin = str.substring(0, str.length - 4);
    var ind_text_end = str.substring(str.length - 4);

    if (ind_text_begin.length > 8) {
      ind_text_begin = '...' + ind_text_begin.substring(ind_text_begin.length - 5);
    }

    $(this).html(ind_text_begin + '<span>' + ind_text_end + '</span>');
  });
  $('.last-title').each(function () {
    var str = $(this).text().trim();

    if (str.length >= 15 && str.length < 22) {
      $(this).addClass('mediumtext');
    } else if (str.length >= 22) {
      $(this).addClass('longtext');
    }
  }); //////////////////////////////
  // Slider
  //////////////////////////////

  $('.in-pending .owl-carousel').owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      480: {
        items: 2
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      }
    }
  });
});
//# sourceMappingURL=main.js.map