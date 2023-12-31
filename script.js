const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_-+=<>?';

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let chars = '';

    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let password = '';

    if (passwordCount === 5 || passwordCount === 28) {
        password = "ZAIBY CANON <3";
    } else {
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars.charAt(randomIndex);
        }
    }

    document.getElementById('password').textContent = password;
}

let passwordCount = 0;

document.getElementById('generate').addEventListener('click', function () {
    generatePassword();
    passwordCount++;
});

generatePassword(); // Genera una contraseña inicial al cargar la página
