//slider 
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  responsiveClass: true,
  autoplay: false,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2
    },
    992: {
      items: 3
    },
  },
});
