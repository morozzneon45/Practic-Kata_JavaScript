document.addEventListener('DOMContentLoaded', function () {
    let swiper;

    function initSwiper() {
        const swiperElement = document.getElementById('swiper');

        if (window.innerWidth < 768) {
            if (!swiper) {
                swiper = new Swiper(swiperElement, {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                    pagination: {
                        el: '.slider__pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        768: {
                            enabled: false,
                        }
                    }
                });
            }
        } else if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
    }

    initSwiper();
    window.addEventListener('resize', initSwiper);
});
