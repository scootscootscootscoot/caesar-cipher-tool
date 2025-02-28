const readlineSync = require('readline-sync');

// Function to perform Caesar Cipher encryption
function encrypt(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-zA-Z]/)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97; // Handle uppercase/lowercase
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char; // Non-alphabetic characters remain unchanged
    }).join('');
}

// Function to perform Caesar Cipher decryption
function decrypt(text, shift) {
    return encrypt(text, -shift); // Decryption is just encryption with negative shift
}

// Main function to interact with the user
function main() {
    console.log('Welcome to the Caesar Cipher Tool!');
    const choice = readlineSync.question('Do you want to (e)ncrypt or (d)ecrypt? ').toLowerCase();
    
    if (choice !== 'e' && choice !== 'd') {
        console.log('Invalid choice. Please enter "e" or "d".');
        return;
    }

    const text = readlineSync.question('Enter the text: ');
    const shift = parseInt(readlineSync.question('Enter the shift value (1-25): '));

    if (isNaN(shift) || shift < 1 || shift > 25) {
        console.log('Invalid shift. Please enter a number between 1 and 25.');
        return;
    }

    if (choice === 'e') {
        const encrypted = encrypt(text, shift);
        console.log(`Encrypted text: ${encrypted}`);
    } else {
        const decrypted = decrypt(text, shift);
        console.log(`Decrypted text: ${decrypted}`);
    }
}

// Run the program
main();
