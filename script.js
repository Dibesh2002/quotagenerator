// script.js
const quotes = {
    inspirational: [
        "The best way to get started is to quit talking and begin doing. - Walt Disney",
        "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill"
    ],
    science: [
        "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
        "The important thing is not to stop questioning. Curiosity has its own reason for existence. - Albert Einstein"
    ]
};

let currentCategory = 'inspirational';
let currentIndex = 0;

const quoteDisplay = document.getElementById('quoteDisplay');
const categorySelect = document.getElementById('categorySelect');
const prevQuoteButton = document.getElementById('prevQuote');
const nextQuoteButton = document.getElementById('nextQuote');
const randomQuoteButton = document.getElementById('randomQuote');
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;
const decreaseFontButton = document.getElementById('decreaseFont');
const increaseFontButton = document.getElementById('increaseFont');

// Initial Quote Display
quoteDisplay.textContent = quotes[currentCategory][currentIndex];

// Category Switch
categorySelect.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    currentIndex = 0;
    displayQuote();
});

// Previous and Next Buttons
prevQuoteButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = quotes[currentCategory].length - 1;
    }
    displayQuote();
});

nextQuoteButton.addEventListener('click', () => {
    if (currentIndex < quotes[currentCategory].length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    displayQuote();
});

// Random Quote Button
randomQuoteButton.addEventListener('click', () => {
    currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    displayQuote();
});

// Theme Toggle
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
});

// Font Size Adjustments
let fontSize = 16;
decreaseFontButton.addEventListener('click', () => {
    fontSize = Math.max(12, fontSize - 2);
    quoteDisplay.style.fontSize = fontSize + 'px';
});

increaseFontButton.addEventListener('click', () => {
    fontSize = Math.min(32, fontSize + 2);
    quoteDisplay.style.fontSize = fontSize + 'px';
});

// Display Quote Function
function displayQuote() {
    quoteDisplay.textContent = quotes[currentCategory][currentIndex];
}
