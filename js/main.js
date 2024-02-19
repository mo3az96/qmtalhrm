$(window).on("load", function () {
  $("body").removeClass("overflow");

  if ($(window).width() > 1199) {
    var scene = $("#scene").get(0);
    var parallaxInstance = new Parallax(scene);
  }
});
$(document).ready(function () {
  new bootstrap.ScrollSpy(document.body, {
    target: "#footerNav",
  });
  new bootstrap.ScrollSpy(document.body, {
    target: "#fixedNavbar",
  });

  $(window).scroll(function () {
    $(this).scrollTop() >= 150
      ? $("header").addClass("fixed")
      : $("header").removeClass("fixed ");
  });

  if ($(window).width() < 768) {
    $(".menu-btn").on("click", function (e) {
      $(".header-nav").fadeToggle(300);
      $(".overlay").fadeToggle(300);
      $(".nav-list,.menu-btn").toggleClass("active");
      $("body").toggleClass("overflow");
    });
    $(".overlay").on("click", function (e) {
      $(".header-nav").fadeOut(300);
      $(".overlay").fadeOut(300);
      $(".nav-list,.menu-btn").removeClass("active");
      $("body").removeClass("overflow");
    });
    $(".nav-list a").on("click", function (e) {
      $(".header-nav").fadeOut(300);
      $(".overlay").fadeOut(300);
      $(".nav-list,.menu-btn").removeClass("active");
      $("body").removeClass("overflow");
    });
  }
  /************************************ Partners Slider ************************************/
  var partnersSwiper = new Swiper(".partners-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    pagination: {
      el: ".partners-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 7,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ X Slider ************************************/
  var twittersSwiper = new Swiper(".twitters-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    navigation: {
      nextEl: ".twitters-slider .slider-button-next",
      prevEl: ".twitters-slider .slider-button-prev",
    },
    pagination: {
      el: ".twitters-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      1199: {
        spaceBetween: 69,
        slidesPerView: 1.4,
      },
    },
  });

  if ($(window).width() > 1199) {
    setInterval(() => {
      console.log(456);
      reorderDiv();
    }, 5000);
  }
});

function reorderDiv() {
  let parent = document.getElementById("imgsContain");
  let children = parent.querySelectorAll(".contact-img");
  var arr = [];
  for (let i = 0; i < children.length; i++) {
    arr.push(children[i].innerHTML);
  }
  arr.unshift(children[children.length - 1].innerHTML);
  arr.splice(-1);
  for (let i = 0; i < arr.length; i++) {
    document.getElementById("img" + (i + 1)).innerHTML = arr[i];
  }
}
