import generatePassword from './generators';

const passwordGenerated = document.querySelector('.password-generated');
const passwordLength = document.querySelector('.passwd-length');
const chkUpper = document.querySelector('.chk-upper');
const chkLower = document.querySelector('.chk-lower');
const chkNumber = document.querySelector('.chk-number');
const chkSymbol = document.querySelector('.chk-symbol');
const generateBtn = document.querySelector('.generate-password');


export default () => {
    generateBtn.addEventListener('click', () => {
        generate();
    });
};

function generate() {
    const password = generatePassword(
        passwordLength.value,
        chkUpper.checked,
        chkLower.checked,
        chkNumber.checked,
        chkSymbol.checked,
    );
    password ? passwordGenerated.innerHTML = password : passwordGenerated.innerHTML = 'No Options Selected.';
}