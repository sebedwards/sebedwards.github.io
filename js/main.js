$(document).ready(function(){
    $('.contact-us li').hide().eq(0).show();

    showNextTestimonial();
    
    function showNextTestimonial() {


        // Wait for X seconds and hide the currently visible testimonial:
        $('.contact-us li:visible').delay(6000).fadeOut('slow',function(){
            

            // Move it to the back:
            $(this).appendTo('.contact-us ul');

            // Show the next testimonial:
            $('.contact-us li:first').fadeIn('slow',function(){

                // Call the function again:
                showNextTestimonial();
            });
        });
    };
    
    
    $('#nav-toggle').on('click', toggleNav);
    
    function toggleNav(event) {
        event.preventDefault();
        
        $('#nav').toggleClass('is-visible');
    }

    
    
    
   var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 2, //10 items above 1000px browser width
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});



    
    $('#nav a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                   
                var scrollOffset = $('#masthead').css('position') === 'fixed' ? $('#masthead').outerHeight() : 0;
                   
                 $('html,body').animate({
                     scrollTop: target.offset().top - scrollOffset
                }, 1000);
                return false;
            }
        }
    });