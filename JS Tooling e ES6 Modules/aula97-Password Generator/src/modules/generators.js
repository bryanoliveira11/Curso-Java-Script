const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateUpper = () => String.fromCharCode(rand(65, 91));
const generateLower = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;`^@#$%&*_+-=()';
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(length, uppers, lowers, numbers, symbols) {
    const passwdArray = [];
    length = Number(length);

    for(let i = 0; i <= length; i++) {
        if (uppers) passwdArray.push(generateUpper());
        if (lowers) passwdArray.push(generateLower());
        if (numbers) passwdArray.push(generateNumber());
        if (symbols) passwdArray.push(generateSymbol());
    }
    return passwdArray.join('').slice(0, length);
}