
let quotes = [];

async function fetchQuotes() {
    const response = await fetch('https://type.fit/api/quotes');
    quotes = await response.json();
    generateQuote();
}

function generateQuote() {
    if (quotes.length === 0) {
        alert('No quotes available. Please try again later.');
        return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteText = quote.text;
    document.getElementById('quote').textContent = `${quoteText}`;
}

document.getElementById('generateBtn').addEventListener('click', generateQuote);

fetchQuotes();
