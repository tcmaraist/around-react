import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([cardData, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardData);
      })
      .catch((err) => console.err(err));
  }, []);
  return (
    <main>
      <section className="profile">
        <div className="profile__image-container">
          <div className="profile__overlay">
            <button
              type="button"
              className="profile__avatar-button button"
              id="avatar-button"
              onClick={onEditAvatarClick}
            ></button>
          </div>
          <img
            className="profile__image"
            src={userAvatar}
            alt="user profile image"
          />
        </div>

        <div className="profile__info">
          <div className="profile__info-group">
            <h1 className="profile__name">{userName}</h1>
            <button
              aria-label="edit"
              className="profile__edit-button button"
              type="button"
              onClick={onEditProfileClick}
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          aria-label="add"
          className="profile__add-button button"
          type="button"
          onClick={onAddPlaceClick}
        ></button>
      </section>

      <section>
        <ul className="cards">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
