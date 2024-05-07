import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, url, }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <>
            <div
                ref={drag}
                className={`cursor-pointer mb-5  `}
                style={{ border: isDragging ? "5px solid pink" : "0px" }}
            >
                {url}
            </div>
        </>
    );
}

export default Picture;