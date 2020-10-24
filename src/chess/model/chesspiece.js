class ChessPiece {
    constructor(name, id, isAttacked, color) {
        this.name = name // string
        this.color = color // string: white | black
        this.id = id // string
        this.isAttacked = isAttacked // boolean
    }

    setSquare() {
        // set the square this piece is sitting top of.
        // on any given piece (on the board), there will always be a piece on top of it.
        // console.log(newSquare)
        if (newSquare === undefined) {
            this.squareThisPieceIsOn = newSquare
            return
        }

        if (this.squareThisPieceIsOn === undefined) {
            this.squareThisPieceIsOn = newSquare
            newSquare.setPiece(this)
        }

        const isNewSquareDifferent = this.squareThisPieceIsOn.x != newSquare.x || this.squareThisIsPieceIsOn.y != newSquare.y

        if (isNewSquareDifferent) {
            // console.log("set")
            this.squareThisPieceIsOn = newSquare
            newSquare.setPiece(this)
        }
    }

    getSquare() {
        // get the current square this piece is on.
        // undefined if this piece is not on the board.
        return this.squareThisPieceIsOn
    }
}

export default ChessPiece