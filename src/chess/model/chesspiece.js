class ChessPiece {
    constructor(name, id, isAttacked, color) {
        this.name = name // string
        this.color = color // string: white | black
        this.id = id // string
        this.isAttacked = isAttacked // boolean
    }

    setSquare() {
        // assign this piece to a specific square
        // this.square = square
    }

    getSquare() {
        // get the current square this piece is on.
        // undefined if this piece is not on the board.
    }
}