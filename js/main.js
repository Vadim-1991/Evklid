"use strict"

// window.addEventListener("load", windowLoad);
window.addEventListener("DOMContentLoaded", windowLoad);

function windowLoad() {
  document.documentElement.classList.add("loaded");

// Открытие и закрытие бургера

const menu = document.querySelector(".header__menu");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
    menu.classList.add("menu-active")
    document.body.style.overflow = "hidden";
  }
  if (elementInteractive.closest(".header__exit-menu")) { // Открытие и закрытие бургера 
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".menu__link")) { // Открытие и закрытие бургера
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
})

// Скрипт для проверки , поддерживает ли браузер webp 

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

// слайдер 

const heroSlider = document.querySelector(".hero-slider");

if (heroSlider) {
  const heroSliderSwiper = new Swiper(heroSlider, {

    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    pagination: {
      el: '.hero-slider-pagination',
      clickable: true,
    },
  });
}

// табы 

const stagesWagsBtns = document.querySelectorAll(".stages__wags-btn");

const stagesContentItem = document.querySelectorAll(".stages__content-item");

if (stagesWagsBtns && stagesContentItem) {
  stagesWagsBtns.forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      stagesContentItem.forEach(function (tabContent) {
        tabContent.classList.remove("active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("active")
    })
  })
}


document.addEventListener("click", function (e) {
  const elementInteractive = e.target;

  if (elementInteractive.closest(".stages__wags-btn")) {
    stagesWagsBtns.forEach(function (e) {
      e.classList.remove("active");
    })

    elementInteractive.closest(".stages__wags-btn").classList.add("active");
  }
})

//аккардион

document.addEventListener("click", function (e) {
  const elementInteractive = e.target;

  if (elementInteractive.closest(".questions-list__button")) {

    const questionsListItemAll = document.querySelectorAll(".questions-list__item");

    const questionsListItem = elementInteractive.closest(".questions-list__item");

    const questionsListItemBottom = questionsListItem.querySelector(".questions-list__bottom"); 

    if (!questionsListItem.classList.contains("active")) {

      questionsListItemAll.forEach(function (e) {
        e.classList.remove("active");
        gsap.to(e.querySelector(".questions-list__bottom"), {
          height: 0,
        });
      })

      questionsListItem.classList.add("active");

      gsap.to(questionsListItemBottom, {
        height: 'auto',
      });

    } else if (questionsListItem.classList.contains("active")) {

      questionsListItem.classList.remove("active");

      gsap.to(questionsListItemBottom, {
        height: 0,
      });
    }

  }
})


document.addEventListener("click", function (e) {
  const elementInteractive = e.target;
  if (elementInteractive.closest(".search")) {
    document.querySelector(".wrapper-form").classList.add("active");
  }
  if (elementInteractive.closest(".wrapper-form__exit")) {
    document.querySelector(".wrapper-form").classList.remove("active");
  }
  if (elementInteractive.closest(".wrapper-form__close")) {
    document.querySelector(".wrapper-form").classList.remove("active");
  }
})
}; 