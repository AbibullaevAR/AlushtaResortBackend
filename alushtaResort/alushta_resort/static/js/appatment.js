(function () {

    const appartmentCardsElements = document.querySelectorAll('.main__appartment-card');

    appartmentCardsElements.forEach(card => {
        const aboutElement = card.querySelector('.main__appartment-about');
        const decorateButtonElement = card.querySelector('.main__appartment-description-more-button-decoreated');
        const descriptionElement = card.querySelector('.main__appartment-description');

        descriptionElement.addEventListener('click', () => {
            aboutElement.classList.toggle('main__appartment-about_open');
            decorateButtonElement.classList.toggle('main__appartment-description-more-button-decoreated_close');
        })
    });

}())