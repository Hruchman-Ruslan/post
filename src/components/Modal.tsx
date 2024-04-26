import { ReactNode } from "react";

import classes from "./Modal.module.css";

interface IModal {
  children: ReactNode;
}

function Modal({ children }: IModal) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
