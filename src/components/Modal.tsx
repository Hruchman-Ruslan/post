import { ReactNode } from "react";

import classes from "./Modal.module.css";

interface IModal {
  children: ReactNode;
  onClose(): void;
}

function Modal({ children, onClose }: IModal) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
