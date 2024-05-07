import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import React from 'react';
const Cube = () => {
    return (
        <Stage width={50} height={50} >
            <Layer>
                <Circle x={25} y={25} radius={20} fill="green" />
            </Layer>
        </Stage>
    );
};

export default Cube;
