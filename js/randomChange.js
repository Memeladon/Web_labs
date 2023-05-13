// Получаем все блоки и сохраняем их в переменную
const blocks = document.querySelectorAll('.block');

// Функция для получения случайного числа от min до max (включительно)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для изменения случайного блока
function changeRandomBlock() {
    // Получаем случайный индекс блока
    const randomIndex = getRandomNumber(0, blocks.length - 1);
    // Изменяем фон случайного блока
    blocks[randomIndex].style.backgroundColor = 'purple';
}

// Устанавливаем интервал для изменения блоков
// setInterval(changeRandomBlock, 100);