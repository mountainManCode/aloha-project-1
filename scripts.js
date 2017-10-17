$(function() {

//add products to shopping cart
  $('.add-to-cart').click('button', function(event) {
    event.preventDefault();

    var cartCount = parseInt($('.count').html(), 10);
    $('.count').html(cartCount +=1);
  });
 
//flickity carousel
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: 'true',
    accessibility: 'true',
    resize: 'true',
    freeScroll: 'true',
    wrapAround: 'true',
  });

//Smooth Scrolling - (css-tricks.com)
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // 
            $target.focus(); 
          };
        });
      }
    }
  });

//email validation
  $('#form').on('submit', function(event) {
    event.preventDefault();
    if ( $('#text-input').val() == '' ) {
      alert('You missed the field.');
    } else {
      alert('Thanks for subscribing!');
    }
  });
});
