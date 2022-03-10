function App() {
  return (
    <div className="page">
      <header className="header">
        <img
          className="header__logo"
          src="('./images/header_logo.svg')"
          alt="Around The U.S logo"
        />
      </header>
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

        <section className="modal modal_type_edit">
          <div className="modal__body">
            <button
              aria-label="close"
              className="modal__close-button button"
              type="button"
            ></button>

            <form className="form" name="edit" noValidate>
              <h2 className="form__title">Edit Profile</h2>
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
              <span className="form__error" id="form-name-error"></span>
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
              <span className="form__error" id="form-about-error"></span>
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

        <section className="modal modal_type_add">
          <div className="modal__body">
            <button
              aria-label="close"
              className="modal__close-button button"
              type="button"
            ></button>

            <form className="form" name="add" noValidate>
              <h2 className="form__title">New Place</h2>
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
              <span className="form__error" id="title-error"></span>
              <input
                type="url"
                name="link"
                id="image-url"
                className="form__input form__input_type_image-url"
                placeholder="Image Link"
                required
              />
              <span className="form__error" id="image-url-error"></span>
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
        <section className="modal modal_type_avatar-edit">
          <div className="modal__body modal__body_type_avatar-edit">
            <button
              aria-label="close"
              className="button modal__close-button"
              type="button"
            ></button>
            <form className="form" name="Avatar-form">
              <h2 className="form__title">Change profile picture</h2>
              <input
                className="form__input form__input_type_image-url"
                type="url"
                id="avatar"
                name="avatar"
                placeholder="enter image link here"
                required
              />
              <span className="form__error" id="avatar-error"></span>
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
        </section>

        <section className="cards"></section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2021 Around The U.S.</p>
      </footer>

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
    </div>
  );
}

export default App;
