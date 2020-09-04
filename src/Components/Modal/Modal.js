import React from "react";
import "./Modal.css";

const Modal = ({ImageModal,closeModal}) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={ImageModal.largeImageURL} alt={ImageModal.tags} />
      </div>
    </div>
  );
};

export default Modal;
