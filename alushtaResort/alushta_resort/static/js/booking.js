(function () {
    const nameFieldFormElem = document.querySelector('.main__booking-form-name');
    const emailFieldFormElem = document.querySelector('.main__booking-form-email');
    const messageFieldFormElem = document.querySelector('.main__booking-form-message');
    const buttonFormElem = document.querySelector('.main__booking-form-button');

    buttonFormElem.addEventListener('click', () => {
        const bookingForm = new FormData();
        bookingForm.append('name', nameFieldFormElem.value);
        bookingForm.append('email', emailFieldFormElem.value);
        bookingForm.append('message', messageFieldFormElem.innerHTML);

        buttonFormElem.innerHTML = getLoaderButtonHTML();

        fetch('http://127.0.0.1:8000/api/bookingForm', {
            method: 'POST',
            body: bookingForm
        }).then(request => {
            console.log(request.status)
        }).catch((error) => {
            console.log(error.status)
        }).finally(() => {
            buttonFormElem.innerHTML = getSendButtonHTML();
        })
    })

    function getLoaderButtonHTML() {
        return `<button type="button">
                    <div class="loader"></div>
                </button>`
    }

    function getSendButtonHTML() {
        return `<button type="button">
                    Отправить
                </button>`
    }

}())