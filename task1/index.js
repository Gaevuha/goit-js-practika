// Отримуємо всі необхідні DOM-елементи
const formEl = document.querySelector('.js-form');
const boxEl = document.querySelector('.js-items');
const backdrop = document.querySelector('.backdrop');
const modalka = document.querySelector('.modalka');

// Отримуємо посилання на поля форми
const titleVelueEl = formEl.elements['input-value'];
const refImageEl = formEl.elements.image;
const descriptionsEl = formEl.elements.description;
const priorityEl = formEl.elements.priority;

// Масив для збереження карток
let cards = [];

// Перевіряємо, чи є збережені картки в localStorage
const savedCards = localStorage.getItem('cards');
if (savedCards) {
    cards = JSON.parse(savedCards);
    cards.forEach(createCard); // Створюємо картки на основі збережених даних
}

// Обробник подання форми
formEl.addEventListener('submit', e => {
    e.preventDefault();

    // Отримуємо значення з полів форми
    const title = titleVelueEl.value.trim();
    const image = refImageEl.value.trim();
    const description = descriptionsEl.value.trim().replace(/\n/g, '<br>');
    const priority = priorityEl.value;

    // Перевірка на заповненість полів
    if (!(title && image && description && priority)) {
        return alert('Заповніть всі поля');
    }

    // Створюємо обʼєкт даних картки
    const data = { title, image, description, priority };

    // Додаємо нову картку до масиву
    cards.push(data);

    // Зберігаємо оновлений масив у localStorage
    localStorage.setItem('cards', JSON.stringify(cards));

    // Додаємо картку до DOM
    createCard(data);

    // Очищаємо форму
    formEl.reset();
});

// Функція створення та вставки картки в DOM
function createCard(data) {
    const markup = `<li class="box item ${data.priority}">
        <h3>${data.title}</h3>
        <h5>Priority - ${data.priority.toUpperCase()}</h5>
        <div class="fb">
            <p class="item-desc">${data.description}</p>
            <img src="${data.image}" alt="${data.title}"/>
        </div>
        <button class="form-control" data-type="show">SHOW MORE</button>
        <button class="form-control" data-type="delete">DELETE</button>
    </li>`;

    boxEl.insertAdjacentHTML('beforeend', markup);
}

// Обробник подій для кнопок Show More та Delete
boxEl.addEventListener('click', e => {
    const btn = e.target;

    // Ігноруємо клік, якщо це не кнопка з потрібним data-type
    if (!btn.dataset.type) return;

    // Знаходимо батьківський елемент li
    const card = btn.closest('li');

    // Якщо кнопка DELETE — видаляємо картку з DOM і localStorage
    if (btn.dataset.type === 'delete') {
        const title = card.querySelector('h3').textContent;

        // Видаляємо з масиву картку з відповідним заголовком
        cards = cards.filter(c => c.title !== title);

        // Оновлюємо localStorage
        localStorage.setItem('cards', JSON.stringify(cards));

        // Видаляємо картку з DOM
        card.remove();
    }

    // Якщо кнопка SHOW MORE — показуємо модалку з деталями
    if (btn.dataset.type === 'show') {
        const title = card.querySelector('h3').textContent;
        const priority = card.querySelector('h5').textContent;
        const description = card.querySelector('.item-desc').innerHTML;
        const imageSrc = card.querySelector('img').src;

        const modalMarkup = `
            <h2>${title}</h2>
            <h5>${priority}</h5>
            <p style="white-space: pre-wrap;">${description}</p>
            <img src="${imageSrc}" alt="${title}" style="max-width: 100%;" />
            <button class="close-modal form-control">Close</button>
        `;

        modalka.innerHTML = modalMarkup;
        document.body.classList.add('show-modal');
    }
});

// Обробник для закриття модалки
backdrop.addEventListener('click', e => {
    if (
        e.target.classList.contains('backdrop') ||
        e.target.classList.contains('close-modal')
    ) {
        document.body.classList.remove('show-modal');
        modalka.innerHTML = ''; // Очищаємо вміст модалки
    }
});
