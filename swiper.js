document.addEventListener('DOMContentLoaded', function () {
       // Функция инициализации Swiper
       function initSwiper() {
           const swiperElement = document.getElementById('swiper');
           if (window.innerWidth < 768) { // Измените по необходимости
               const swiper = new Swiper(swiperElement, {
                   slidesPerView: 1.2,
                   spaceBetween: 10,
                   pagination: {
                       el: '.swiper-pagination',
                       clickable: true,
                   },
                   navigation: {
                       nextEl: '.swiper-button-next',
                       prevEl: '.swiper-button-prev',
                   },
               });
           }
       }

       // Инициализируем Swiper при загрузке страницы
       initSwiper();

       // Переинициализация при изменении размера окна
       window.addEventListener('resize', () => {
           const swiperElement = document.getElementById('swiper');
           // Удаляем экземпляр Swiper, если он существует
           if (swiperElement.swiper) {
               swiperElement.swiper.destroy(true, true);
           }
           initSwiper();
       });
   });
