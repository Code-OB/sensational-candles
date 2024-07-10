//Check to see if the window is top if not then display button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').addClass('button-show');
        $('.main-header').addClass('sticky');
    } else {
        $('.scrollToTop').removeClass('button-show');
        $('.main-header').removeClass('sticky');
    }
});

function isScrolledDown() {
    // Get the vertical scroll position of the page
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    // Check if the scroll position is greater than or equal to 250px
    return scrollTop >= 100;
  }
  
// Example usage:
if (isScrolledDown()) {
    $('.main-header').addClass('sticky');
} else {
    $('.main-header').removeClass('sticky');
}

// Categories Carousel

var categoriesCarousel = new Swiper(".categories-carousel", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
    },
});