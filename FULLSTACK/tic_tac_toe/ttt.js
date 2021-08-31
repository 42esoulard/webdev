let gameBoard = (function() {

    const squares = document.querySelectorAll('div[class="square"]');
    let board = ['', '', '', 
                 '', '', '', 
                 '', '', ''];
        /*       0 1 2 / 3 4 5 / 6 7 8 
                 0 3 6 / 1 4 7 / 2 5 8 
                 0 4 8 / 2 4 6         */

    const init = function() {
        for (let i = 0; i < 9; i++)
            board[i] = '';
    }

    const display = function() {
        let i = 0;
        squares.forEach(square => square.textContent = board[i++]);
    }

    const playerMove = function(squareIndex, player) {
        if (board[Number(squareIndex)] !== '')
            return 0;
        board[Number(squareIndex)] = player.getSign();
        return 1;
    }

    const setupEvents = function() {
        squares.forEach(square => square.addEventListener('click', game.playerMove));
    };

    const suspendEvents = function() {
        squares.forEach(square => square.removeEventListener('click', game.playerMove));
    };

    const check = function() {
        let sign;
        let j;

        for (let i = 0; i <= 6; i++) {
            if (board[i] !== '') {
                sign = board[i];
                j = i;
                while ((i === 0 || i === 3 || i === 6) 
                    && board[j] === sign) { //checking rows
                    j++;
                    if (j === i + 3)
                        return sign;
                }
                j = i;
                while (i < 3 && board[j] === sign) { //checking columns
                    j += 3;
                    if (j === i + 9)
                        return sign;
                }
            }
        }
        // checking diagonals
        if (board[4] !== '' && ((board[0] === board[4] && board[4] === board[8]) 
            || (board[2] === board[4] && board[4] === board[6])))
            return board[4];
        
        // checking tie
        if (board.indexOf('') < 0)
            return 'TIE';
        
    }

    return {
        init,
        setupEvents,
        suspendEvents,
        playerMove,
        check,
        display,
        
    };
})();

let player = (name, sign) => {

    let score = 0;
    sign;
    name;

    const getSign = function() {
        return sign;
    }
    const getName = function() {
        return name;
    }
    const getScore = function() {
        return score;
    }

    const levelUp = function() {
        score++;
    }

    return {
       name,
       getSign,
       getName,
       getScore,
       levelUp,
    };
};

let game = (function() {

    const players = [
        player('PlayerO', '0'),
        player('PlayerX', 'X'),
    ]

    const editPlayerName = function() {
        players[Number(this['id'].substr(1))].name = this.textContent;
    }
    const playerNames = document.querySelectorAll(`div[class='name']`);
    playerNames.forEach(name => name.addEventListener('input', editPlayerName));

    const playerScores = document.querySelectorAll(`div[class='score']`);
    const updateScores = function() {
        let i = 0;
        playerScores.forEach(score => {
            score.textContent = `Score: ${players[i++].getScore()}`
        })
    }

    let turn = 0;

    const playAgain = function() {
        if (confirm('New game?')) {
            gameBoard.init();
            gameBoard.display();
            gameBoard.setupEvents();
        }
        if (winner.style.display === 'block')
            winner.style.display = 'none';
    }
    const restart = document.querySelector('button');
    restart.addEventListener('click', playAgain);

    const winner = document.querySelector("div[class='winner']");
    const winnerName = document.querySelector("div[class='winnerName']");
    const gameOver = function(gameEnd) {
        gameBoard.suspendEvents();
        if (gameEnd === 'TIE')
            alert("It's a tie!");
        else {
            winnerName.textContent = `${players[(turn - 1) % 2].name}!`;
            winner.style.display = 'block';
            players[(turn - 1) % 2].levelUp();
            updateScores();
        }
    }

    const playerMove = function() {
        turn += gameBoard.playerMove(this['id'].substring(1), players[turn % 2]);
        gameBoard.display();
        if (gameEnd = gameBoard.check())
            gameOver(gameEnd);
    }

    const displayBoard = (function() {
        gameBoard.display();
    })();

    return {
        playerMove,
    };
})();

gameBoard.setupEvents();

