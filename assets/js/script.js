 function PageLoad() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

$(document).ready(function () {

// start ================================================

//sticky btn => scrolls to top  (up)
window.onscroll = function () { myFunction() };

var header = document.getElementById("mainNav");
var sticky = header.offsetTop + 220;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.remove("d-none");
    } else {
        header.classList.add("d-none");
    }
}

// loading contant
    $("#about").load("assets/pages/about.htm");
    $("#services").load("assets/pages/services.htm");
    $("#portfolio").load("assets/pages/portfolio.htm");
    $("#contact").load("assets/pages/contact.htm");



    $('body').scrollspy({ target: ".navbar", offset: 50 });

   
    // on menu click,fold  menu 
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');

    });


    // animate.css when clicked on navbar links
    
    $.fn.extend({
        animateCss: function(animationName, callback) {
          var animationEnd = (function(el) {
            var animations = {
              animation: 'animationend',
              OAnimation: 'oAnimationEnd',
              MozAnimation: 'mozAnimationEnd',
              WebkitAnimation: 'webkitAnimationEnd',
            };
      
            for (var t in animations) {
              if (el.style[t] !== undefined) {
                return animations[t];
              }
            }
          })(document.createElement('div'));
      
          this.addClass('animated ' + animationName + " slow").one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
      
            if (typeof callback === 'function') callback();
          });
      
          return this;
        },
      });
      $(".sAbout").on('click', function() {
            $('#aboutLeft').animateCss('slideInLeft');
            $('#aboutRight').animateCss('slideInRight');
    });
    $(".sServices").on('click', function() {     
            $('.servicesRight').animateCss('rubberBand');
    });
    $(".sContact").on('click', function() {
            $('.contactLeft').animateCss('slideInDown');
    });
    
 

// end ==================================================
});
