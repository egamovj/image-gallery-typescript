import "./modalStyles.css";

import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactPortal from "./ReactPortal";

type Props = {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  modalId?: string;
};

export const Modal = ({
  children,
  open,
  handleClose,
  modalId = "defaultModalId",
}: Props) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEventInit | KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;

    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  const onBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = event.target as HTMLDivElement;
    if (el.id === modalId) {
      handleClose();
    }
  };

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={open}
        timeout={300}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div
          tabIndex={-1}
          id={modalId}
          onClick={onBackdropClick}
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            background: "rgba(26, 23, 27, 0.8)",
            backdropFilter: "blur(20px)",
          }}
          ref={nodeRef}
        >
          {children}
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};

export default Modal;
