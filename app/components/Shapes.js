import React, { useState } from "react";
import Picture from "./ItemsTypes";
import { useDrop } from "react-dnd";
import Rectangle from "./Shapes/Rectangle";
import Cube from "./Shapes/circle";
import RoundedRectangle from "./Shapes/roundedRect";
import Board from "./Board/Board";
import Shared from "./Shared/Shared";


export const PictureList = [
    {
        id: 1,
        url: <Rectangle />,
        name: "Rectangle",
    },
    {
        id: 2,
        url: <Cube />,
        name: "Circle",

    },
    {
        id: 3,
        url: <RoundedRectangle />,
        name: "RoundedRectangle",

    },
    {
        id: 4,
        url: <Rectangle />,
        name: "Rectangle",
    },
];

function DragDrop() {
    const [board, setBoard] = useState([]);
    const [selectedPictureId, setSelectedPictureId] = useState(null);
    const [SelectedPictureName, setSelectedPictureName] = useState(null);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
    };


    const handlePictureSelect = (id, name) => { // Function to handle picture selection
        setSelectedPictureId(id);
        setSelectedPictureName(name);
    };


    return (
        <>
            <div className="flex gap-5 ml-3">
                <Shared handlePictureSelect={handlePictureSelect} />
                <div className="Board  " ref={drop} style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/002/401/608/original/abstract-black-and-white-grid-pattern-free-vector.jpg')", backgroundRepeat: "repeat" }}>
                    <Board board={board} />
                </div>
                {
                    selectedPictureId && SelectedPictureName && (
                        <div className="w-30 h-[300px] flex items-center  justify-center mt-[20px] border border-2 py-2 px-2">
                            <div>
                                <p> <strong>ID: </strong> {selectedPictureId}</p>
                                <p><strong>Name: </strong> {SelectedPictureName}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default DragDrop;