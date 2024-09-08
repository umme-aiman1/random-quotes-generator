document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
        "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
        "The purpose of our lives is to be happy. – Dalai Lama",
        "Life is what happens when you’re busy making other plans. – John Lennon",
        "Get busy living or get busy dying. – Stephen King",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
        "Believe you can and you’re halfway there. – Theodore Roosevelt",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau"
    ];

    const displayQuote = document.getElementById('displayquote');
    const btn = document.getElementById('btn');

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayRandomQuote() {
        displayQuote.textContent = getRandomQuote();
    }

    btn.addEventListener('click', displayRandomQuote);

    
    displayRandomQuote();
});
