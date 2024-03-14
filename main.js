const button = document.querySelector('button');

button.addEventListener('click', () => {
    
});

let img = document.createElement('img');
img.src = 'img/gremio-logo-0.png'
let currentPlayer = img;
let board = ['', '', '', '', '', '', '', '', '', ];

function cellClicekd(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].innerHTML = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'x'; //se o curent player for = X ele troca para O, se não troca para X
    }            
}
