/*
Add your code for Game here
 */
//Collaborated with: Molly Crown , chucky menon, Daniel De Marcia;
//onLose(callback): takes a callback functiona s input, registers that function as a listner to the move event,
//when it transitions into a state where no legal moves can be made we call all previously registered lose callbacks
//passing in the games current state as an argument ot the function


export default class Game {
            //Constructor Takes a single integer representing the width/height of game
        //when new game objec tis created (e.g. const game= new game(4)) a 
        //new game of size 4x4 should be set up and the board should be initialized by randomly adding two tiles to teh game.
        //NOTE
        //game must be able to support arbitrary game board sizes
        //(2x2,3x3,4x4,5x5, etc.)
    constructor(size) {
        this.size = size;
        this.boardsize = size * size;
        this.loseCallBackArr = [];
        this.winCallBackArr = [];
        this.moveCallBackArr = [];

        this.gameState = {
            board: new Array(this.size * this.size).fill(0),
            score: 0,
            won: false,
            over: false
        }
        this.randomTile();
        this.randomTile();
    }
//setupNewGame(): resets the game back to a random start positions

//loadGame(gameState): given a gameState object, loads the board and etc
    setupNewGame() {
        this.gameState.board = new Array(this.size * this.size).fill(0);
        this.gameState.score = 0;
        this.gameState.won = Boolean = false;
        this.gameState.over = Boolean = false;

        this.randomTile();
        this.randomTile();
    }

