document.addEventListener('DOMContentLoaded', function () {
    let cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
    let flippedCards = [];
    let matchedCards = [];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createBoard() {
        const board = document.getElementById('game-board');
        shuffle(cards);

        cards.forEach(function (card, index) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.cardIndex = index;
            cardElement.textContent = card;
            cardElement.addEventListener('click', flipCard);
            board.appendChild(cardElement);
        });
    }

    function flipCard() {
        if (flippedCards.length < 2) {
            const selectedCard = this;
            selectedCard.classList.add('flipped');
            flippedCards.push(selectedCard);

            if (flippedCards.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const index1 = card1.dataset.cardIndex;
        const index2 = card2.dataset.cardIndex;

        if (cards[index1] === cards[index2]) {
            matchedCards.push(card1, card2);
            if (matchedCards.length === cards.length) {
                setTimeout(() => alert('Gratulálok!'), 500);
            }
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }

        flippedCards = [];
    }

    createBoard();
});