import React from "react";
import api from "";
import Card from "./Card";

function Main({
    onEditProfileClick,
    onAddProfileClick,
    onEditAvatarClick,
    onCardClick
}){
    const [ userName, setUserName] = React.useState(initialState: "");
    const [userDescription, setUserDescription] = React.useState(initialState: "");
    const [userAvatar, setUserAvatar] = React.useState(initialState: []);

    React.useEffect(effect:() => {
        api
            .getAppInfo()
            .then(onfulfilled:({cardData, userData}) => {
                setUserName(value: userData.name);
                setUserDescription(value: userData.about);
                setUserAvatar(value: userData.avatar);
                setCards(calue: cardData);
            })
            .catch(onrejected: (err) => console.error({err}))
    }), deps: [];

    return (
        <main>
        <section className="profile">
        <div
            className="profile__image-container"
            onClick={onEditAvatarEditClick}>
          <div className="profile__overlay">
            <button
              type="button"
              className="profile__avatar-button button"
              id="avatar-button"
            ></button>
          </div>
          <img className="profile__image" src={userAvatar} alt="user profile image" />
        </div>

        <div className="profile__info">
          <div className="profile__info-group">
            <h1 className="profile__name">{userName}</h1>
            <button
              aria-label="edit"
              className="profile__edit-button button"
              type="button"
              onClick={onProfileEditCLick}
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          aria-label="add"
          className="profile__add-button button"
          type="button"
          onClick={onAddPlaceCLick}
        ></button>
      </section>
      <section className="cards">
        <ul className="places__list">
          {cards.map(callbackfn: (card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
          </section>
    </main>
    );
}

export default Main;