import React from "react";

function Main({
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick,
}) {
  return (
    <main>
      <section className="profile">
        <div className="profile__image-container">
          <div className="profile__overlay">
            <button
              type="button"
              className="profile__avatar-button button"
              id="avatar-button"
            ></button>
          </div>
          <img className="profile__image" src="#" alt="user profile image" />
        </div>

        <div className="profile__info">
          <div className="profile__info-group">
            <h1 className="profile__name"></h1>
            <button
              aria-label="edit"
              className="profile__edit-button button"
              type="button"
            ></button>
          </div>
          <p className="profile__about"></p>
        </div>
        <button
          aria-label="add"
          className="profile__add-button button"
          type="button"
        ></button>
      </section>

      <section className="cards"></section>
    </main>
  );
}

export default Main;
