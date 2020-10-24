import { Component } from 'react'
import { Socket } from 'socket.io-client'
import Game from '../model/chess'
import Piece from './piece'

class ChessGame extends Component {
    state = {
        gameState: new Game(this.props.isWhite),
        whiteKingInCheck: false,
        blackKingInCheck: false
    }

    componentDidMount() {
        // here we need to register event listeners for socket.io
        Socket.on('opponent move', move => {
            if (move.playerColorThatJustMovedIsWhite !== this.props.isWhite) {
                this.movePiece(move.selectedId, move.finalPosition, this.state.gameState, false)
                this.setState({
                    playerTurnToMoveIsWhite: !move.playerColorThatJustMovedIsWhite
                })
            }
        })
    }

    render() {
        return (
            /*
                <div background = chessboard>
                    <stage>
                        <layer for loop model and renders it>
                    </stage>
                </div>
            */
           <>
            <div>
                <Stage>
                    <Layer>
                        {
                            this.state.gameState.getBoard().map((row) => {
                                return (
                                    <>
                                        {
                                            row.map((square) => {
                                                return (
                                                    <Piece
                                                        x = {square.getCanvasCoord()[0]}
                                                        y = {square.getCanvasCoord()[1]}
                                                        imgUrls = {piecemap[square.getPiece().name]}
                                                        isWhite = {square.getPiece().name}

                                                    >

                                                    </Piece>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </Layer>
                </Stage>
            </div>
           </>
        )
    }

    move(selectedId, finalPosition) {
        /*
            uses pythagorean theorem to calculate
            the distance between the final position of the
            chess piece and every square on the board,
            and assigns the piece to the closest square
        */
    }
}

export default ChessGame
