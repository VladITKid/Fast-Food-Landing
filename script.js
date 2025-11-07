// Правая сторона Третьей секции
(() => {
    // Кнопка
    var button = document.querySelector(".home__section-3-right-part-products-see-all-btn")

    // Массив с основными изменяемыми элементами
    var mainChangingElements = [
        // #0 — Сам элемент
        document.querySelector(".home__section-3-right-part"),
        // #1 — Градиент-контейнер
        document.querySelector(".home__section-3-right-part-products-gradient"),
        // #2 — Форма поиска
        document.querySelector(".home__section-3-right-part-products-form"),
        // #3 — Сетка с карточками
        document.querySelector(".home__section-3-right-part-products-items-grid")
    ];

    // Предварительно скрываю Форму поиска
    mainChangingElements[2].classList.add("home__section-3-right-part-products-form--inactive");

    // Увеличенные карточки
    var upscaledCards = document.querySelectorAll("#upscaledCards");
    // Предварительно увеличиваю карточки циклом
    upscaledCards.forEach(element => {
        element.classList.add("home__section-3-right-part-products-item--upscaled");
    });

    // Скрываемые карточки
    var hidingCards = document.querySelectorAll('#hidingCards');
    // Предварительно скрываю карточки циклом
    hidingCards.forEach(element => {
        element.classList.add("home__section-3-right-part-products-item--inactive");
    });

    // Разворачивающая функция
    var expand = function () {
        // Разворачиваю элемент
        mainChangingElements[0].classList.add("home__section-3-right-part--expanded");
        // Скрываю градиент (с кнопкой)
        mainChangingElements[1].classList.add("home__section-3-right-part-products-gradient--inactive");
        // Отображаю форму
        mainChangingElements[2].classList.remove("home__section-3-right-part-products-form--inactive");
        // Меняю сетку
        mainChangingElements[3].classList.add("home__section-3-right-part-products-items-grid--expanded");
        // Отображаю скрытые карточки
        hidingCards.forEach(element => {
            element.classList.remove("home__section-3-right-part-products-item--inactive");
        });

    };
    // Вызов функции кликом (по кнопке)
    button.addEventListener('click', expand);

    // ! Не работает
    // Сворачивание элемента при клике вне его области
    // document.addEventListener('click', (event) => {
    //     if (!mainChangingElements[0].contains(event.target)) {
    //         mainChangingElements[0].classList.remove('mainChangingElements[0]--expanded');
    //     }
    // });
})();