/*!
    * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  var btn = $('#buttonTop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0},'300');
  });
  

})(jQuery); // End of use strict






   /* =========================================
     * filter
     *  =======================================*/

    $('#filter a').click(function (e) {
      e.preventDefault();

      $('#filter li').removeClass('active');
      $(this).parent('li').addClass('active');

      var categoryToFilter = $(this).attr('data-filter');

      $('.reference-item').each(function () {

          if ($(this).data('category') === categoryToFilter || categoryToFilter === 'all') {
              $(this).show();
          } else {
              $(this).hide();
          }
      });

  });


  /* =========================================
   * reference functionality
   *  =======================================*/
  $('.reference a').on('click', function (e) {

      e.preventDefault();

      var title = $(this).find('.reference-title').text(),
          description = $(this).siblings('.reference-description').html();

      $('#detail-title').text(title);
      $('#detail-content').html(description);

      var images = $(this).siblings('.reference-description').data('images').split(',');
      if (images.length > 0) {
          sliderContent = '';
          for (var i = 0; i < images.length; ++i) {
              sliderContent = sliderContent + '<div class="item"><img src=' + images[i] + ' alt="" class="img-fluid"></div>';
          }
      } else {
          sliderContent = '';
      }

      openReference(sliderContent);

  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  $('.SeeMore').click(function(){
		var $this = $(this);
		$this.toggleClass('SeeMore');
		if($this.hasClass('SeeMore')){
			$this.text('See More');			
		} else {
			$this.text('See Less');
		}
	});



// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});


// Typing effect and eraser
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["I'm a Freelancer", "I code for Experience and gaining skills ", "I code AT NO COST","I'm based in Winnipeg, Manitoba", ];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});





// var messages=["I'm an amateur Freelancer"," I'm work for EXPERIENCE!!"," I'm based in Winnipeg, Manitoba"];
// var rank=0;

// // Code for Chrome, Safari and Opera
// document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd", changeTxt);

// // Standard syntax
// document.getElementById("myTypewriter").addEventListener("animationend", changeTxt);

// function changeTxt(e){
//   _h1 = this.getElementsByTagName("p")[0];
//   _h1.style.webkitAnimation = 'none'; // set element animation to none
//    setTimeout(function() { // you surely want a delay before the next message appears
//       _h1.innerHTML=messages[rank];
//       var speed =3.5*messages[rank].length/20; // adjust the speed (3.5 is the original speed, 20 is the original string length
//       _h1.style.webkitAnimation = 'typing '+speed+'s steps(40, end), blink-caret .70s step-end infinite'; //  switch to the original set of animation      
//       (rank===messages.length-1)?rank=0:rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
//     }, 1000);
// }

function toggleShow(elementId) {
  let el = document.getElementById(elementId);
  el.style.display = "block";
  el.style.marginLeft = "auto";
  el.style.marginRight = "auto";
  

}

function toggleHide(elementId) {
  let el = document.getElementById(elementId);
  el.style.display = "none";
}