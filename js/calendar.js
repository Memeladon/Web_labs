// Получаем элемент календаря
const calendar = document.getElementById('calendar');

// Создаем массив названий месяцев
const monthNames = [
    'Январь', 'Февраль', 'Март',
    'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь',
    'Октябрь', 'Ноябрь', 'Декабрь'
];

// Получаем текущую дату
let currentDate = new Date();

// Создаем заголовок календаря с названием месяца и года
const header = document.createElement('div');
header.classList.add('header');
const prevMonthButton = document.createElement('button');
prevMonthButton.innerText = '<';
prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

const nextMonthButton = document.createElement('button');
nextMonthButton.innerText = '>';
nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

const monthName = document.createElement('span');
monthName.innerText = monthNames[currentDate.getMonth()];
const yearSelector = document.createElement('select');
yearSelector.addEventListener('change', () => {
    currentDate.setFullYear(parseInt(yearSelector.value));
    renderCalendar();
});

for (let i = currentDate.getFullYear() - 10; i <= currentDate.getFullYear() + 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    yearSelector.add(option);
}

yearSelector.value = currentDate.getFullYear();
header.appendChild(prevMonthButton);
header.appendChild(monthName);
header.appendChild(yearSelector);
header.appendChild(nextMonthButton);
calendar.appendChild(header);

// Создаем заголовки дней недели
const weekdays = document.createElement('div');
weekdays.classList.add('weekdays');
const weekdayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
for (let i = 0; i < weekdayNames.length; i++) {
    const weekday = document.createElement('div');
    weekday.innerText = weekdayNames[i];
    weekdays.appendChild(weekday);
}
calendar.appendChild(weekdays);

// Создаем ячейки календаря
const days = document.createElement('div');
days.classList.add('days');
renderCalendar();

function renderCalendar() {
    // Очищаем календарь
    days.innerHTML = '';

    // Создаем заголовок месяца
    monthName.innerText = monthNames[currentDate.getMonth()];

    // Заполняем выбор года
    yearSelector.value = currentDate.getFullYear();

    // Получаем количество дней в текущем месяце
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Получаем первый день текущего месяца
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    // Заполняем календарь пустыми ячейками до первого дня месяца
    for (let i = 0; i < firstDayOfMonth; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        days.appendChild(day);
    }

    // Заполняем календарь днями месяца
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.innerText = i;

        // Выделяем субботу и воскресенье
        if (new Date(currentDate.getFullYear(), currentDate.getMonth(), i).getDay() === 6 ||
            new Date(currentDate.getFullYear(), currentDate.getMonth(), i).getDay() === 0)
        {
            day.classList.add('weekend');
        }

        // Выделяем текущий день
        if (new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toDateString())
        {
            day.classList.add('today');
        }

        // Выделяем выбранный день
        if (calendar.selectedDate && new Date(calendar.selectedDate).toDateString() ===
            new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toDateString())
        {
            day.classList.add('selected');
        }

        // Добавляем обработчик клика на день
        day.addEventListener('click', () => {
            if (calendar.selectedDate) {
                document.querySelector('.selected').classList.remove('selected');
            }
            day.classList.add('selected');
            calendar.selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toDateString();
        });

        days.appendChild(day);
    }

    // Заполняем календарь пустыми ячейками после последнего дня месяца
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), daysInMonth).getDay();
    for (let i = lastDayOfMonth; i < 6; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        days.appendChild(day);
    }
}

calendar.appendChild(days);