import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Edit Profile"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label>
          <input
            type="text"
            minLength="2"
            maxLength="40"
            name="name"
            id="form-name"
            className="form__input form__input_type_name"
            placeholder="Name"
            required
          />
          <span className="form__error" id="form-name-error" />
          <input
            type="text"
            minLength="2"
            maxLength="200"
            name="about"
            id="form-about"
            className="form__input form__input_type_about"
            placeholder="About Me"
            required
          />
          <span className="form__error" id="form-about-error" />
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="New Place"
        name="add"
        buttonText="Create"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label>
          <input
            type="text"
            minLength="1"
            maxLength="30"
            name="name"
            id="title"
            className="form__input form__input_type_title"
            placeholder="Title"
            required
          />
          <span className="form__error" id="title-error" />
          <input
            type="url"
            name="link"
            id="image-url"
            className="form__input form__input_type_image-url"
            placeholder="Image Link"
            required
          />
          <span className="form__error" id="image-url-error" />
        </label>
      </PopupWithForm>

      <PopupWithForm
        title="Change Profile Picture"
        name="avatar-edit"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label>
          <input
            className="form__input form__input_type_image-url"
            type="url"
            id="avatar"
            name="avatar"
            placeholder="enter image link here"
            required
          />
          <span className="form__error" id="avatar-error" />
        </label>
      </PopupWithForm>

      <PopupWithForm
        title="Are You Sure?"
        name="delete-confirmation"
        buttonText="Yes"
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
