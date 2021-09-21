const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);
function onInputChange(change) {
    if (inputRef.value === '') {
        outputRef = 'незнакомец';
        console.log('');
    }
    else outputRef.textContent = change.currentTarget.value;
    console.log('change.currentTarget.value');
}