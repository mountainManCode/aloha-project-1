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
    accessibility: true,
    resize: true,
    freeScroll: true,
    wrapAround: true,
    prevNextButtons: false,
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
$("#button").on('click', function(event) {
  event.preventDefault();
  console.log("working?")
  var email = $('input').val();
      var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      event.preventDefault();
      console.log('User submitted the email address ' + email);

      if (filter.test(email)) {
    alert('Thank you for subscribing, ' + email + '!');
  
      } else {
          alert('Please enter a valid E-Mail address.');
      }
  });


    //skip link bug fix
  $(function() {
    $("a[href^='#']").not("a[href='#']").click(function() {
      $("#"+$(this).attr("href").slice(1)+"").focus();
    });
  });
});

