//slider main__carousel-section
$('.main__carousel-section.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 30000,
  responsiveClass: true,
  nav: false,
  dots: true,
  items: 1,
});

//slider  main__slider-section
$('.main__slider-content.owl-carousel').owlCarousel({
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
function onScrollChangeBgNavbar() {
  const navbar = document.querySelector(".header__navbar-wrapper");
  const offset = navbar.offsetTop;
  if (window.scrollY > offset) {
    navbar.classList.add("header__navbar-wrapper--onscroll")
  } else {
    navbar.classList.remove("header__navbar-wrapper--onscroll");
  }
}

//gestione eventi interazione pulsante account
function onAccountButtonUserInteraction() {
  const accountButton = document.querySelector(".header__navbar-account");
  const dropdown = document.querySelector(".header__navbar-account-dropdown");
  const accediOption = document.querySelector(".header__navbar-account-dropdown .option:first-child");
  let timeoutId;

  function showDropdown() {
    dropdown.classList.add("header__navbar-account-dropdown--visible");
    clearTimeout(timeoutId);
  }

  function hideDropdown({ noTimeout = false } = {}) {
    if (!noTimeout) {
      timeoutId = setTimeout(function () {
        dropdown.classList.remove("header__navbar-account-dropdown--visible");
      }, 300);
    } else {
      dropdown.classList.remove("header__navbar-account-dropdown--visible");
    }
  }

  accountButton.addEventListener("mouseenter", showDropdown);
  accountButton.addEventListener("mouseleave", hideDropdown);
  accountButton.addEventListener("click", showDropdown);
  accountButton.addEventListener("mouseenter", () => {
    accountButton.classList.remove('header__navbar-account--accedi')
  });

  dropdown.addEventListener("mouseenter", showDropdown);
  dropdown.addEventListener("mouseleave", () => hideDropdown({ noTimeout: true }));
  dropdown.addEventListener("click", () => {
    hideDropdown({ noTimeout: true });
  });

  accediOption.addEventListener("click", () => {
    accountButton.classList.add('header__navbar-account--accedi')
  })
  window.addEventListener("scroll", () => hideDropdown({ noTimeout: true }));
}

window.addEventListener("scroll", onScrollChangeBgNavbar);
onAccountButtonUserInteraction()