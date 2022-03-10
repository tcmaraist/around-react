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

// TEMPLATE / CARD

/*
      <template id="cardTemplate">
        <article className="card">
          <button
            aria-label="delete"
            className="card__delete-button button"
            type="button"
          ></button>
          <div className="card__image"></div>
          <div className="card__info">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button
                aria-label="like"
                className="card__like-button button"
                type="button"
              ></button>
              <p className="card__like-button-counter">0</p>
            </div>
          </div>
        </article>
      </template>
      */

      // FORMS INFO

      /* 
      <section className="modal modal_type_add">
        <div className="modal__body">
          <button
            aria-label="close"
            className="modal__close-button button"
            type="button"
          ></button>

          <form className="form" name="add" noValidate>
            <h2 className="form__title">New Place</h2>
            
            <button
              aria-label="save"
              className="button form__save-button form__save-button_disabled"
              disabled={true}
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </section>


      <section className="modal modal_type_avatar-edit">
        <div className="modal__body modal__body_type_avatar-edit">
          <button
            aria-label="close"
            className="button modal__close-button"
            type="button"
          ></button>
          <form className="form" name="Avatar-form">
            <h2 className="form__title">Change profile picture</h2>
            
            <button
              aria-label="save"
              className="button form__save-button form__save-button_disabled"
              disabled={true}
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </section>
      <section className="modal modal_type_delete-confirmation">
        <div className="modal__body modal__body_type_delete-confirmation">
          <button
            aria-label="close"
            className="button modal__close-button"
            type="button"
          ></button>
          <form className="form" name="delete-confirmation">
            <h2 className="form__title">Are you Sure?</h2>
            <button
              className="form__save-button button"
              type="submit"
              name="delete-confirmation"
              value="Yes"
            >
              Yes
            </button>
          </form>
        </div>
      </section>