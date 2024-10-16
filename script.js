const toggleButton = document.querySelector('.main--button_hide-button');
const hiddenItems = document.querySelectorAll('.hidden');
const hiddenTabletItems = document.querySelectorAll('.hidden_tablet');

// Начальная установка текста и класса для стрелки
toggleButton.textContent = 'Показать всё'; // или начальный текст
toggleButton.classList.add('show-all'); // Устанавливаем класс для начального состояния (стрелка вниз)

toggleButton.addEventListener('click', () => {
    // Переключаем скрытые элементы для ПК
    hiddenItems.forEach(item => {
        item.classList.toggle('hidden');
    });

    // Переключаем скрытые элементы для планшета
    hiddenTabletItems.forEach(item => {
        item.classList.toggle('hidden_tablet');
    });

    // Меняем текст кнопки в зависимости от состояния
    if (toggleButton.textContent.trim() === 'Показать всё') {
        toggleButton.textContent = 'Скрыть';
        toggleButton.classList.remove('show-all');
        toggleButton.classList.add('hide-all'); // Добавляем класс для поворота вверх
    } else {
        toggleButton.textContent = 'Показать всё';
        toggleButton.classList.remove('hide-all'); // Удаляем класс для возврата
        toggleButton.classList.add('show-all'); // Возвращаем класс для базового состояния
    }
});
