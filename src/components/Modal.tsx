import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

interface IModal {
  children: ReactNode;
}

function Modal({ children }: IModal) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
