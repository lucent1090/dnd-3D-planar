import { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

import styles from "./DropArea.module.css";

export const ID_DROPAREA = "id-droparea";

function DropArea({ children }: { children: ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: ID_DROPAREA,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div className={styles.area} ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default DropArea;
