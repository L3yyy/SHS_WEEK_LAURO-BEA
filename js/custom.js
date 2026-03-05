(function ($) {
  "use strict";

  // PRE LOADER
  $(window).on('load', function () {
    $('html, body').scrollTop(0);
    $('.lcba-loader').fadeOut(1000);
  });

  // PREVENT AUTO-SCROLL ON LOAD
  history.scrollRestoration = 'manual';

  $(document).ready(function () {
    // KILL auto-focus on game input
    $('#input').prop('tabindex', '-1').blur();
    setTimeout(function () {
      $('#input').prop('tabindex', '0');
    }, 1500);
  });

  // CUSTOM LINK SCROLL
  $('.custom-link').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;
    scrollToDiv(elWrapped, header_height);
    return false;
    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;
      $('body,html').animate({ scrollTop: totalScroll }, 300);
    }
  });

})(window.jQuery);

// SCROLL FADE
const faders = document.querySelectorAll('.fade-in-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

faders.forEach(el => observer.observe(el));