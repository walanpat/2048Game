import Game from "./game.js"

export const main = function (game) {
    const $root = $('#root');

    let textmess = `<p id="textmess">Good luck!</p>`;

    let score = `<div id="score">Current Score: ${game.gameState.score}</div>`

    let tileBoard = `<div id="tileBoard">`;

    for (let i = 0; i < game.size * game.size; i++) {
        if (game.gameState.board[i] === 0) {
            tileBoard += `<div id="tile">${game.gameState.board[i]}</div>`

        }
        if (game.gameState.board[i] === 2) {
            tileBoard += `<div id="tile2">${game.gameState.board[i]}</div>`

        }
        if (game.gameState.board[i] === 4) {
            tileBoard += `<div id="tile4">${game.gameState.board[i]}</div>`

        }
        if (game.gameState.board[i] === 8) {
            tileBoard += `<div id="tile8">${game.gameState.board[i]}</div>`

        }
        if (game.gameState.board[i] === 16) {
            tileBoard += `<div id="tile16">${game.gameState.board[i]}</div>`

        }
        if (game.gameState.board[i] === 32) {
            tileBoard += `<div id="tile32">${game.gameState.board[i]}</div>`

        }
        if (game.gameState.board[i] === 64) {
            tileBoard += `<div id="tile64">${game.gameState.board[i]}</div>`

        }
        if (game.gameState.board[i] == 128) {
            tileBoard += `<div id="tile128">${game.gameState.board[i]}</div>`

        }
        if (game.gameState.board[i] === 256) {
            tileBoard += `<div id="tile256">${game.gameState.board[i]}</div>`

        }
        if (game.gameState.board[i] === 512) {
            tileBoard += `<div id="tile512">${game.gameState.board[i]}</div>`

        }
        if (game.gameState.board[i] === 1024) {
            tileBoard += `<div id="tile1024">${game.gameState.board[i]}</div>`

        }
        if (game.gameState.board[i] === 2048) {
            tileBoard += `<div id="tile2048">${game.gameState.board[i]}</div>`

        }
    }
    if (game.gameState.won) {
        textmess = `<p id="textmess">Congrats on winning, if you want a real challenge try coding this :(</p>`
    }

    if (game.gameState.over) {
        textmess = `<p id="textmess">You lost. Sometimes the key to victory is knowing when to cut your losses.</p>`

    }
    let restart = `<button type="button" id="restart">Restart</restart>`;
    $root.html(game);
    $root.append(textmess);
    $root.append(score);
    $root.append(tileBoard);
    $root.append(restart);
}

