import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

import DropArea, { ID_DROPAREA } from "./DropArea";
import ItemA from "./ItemA";

import styles from "./App.module.css";

function App() {
  const [isDropped, setIsDropped] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over && event.over.id === ID_DROPAREA) {
      setIsDropped(true);
    }
    console.log("event", event);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={styles.toolbar}>
        <ItemA />
      </div>
      <DropArea>{isDropped ? <ItemA /> : "Drop here"}</DropArea>
    </DndContext>
  );
}

export default App;
