import React from 'react'
import Picture from '../ItemsTypes';

const Board = ({ board, }) => {

    return (
        <div className="px-3 py-2  grid grid-cols-7">
            {
                board.map((picture) => (
                    <Picture key={picture.id} url={picture.url} id={picture.id} />
                ))
            }
        </div>


    )
}

export default Board