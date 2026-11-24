'use strict';

const inputName = document.querySelector('#name-input');
console.log(inputName);
const spanName = document.querySelector('#name-output');
console.log(spanName);

inputName.addEventListener('input', event => {
    const trimmed = event.currentTarget.value.trim();
    console.log(trimmed);
    spanName.textContent = trimmed === '' ? 'Anonymous' : trimmed;
})