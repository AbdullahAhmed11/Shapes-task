'use client'
import { useState } from "react";
import DragDrop from "./components/Shapes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import { Graph } from "./components/Graph";


export default function Home() {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App ">
        <DragDrop />
        {/* <Graph /> */}
      </div>
    </DndProvider>
  );
}
