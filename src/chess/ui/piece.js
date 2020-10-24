import React from 'react'
import { Image } from 'react-konva'

const Piece = (props) => {
    /*
        imageUrl
        color
        id
        -color of player
        -whether or not it's your turn
        - if this player's turn, color of this player is the same color as this piece,
          then we can make this piece draggable / moveable
    */
    return (
        < Image
            draggable
        />
    )
}

export default Piece
