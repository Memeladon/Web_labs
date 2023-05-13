// Получаем таблицу и массив элементов
const table = document.querySelector('table');

// Назначаем обработчик на ячейки таблицы
table.addEventListener('dblclick', function(event) {
    const cell = event.target;

    // Генерируем случайное число и вставляем в ячейку
    const randomNum = Math.floor(Math.random() * 98) + 2;
    cell.textContent = randomNum;

    // Изменяем стиль ячейки
    cell.classList.add('active');

    // Если достигнут конец массива, начинаем сначала
    if (randomNum === elements.length - 1) {
        elements.reverse();
    }
});