    loadGame(x) {
        this.gameState = x;
    }

//getGameState(): returns a accurate gameState object, representign the current state of the game.
    getGameState() {
        return this.gameState;
    }
    //Moving:
    //A legal move is one that causes pieces to slide or collapce on the board
    //if a player tries to make a move that does not change the state of board
    //no move should occur, and no new tiles should be added
    //Once a move causes a 2048 tile to be created, the state should 
    //reflect the game is won.
    //Once no legal moves are available, game is over.
    moveBoard(direction) {
        let old = [...this.gameState.board];
        let size = this.gameState.size;
        let score = this.gameState.score;
        if (direction === 'up') {
            let cTile = 0;
            old.forEach(c => {
                let ut = cTile + size; // one that we are checking
                while (ut < size * size && old[cTile] == 0) {
                    if (old[ut] != 0) {
                        old[cTile] = old[ut];
                        old[ut] = 0;
                    } else {
                        ut += size;
                    }
                }
                cTile++;
            });
            cTile = 0;
            old.forEach(c => {
                let ut = cTile + size; // one that we are checking
                if (old[ut] == old[cTile]) {
                    old[cTile] = old[cTile] * 2;
                    score += old[cTile];
                    old[ut] = 0;
                }
                cTile++;
            });
            cTile = 0;
            old.forEach(c => {
                let ut = cTile + size; // one that we are checking
                while (ut < size * size && old[cTile] == 0) {
                    if (old[ut] != 0) {
                        old[cTile] = old[ut];
                        old[ut] = 0;
                    } else {
                        ut += size;
                    }
                }
                cTile++;
            });
        }
        //-============================================================
        if (direction === 'down') {
            let cTile = size * size - 1;
            old.forEach(c => {
                let ut = cTile - size; // one that we are checking
                while (ut >= 0 && old[cTile] == 0) {
                    if (old[ut] != 0) {
                        old[cTile] = old[ut];
                        old[ut] = 0;
                    } else {
                        ut -= size;
                    }
                }
                cTile--;
            });
            cTile = size * size - 1;
            old.forEach(c => {
                let ut = cTile - size; // one that we are checking
                if (old[ut] == old[cTile]) {
                    old[cTile] = old[cTile] * 2;
                    score += old[cTile];
                    old[ut] = 0;
                }
                cTile--;
            });
            cTile = size * size - 1;
            old.forEach(c => {
                let ut = cTile - size; // one that we are checking
                while (ut >= 0 && old[cTile] == 0) {
                    if (old[ut] != 0) {
                        old[cTile] = old[ut];
                        old[ut] = 0;
                    } else {
                        ut -= size;
                    }
                }
                cTile--;
            });
        }
        //=------------------------------------------------------------------------------
        if (direction === 'left') {
            let cTile = 0;
            old.forEach(c => {
                let row = cTile % size;
                let rt = 1; // one that we are checking
                while (row + rt < size && old[cTile] == 0) {
                    if (old[cTile + rt] != 0) {
                        old[cTile] = old[cTile + rt];
                        old[cTile + rt] = 0;
                    }
                    rt++;
                }
                cTile++;
            });
            //01850912835                           Combine Code
            cTile = 0;
            old.forEach(c => {
                let row = cTile % size;
                let rt = 1; // one that we are checking
                while (row + rt < size && old[cTile] != 0) {
                    if (old[cTile + rt] === old[cTile]) {
                        if (cTile + rt === cTile + 1) {
                            old[cTile] += old[cTile + rt];
                            old.score += old[cTile];
                            old[cTile + rt] = 0;
                        }
                    }
                    rt++;
                }
                cTile++;
            });
            //1203958019238509
            cTile = 0;
            old.forEach(c => {
                let row = cTile % size;
                let rt = 1; // one that we are checking
                while (row + rt < this.size && old[cTile] == 0) {
                    if (old[cTile + rt] != 0) {
                        old[cTile] = old[cTile + rt];
                        old[cTile + rt] = 0;
                    }
                    rt++;
                }
                cTile++;
            });
        }
        //----------------------------------------------------------------------------------
        if (direction === 'right') {
            let cTile = size * size - 1;
            old.forEach(c => {
                let row = cTile % size;
                let i = 1;
                while (row - i >= 0 && old[cTile] == 0) {
                    if (old[cTile - i] != 0) {
                        old[cTile] = old[cTile - i];
                        old[cTile - i] = 0;
                    }
                    i++;
                }
                cTile--;
            });
            //01850912835                           Combine Code
            cTile = size * size - 1;
            old.forEach(c => {
                let row = cTile % size;
                let i = 1; // one that we are checking
                while (row - i >= 0 && old[cTile] != 0) {
                    if (old[cTile - i] === old[cTile]) {
                        if (cTile - i === cTile - 1) {
                            old[cTile] += old[cTile - i];
                            old.score += old[cTile];
                            old[cTile - i] = 0;
                        }
                    }
                    i++;
                }
                cTile--;
            });
            //1203958019238509
            cTile = size * size - 1;
            old.forEach(c => {
                let row = cTile % size;
                // let rt = cTile-1; // one that we are checking
                let i = 1;
                while (row - i >= 0 && old[cTile] == 0) {
                    if (old[cTile - i] != 0) {
                        old[cTile] = old[cTile - i];
                        old[cTile - i] = 0;
                    }
                    i++;
                }
                cTile--;
            });
        }
        return old;
        //---------------------------------------------------------------------------------
    }
    //move(direction): given up,down, etc as a string input it makes the apporporiate shifts and adds a random tile
// Notice how, when you play the game, tiles
//are only able to combine once per move. So, for example, if you had [2][2][2][2] and did a right
//shift, you end up with [ ][ ][4][4], NOT [ ][ ][ ][8]. It would take another right shift to then 
// combine the 4s into an 8.
    move(direction) {
        let old1 = [...this.gameState.board];
        let movement = false;
        //---------------------------------------------------------------------------------------------------
        if (direction === 'up') {
            let cTile = 0;
            this.gameState.board.forEach(c => {
                let ut = cTile + this.size; // one that we are checking
                while (ut < this.size * this.size && this.gameState.board[cTile] == 0) {
                    if (this.gameState.board[ut] != 0) {
                        this.gameState.board[cTile] = this.gameState.board[ut];
                        this.gameState.board[ut] = 0;
                    } else {
                        ut += this.size;
                    }
                }
                cTile++;
            });
            cTile = 0;
            this.gameState.board.forEach(c => {
                let ut = cTile + this.size; // one that we are checking
                if (this.gameState.board[ut] == this.gameState.board[cTile]) {
                    this.gameState.board[cTile] = this.gameState.board[cTile] * 2;
                    this.gameState.score += this.gameState.board[cTile];
                    this.gameState.board[ut] = 0;
                    movement=true;
                }
                cTile++;
            });
            cTile = 0;
            this.gameState.board.forEach(c => {
                let ut = cTile + this.size; // one that we are checking
                while (ut < this.size * this.size && this.gameState.board[cTile] == 0) {
                    if (this.gameState.board[ut] != 0) {
                        this.gameState.board[cTile] = this.gameState.board[ut];
                        this.gameState.board[ut] = 0;
                    } else {
                        ut += this.size;
                    }
                }
                cTile++;
            });
        }
        //-============================================================
        if (direction === 'down') {
            let cTile = this.size * this.size - 1;
            this.gameState.board.forEach(c => {
                let ut = cTile - this.size; // one that we are checking
                while (ut >= 0 && this.gameState.board[cTile] == 0) {
                    if (this.gameState.board[ut] != 0) {
                        this.gameState.board[cTile] = this.gameState.board[ut];
                        this.gameState.board[ut] = 0;
                    } else {
                        ut -= this.size;
                    }
                }
                cTile--;
            });
            cTile = this.size * this.size - 1;
            this.gameState.board.forEach(c => {
                let ut = cTile - this.size; // one that we are checking
                if (this.gameState.board[ut] == this.gameState.board[cTile]) {
                    this.gameState.board[cTile] = this.gameState.board[cTile] * 2;
                    this.gameState.score += this.gameState.board[cTile];
                    this.gameState.board[ut] = 0;
                    movement=true;
                }
                cTile--;
            });
            cTile = this.size * this.size - 1;
            this.gameState.board.forEach(c => {
                let ut = cTile - this.size; // one that we are checking
                while (ut >= 0 && this.gameState.board[cTile] == 0) {
                    if (this.gameState.board[ut] != 0) {
                        this.gameState.board[cTile] = this.gameState.board[ut];
                        this.gameState.board[ut] = 0;
                    } else {
                        ut -= this.size;
                    }
                }
                cTile--;
            });
        }
        //=------------------------------------------------------
        if (direction === 'left') {
            let cTile = 0;
            this.gameState.board.forEach(c => {
                let row = cTile % this.size;
                let rt = 1; // one that we are checking
                while (row + rt < this.size && this.gameState.board[cTile] == 0) {
                    if (this.gameState.board[cTile + rt] != 0) {
                        this.gameState.board[cTile] = this.gameState.board[cTile + rt];
                        this.gameState.board[cTile + rt] = 0;
                    }
                    rt++;
                }
                cTile++;
            });
            //01850912835                           Combine Code
            cTile = 0;
            this.gameState.board.forEach(c => {
                let row = cTile % this.size;
                let rt = 1; // one that we are checking
                while (row + rt < this.size && this.gameState.board[cTile] != 0) {
                    if (this.gameState.board[cTile + rt] === this.gameState.board[cTile]) {
                        if (cTile + rt === cTile + 1) {
                            this.gameState.board[cTile] += this.gameState.board[cTile + rt];
                            this.gameState.score += this.gameState.board[cTile];
                            this.gameState.board[cTile + rt] = 0;
                            movement=true;
                        }
                    }
                    rt++;
                }
                cTile++;
            });
            //1203958019238509
            cTile = 0;
            this.gameState.board.forEach(c => {
                let row = cTile % this.size;
                let rt = 1; // one that we are checking
                while (row + rt < this.size && this.gameState.board[cTile] == 0) {
                    if (this.gameState.board[cTile + rt] != 0) {
                        this.gameState.board[cTile] = this.gameState.board[cTile + rt];
                        this.gameState.board[cTile + rt] = 0;
                    }
                    rt++;
                }
                cTile++;
            });
        }
        //---------------------------------------------------------------------------------------------------
        if (direction === 'right') {
            let cTile = this.size * this.size - 1;
            this.gameState.board.forEach(c => {
                let row = cTile % this.size;
                let i = 1;
                while (row - i >= 0 && this.gameState.board[cTile] == 0) {
                    if (this.gameState.board[cTile - i] != 0) {
                        this.gameState.board[cTile] = this.gameState.board[cTile - i];
                        this.gameState.board[cTile - i] = 0;
                    }
                    i++;
                }
                cTile--;
            });
            //01850912835                           Combine Code
            cTile = this.size * this.size - 1;
            this.gameState.board.forEach(c => {
                let row = cTile % this.size;
                let i = 1; // one that we are checking
                while (row - i >= 0 && this.gameState.board[cTile] != 0) {
                    if (this.gameState.board[cTile - i] === this.gameState.board[cTile]) {
                        if (cTile - i === cTile - 1) {
                            this.gameState.board[cTile] += this.gameState.board[cTile - i];
                            this.gameState.score += this.gameState.board[cTile];
                            this.gameState.board[cTile - i] = 0;
                            movement=true;
                        }
                    }
                    i++;
                }
                cTile--;
            });
            //1203958019238509
            cTile = this.size * this.size - 1;
            this.gameState.board.forEach(c => {
                let row = cTile % this.size;
                // let rt = cTile-1; // one that we are checking
                let i = 1;
                while (row - i >= 0 && this.gameState.board[cTile] == 0) {
                    if (this.gameState.board[cTile - i] != 0) {
                        this.gameState.board[cTile] = this.gameState.board[cTile - i];
                        this.gameState.board[cTile - i] = 0;
                    }
                    i++;
                }
                cTile--;
            });
        }
        //---------------------------------------------------------------------------------------------
        //Code that checks for change, if change exists, spawn new tile;

        for (let i = 0; i < this.gameState.board.length; i++) {
            if (old1[i] != this.gameState.board[i]) {
                this.randomTile();
                break;
            }
        }
        //code for lose
        //code for win 
        let isFailed = true;
        for (let i = 0; i < this.size * this.size; i++) {
            if (this.gameState.board[i] == 0) { isFailed = false; }
            else if (this.gameState.board[i] == this.gameState.board[i + 1] && i % this.size != this.size - 1) { isFailed = false; }
            else if (this.gameState.board[i] == this.gameState.board[i - 1] && i % this.size != 0) { isFailed = false; }
            else if (this.gameState.board[i] == this.gameState.board[i + this.size]) { isFailed = false; }
            else if (this.gameState.board[i] == this.gameState.board[i - this.size]) { isFailed = false; }}
        if (isFailed===true) {
            this.gameState.over = true;}
        for (let i = 0; i < this.size * this.size; i++) {
            if (this.gameState.board[i] >= 2048 && this.gameState.won == false) {
                this.gameState.won = true;
            }
        }
        if (this.gameState.over) {
            this.loseCallBackArr.forEach(f => f(this.gameState));
        }
        if (!this.gameState.over) {
            this.moveCallBackArr.forEach(f => f(this.gameState));
        }
        if (this.gameState.won) {
            this.winCallBackArr.forEach(f => f(this.gameState));
        }
        console.log(this.toString());
    }
//toString(): returns a string representation of the game as text/ascii (won't be graded but test is useful)
//onMove(callback): takes a callback function as input and registers that function as a listener to the 
//move event.  Every tie a move is made the game should call all previously registered
//move callbacks, passing in the games current gamestate as an argument to the function
    toString() {
        let x = ' ';
        for (let i = 0; i < this.gameState.board.length; i++) {
            if (i % this.size === 0) {
                x += '\n'
            }
            x += this.gameState.board[i] + ' ';
        }
        x += '\n' + 'Score: ' + this.gameState.score + '\n';
        x += '\n' + 'Won: ' + this.gameState.won + '\n' + 'Over: ' + this.gameState.over;
        return x;
    }
   //Events:
    //Game objects must be 
    //Observable, supporting three events
    //Move, Win, and Lose
    //the move event occurs every tim e a valid move is made
    //the Lose event occurs when the game transitiotns into a state that is "over"
    //the Win event occurs when the 2048 state is reached, and we transition ito a win state.

