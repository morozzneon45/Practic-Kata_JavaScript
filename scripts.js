document.addEventListener("DOMContentLoaded", function() {
  const hideButton = document.getElementById("hideButton");
  const companiesList = document.querySelector(".main__companies-list");
  const companiesBlocks = companiesList.getElementsByClassName("main--companies-list_block");

  let maxVisibleBlocks;

  // Функция для определения максимального количества видимых блоков
  function getMaxVisibleBlocks() {
    if (window.matchMedia("(min-width: 1120px)").matches) {
      return 8; // 4 блока для экранов 1120px и больше
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      return 6; // 6 блоков для экранов 768px и больше
    } else {
      return companiesBlocks.length; // Показываем все блоки для экранов менее 768px
    }
  }

  // Функция для скрытия лишних блоков
  function hideExtraBlocks() {
    maxVisibleBlocks = getMaxVisibleBlocks();
    for (let i = 0; i < companiesBlocks.length; i++) {
      if (i >= maxVisibleBlocks) {
        companiesBlocks[i].style.display = "none";
        companiesBlocks[i].style.opacity = "0";
        companiesBlocks[i].style.transform = "translateY(50px)";
        companiesBlocks[i].style.transition = "opacity 0.5s, transform 0.5s";
      } else {
        companiesBlocks[i].style.display = "flex";
        companiesBlocks[i].style.opacity = "1";
        companiesBlocks[i].style.transform = "translateY(0)";
        companiesBlocks[i].style.transition = "opacity 0.5s, transform 0.5s";
      }
    }
  }

  hideExtraBlocks();

  let isHidden = true;

  hideButton.addEventListener("click", function() {
    if (isHidden) {
      // Показываем все скрытые блоки
      for (let i = maxVisibleBlocks; i < companiesBlocks.length; i++) {
        companiesBlocks[i].style.display = "flex";
        companiesBlocks[i].style.opacity = "0";
        companiesBlocks[i].style.transform = "translateY(50px)";
        companiesBlocks[i].offsetHeight; // Триггер перерисовки
        companiesBlocks[i].style.opacity = "1";
        companiesBlocks[i].style.transform = "translateY(0)";
      }
      hideButton.textContent = "Скрыть";
      hideButton.classList.add("rotate");
    } else {
      // Скрываем все блоки, кроме первых maxVisibleBlocks
      for (let i = maxVisibleBlocks; i < companiesBlocks.length; i++) {
        companiesBlocks[i].style.opacity = "0";
        companiesBlocks[i].style.transform = "translateY(50px)";
        setTimeout(function() {
          companiesBlocks[i].style.display = "none";
        }, 500); // Задержка в 0.5 секунды перед скрытием элемента
      }
      hideButton.textContent = "Показать все";
      hideButton.classList.remove("rotate");
    }
    isHidden = !isHidden;
  });

  // Обновляем количество видимых блоков при изменении размера окна
  window.addEventListener("resize", function() {
    hideExtraBlocks();
  });

  // Инициализация Swiper только для мобильных устройств (меньше 768px)
  if (window.matchMedia("(max-width: 767px)").matches) {
    const swiper = new Swiper('.swiper', {
      loop: false, // Бесконечная прокрутка
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Делает пагинацию кликабельной
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});
