const formEl = document.querySelector('.js-form');
const boxNotesEl = document.querySelector('.js-items');
const backdrop = document.querySelector('.backdrop');
const modalka = document.querySelector('.modalka');

 /* Отримуємо посилання на поля */
const titleEl = formEl.elements.title;
const imageUrlEl = formEl.elements.image;
const descriptionEl = formEl.elements.description;
const priorityEl = formEl.elements.priority;



let cards = [];//порожній масив для збереження карток

// Перевіряємо, чи є збережені картки в localStorage
const savedCards = localStorage.getItem('cards');
if (savedCards) {
cards = JSON.parse(savedCards);
cards.forEach(createCard); // Створюємо картки на основі збережених даних
}

formEl.addEventListener('submit', e => {
    e.preventDefault();

/* Отримуємо значення з полів */
    const title = titleEl.value.trim();
    const image = imageUrlEl.value.trim();
    const description = descriptionEl.value.trim().replace(/\n/g, '<br>');
    const priority = priorityEl.value;


    if (!(title && image && description && priority)) {
        return alert('Заповніть всі поля!');
    }

    const data = { title, image, description, priority, };

    cards.push(data); //зберігаємо об'єкт(картку) до масиву

       // Зберігаємо оновлений масив у localStorage
    localStorage.setItem('cards', JSON.stringify(cards));

    // Додаємо картку до DOM
    createCard(data);

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

    boxNotesEl.insertAdjacentHTML('beforeend', markup);
};

// обробник подій на кнопки

boxNotesEl.addEventListener('click', e => { 

    const btn = e.target;

    if (e.target === e.currentTarget) return;

    const card = btn.closest('li');//шукаемо батьківський елемент(картку/li) у кнопки
    
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
        const image = card.querySelector('img').src;

        const modalMarkup = `
            <h2>${title}</h2>
            <h5>${priority}</h5>
            <p style="white-space: pre-wrap;">${description}</p>
            <img src="${image}" alt="${title}" style="max-width: 100%;" />
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