import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button type="button" className="card__delete-button button" />
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        className="card__image"
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like-button button" />
          <p className="card__like-button-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