$(function () {
    let game = new Game(4);

    main(game);

    $(document).on('keydown', function (p) {
        p.preventDefault();
        if (p.keyCode == '39') {
            game.move('right');
        }
        if (p.keyCode == '37') {
            game.move('left');
        }
        if (p.keyCode == '40') {
            game.move('down');
        }
        if (p.keyCode == '38') {
            game.move('up');
        }
        const $root = $('#root');
        let textmess = `Go hard.`;
        let score = `<div id="score">Current Score: ${game.gameState.score}</div>`
        let tileBoard = `<div id="tileBoard">`;
        for (let i = 0; i < game.size * game.size; i++) {
            if (game.gameState.board[i] === 0) {
                tileBoard += `<div id="tile">${game.gameState.board[i]}</div>`

            }
            if (game.gameState.board[i] === 2) {
                tileBoard += `<div id="tile2">${game.gameState.board[i]}</div>`

            }
            if (game.gameState.board[i] === 4) {
                tileBoard += `<div id="tile4">${game.gameState.board[i]}</div>`

            }
            if (game.gameState.board[i] === 8) {
                tileBoard += `<div id="tile8">${game.gameState.board[i]}</div>`

            }
            if (game.gameState.board[i] === 16) {
                tileBoard += `<div id="tile16">${game.gameState.board[i]}</div>`

            }
            if (game.gameState.board[i] === 32) {
                tileBoard += `<div id="tile32">${game.gameState.board[i]}</div>`

            }
            if (game.gameState.board[i] === 64) {
                tileBoard += `<div id="tile64">${game.gameState.board[i]}</div>`

            }
            if (game.gameState.board[i] == 128) {
                tileBoard += `<div id="tile128">${game.gameState.board[i]}</div>`

            }
            if (game.gameState.board[i] === 256) {
                tileBoard += `<div id="tile256">${game.gameState.board[i]}</div>`

            }
            if (game.gameState.board[i] === 512) {
                tileBoard += `<div id="tile512">${game.gameState.board[i]}</div>`
            }
            if (game.gameState.board[i] === 1024) {
                tileBoard += `<div id="tile1024">${game.gameState.board[i]}</div>`
            }
            if (game.gameState.board[i] === 2048) {
                tileBoard += `<div id="tile2048">${game.gameState.board[i]}</div>`
            }
        }

        if (game.gameState.won) {
            textmess = `<p id="textmess">You won, you can go home now</p>`
        }

        if (game.gameState.over) {
            textmess = `<p id="textmess">You lost.  Sucks to suck m8`
        }

        let restart = `<button type="button" id="restart">Restart Here</button>`

        $(document).on('click', `#restart`, function () {
            game.setupNewGame();
            const $root = $('#root');
            let score = `<div id="score">Current Score: ${game.gameState.score}</div>`
            let textmess = `Good luck!`;
            let tileBoard = `<div id="tileBoard">`;
            for (let i = 0; i < game.size * game.size; i++) {
                if (game.gameState.board[i] === 0) {
                    tileBoard += `<div id="tile">${game.gameState.board[i]}</div>`

                }
                if (game.gameState.board[i] === 2) {
                    tileBoard += `<div id="tile2">${game.gameState.board[i]}</div>`

                }
                if (game.gameState.board[i] === 4) {
                    tileBoard += `<div id="tile4">${game.gameState.board[i]}</div>`

                }
                if (game.gameState.board[i] === 8) {
                    tileBoard += `<div id="tile8">${game.gameState.board[i]}</div>`

                }
                if (game.gameState.board[i] === 16) {
                    tileBoard += `<div id="tile16">${game.gameState.board[i]}</div>`

                }
                if (game.gameState.board[i] === 32) {
                    tileBoard += `<div id="tile32">${game.gameState.board[i]}</div>`

                }
                if (game.gameState.board[i] === 64) {
                    tileBoard += `<div id="tile64">${game.gameState.board[i]}</div>`

                }
                if (game.gameState.board[i] == 128) {
                    tileBoard += `<div id="tile128">${game.gameState.board[i]}</div>`

                }
                if (game.gameState.board[i] === 256) {
                    tileBoard += `<div id="tile256">${game.gameState.board[i]}</div>`

                }
                if (game.gameState.board[i] === 512) {
                    tileBoard += `<div id="tile512">${game.gameState.board[i]}</div>`

                }
                if (game.gameState.board[i] === 1024) {
                    tileBoard += `<div id="tile1024">${game.gameState.board[i]}</div>`

                }
                if (game.gameState.board[i] === 2048) {
                    tileBoard += `<div id="tile2048">${game.gameState.board[i]}</div>`

                }
            }
            if (game.gameState.won) {
                textmess = `<p id="textmess">You won.  Please leave or restart.(</p>`
            }
            if (game.gameState.over) {
                textmess = `<p id="textmess">You lost.  Sucks to suck m8</p>`
            }
            let restart = `<button type="button" id="restart">Restart</button>`
            $root.html(game)
            $root.append(textmess);
            $root.append(score)
            $root.append(tileBoard)
            $root.append(restart)
        });
        $root.html(game)
        $root.append(textmess)
        $root.append(score)
        $root.append(tileBoard)
        $root.append(restart)
    });
});