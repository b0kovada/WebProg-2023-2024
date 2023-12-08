document.addEventListener('DOMContentLoaded', function () {
    const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let shuffledSymbols = shuffle(symbols);
    let flipped = [];
    let matching = [];

    const gameContainer = document.getElementById('game_container');

    function newCard(symbol) {
        const card = document.createElement('div');
        card.classList.add('card');

        const innerCard = document.createElement('div');
        innerCard.classList.add('card_inner');
        card.appendChild(innerCard);

        const front = document.createElement('div');
        front.classList.add('image', 'front');
        front.textContent = ''; 
        innerCard.appendChild(front);

        const back = document.createElement('div');
        back.classList.add('image', 'back');
        back.textContent = symbol;
        innerCard.appendChild(back);

        card.addEventListener('click', () => flipCard(card, symbol));
        return card;
    }

    function flipCard(card, symbol) {
        if (flipped.length < 2 && !flipped.includes(card) && !matching.includes(card)) {
            card.classList.add('flipped');
            flipped.push(card);

            if (flipped.length === 2) {
                setTimeout(() => checkMatch(), 500);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flipped;
        const symbol1 = card1.querySelector('.back').textContent;
        const symbol2 = card2.querySelector('.back').textContent;

        if (symbol1 === symbol2) {
            matching.push(card1, card2);
            flipped = [];

            if (matching.length === symbols.length) {
                setTimeout(() => alert('Congratulations!'), 200);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flipped = [];
            }, 500);
        }
    }

    function shuffle(array) {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    shuffledSymbols.forEach(symbol => gameContainer.appendChild(newCard(symbol)));
});