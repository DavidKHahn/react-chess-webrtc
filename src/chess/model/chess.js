class Game {
    constructor() {
        this.thisPlayerIsPlayingAsWhite = thisPlayerIsPlayingAsWhite // boolean
        this.chessBoard = this.makeStartingBoard()
    }

    makeStartingBoard() {
        // make the board orientation for the current player
        if (this.thisPlayerIsPlayingAsWhite) {
            // make chess orientation for white
        } else {
            // make chess orientation tailored for black
        }
    }

    movePiece(pieceId, to) {
        // pieceId: string
        // to: [x, y]
    }
}