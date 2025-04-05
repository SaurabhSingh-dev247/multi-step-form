import { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ message }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      },
      close: () => {
        dialogRef.current.close();
      },
    };
  });

  return createPortal(
    <dialog ref={dialogRef}>
      <p>{message}</p>
      <button>Close</button>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
