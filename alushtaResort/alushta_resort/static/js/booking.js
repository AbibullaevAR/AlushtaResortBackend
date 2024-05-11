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
            if (request.status >= 400) {
                buttonFormElem.innerHTML = getSendButtonHTML(true);
            } else {
                buttonFormElem.innerHTML = getSendButtonHTML(false);
            }
        })
    })

    function getLoaderButtonHTML() {
        return `<button type="button">
                    <div class="loader"></div>
                </button>`
    }

    function getSendButtonHTML(isError) {
        return `
        ${isError ? 
            '<span class="main__booking-form-status main__booking-form-status_error">Error</span>'
            : '<span class="main__booking-form-status main__booking-form-status_success">Ok</span>'
        }
                <button type="button">
                    Отправить
                </button>`
    }

}())