import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`modal modal_type_preview ${card ? "popup_is-opened" : ""}`}
    >
      <div className="modal__body modal__body_type_preview">
        <button
          type="button"
          className="modal__close-button button"
          onClick={onClose}
        ></button>
        <img
          alt={card ? card.name : ""}
          src={card ? card.link : ""}
          className="modal__image"
        />
        <h2 className="modal__title">{card ? card.name : ""}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
/*
<section className="modal modal_type_preview">
  <div className="modal__body modal__body_type_preview">
    <button
      aria-label="close"
      className="modal__close-button button"
      type="button"
    ></button>
    <img className="modal__image" src="#" alt="#" />
    <h2 className="modal__title"></h2>
  </div>
</section>;
*/
