import React, { useState } from 'react'
import Picture from '../ItemsTypes'
import { PictureList } from '../Shapes';
const Shared = ({ handlePictureSelect }) => {
    const [hoveredPicture, setHoveredPicture] = useState(null);

    return (
        <div className='flex gap-10'>
            <div className="w-[300px] h-screen  px-4 py-3 border border-2 border-gray-200">
                <div className="grid grid-cols-2 border border-2  px-3 py-2">
                    {PictureList.map((picture) => {
                        return (
                            <div
                                key={picture.id}
                                onClick={() => handlePictureSelect(picture.id, picture.name)}
                                onMouseEnter={() => setHoveredPicture(picture)}
                                onMouseLeave={() => setHoveredPicture(null)}
                                className={`  hover:bg-gray-200 hover:rounded-xl w-20 h-20 flex items-center justify-center`}>
                                <Picture url={picture.url} id={picture.id}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            {hoveredPicture && (
                <div className='w-[150px] h-[150px] bg-gray-500 border rounded border-4 flex items-center justify-center mt-10 absolute left-[300px]'>
                    <Picture url={hoveredPicture.url} id={hoveredPicture.id} />
                </div>
            )}
        </div>
    )
}

export default Shared