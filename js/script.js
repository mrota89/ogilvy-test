//slider 
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  responsiveClass: true,
  autoplay: true,
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

//on scroll cambia background navbar
function stickyOnScroll() {
  const navbar = document.querySelector(".header__navbar-wrapper");
  const sticky = navbar.offsetTop;
  if (window.scrollY > sticky) {
    navbar.classList.add("header__navbar-wrapper--onscroll")
  } else {
    navbar.classList.remove("header__navbar-wrapper--onscroll");
  }
}

window.addEventListener("scroll", stickyOnScroll);