import styles from "./modal.module.scss";
import { createPortal } from "react-dom";
import { TrapFocus } from "./modalUtils";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }
  return (
    <Portal>
      <div
        role="dialog"
        id="dialog1"
        //aria-labelledby="dialog1_label"
        aria-modal="true"
        className={styles.modal}
      >
        <TrapFocus>
          <button onClick={onClose}>Close</button>
          {children}
        </TrapFocus>
      </div>
    </Portal>
  );
}

const Portal = ({ children }) => {
  return createPortal(children, document.querySelector("body"));
};
