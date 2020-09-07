'use strict'

// dropdown
function toggleMenu(e) {
    e.preventDefault();
    document.body.classList.toggle('menu-opened');
}

// close menu onclick menu__link
function menuLinks(){
    const navMenu = document.querySelector('.menu');
       if(window.innerWidth <= 992) {
           navMenu.addEventListener('click',function(event) {
               let menuLink = event.target.classList.contains('menu__link');
                   menuLink ? document.body.classList.remove('menu-opened') : null;
           });
       }
}
window.addEventListener('resize', menuLinks);
menuLinks();

//slider 
var swiper = new Swiper('.swiper-container--about', {
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiperBlogImg = new Swiper('.swiper-container--blog-img', {
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.blog-buttons__button--next',
        prevEl: '.blog-buttons__button--prev',
    },
});
