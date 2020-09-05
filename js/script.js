$(document).ready(function () {
    $(window).scroll(function () {
      // check if scroll event happened
      if ($(document).scrollTop() > 80) {
        // check if user scrolled more than 50 from top of the browser window
        $(".header .navbar").css({"visibility": "hidden"});
        $(".head-section .navbar").css({"visibility": "visible"});
      } else {
        $(".header .navbar").css({"visibility": "visible" });
        $(".head-section .navbar").css({ "visibility": "hidden" });
      }
    });
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      // check if scroll event happened
      if ($(document).scrollTop() > 150) {
        // check if user scrolled more than 50 from top of the browser window
        $(".back-to-top").css({"opacity": "1"});
      } else {
        $(".back-to-top").css({"opacity": "0" });
      }
    });
  });

/***slider***/
$(".hero-slider").owlCarousel({
    loop: true,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i></div>",
      "<div class='nav-btn next-slide'><i class='fas fa-chevron-right'></i></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /*team area */
  $(".team-slider").owlCarousel({
    nav: false,
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /**product listing */
  $(".product-slider").owlCarousel({
    nav: true,
    navText: [
      "<div class='nav-btn owl-prev'><i class='fas fa-arrow-left'></i></div>",
      "<div class='nav-btn owl-next'><i class='fas fa-arrow-right'></i></div>",
    ],
    dots: false,
    animateIn: "animate__flipInY",
    loop: false,
    rewind: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      554:{
        items:2,
      },
      772: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  /**testimonials */
  $(".testimonial-slider").owlCarousel({
    loop: true,
    animateOut: "fadeOut",
    margin: 10,
    dots:false,
    nav: true,
    navText: [
      "<div class='nav-btn owl-prev'><i class='fas fa-arrow-left'></i></div>",
      "<div class='nav-btn owl-next'><i class='fas fa-arrow-right'></i></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