    //the game object must expose three method snamed after the events
    //onMove(callback)
    //onLose(callback)
    //onWin(callback)
    onMove(callBack) {
        this.moveCallBackArr.push(callBack);

    }

    onLose(callBack) {
        // console.log('A move was made, and now the game is over!');
        // console.log('Below is the final game state');
        // console.log(this.gameState);
        this.loseCallBackArr.push(callBack);
    }
   //onWin(callback): takes a callback function as a input and registers that function as a listener to teh win event
    // when the player wins the game (by making a 2048 tile) the game should call al previously registered win callbacks
    //passing in the games current gameState as a argument to the function
    onWin(callBack) {
        // console.log('A move was made, and now you win! 2048 has been reached!');
        // console.log('Below is the final game state');
        // console.log(this.gameState);
        this.winCallBackArr.push(callBack);
    }

    //Adding Tiles:
    // 90% chance ofa  2 tile
    //10% chance of a 4 tile
    // should be placed into a uniformly random space on board
    //Tiles are ADDED only IF:
    //When the game is first intialized/reset two tiles should be added
    //after a legal move occurs, 1 tile should be added
    randomTile() {
        let size = this.size;
        let rand1 = Math.floor(Math.random() * size * size);
        let rand2 = Math.floor(Math.random() * 10);
        let success = false;
        while (!success) {
            if (this.gameState.board[rand1] === 0) {
                success = true;
            } else {
                rand1 = Math.floor(Math.random() * size * size);
            }
        }
        //code specifically for math behind 2 or 4 percentage calculations 
        if (rand2 > 0) {
            this.gameState.board[rand1] = 2;
        } else {
            this.gameState.board[rand1] = 4;
        }
    }
 

}


