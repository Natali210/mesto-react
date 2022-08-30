import { useState } from "react";
import "../index.css";
import Header from './Header';
import Main from './Main';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

function App() {
  //Создаем переменные, отвечающие за видимость попапов, чтобы изменять их значения при клике
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  //Обработчики событий, меняющие видимость попапов при клике
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImageOpen(true);
  }  

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImageOpen(false);
  }

  return (
    <div className="page">
      <div className="root">

      <Header />

      <Main 
        //Передаем обработчики событий в Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonTitle="Сохранить"
      >
        <div className="popup__field">
          <input
            name="name" id="name" type="text" required
            className="popup__input popup__input_name"
            placeholder="Имя" minLength="2" maxLength="30"/>
          <span id="name-error" className="popup__error-visible"></span>
        </div>

        <div className="popup__field">
          <input
            name="about" id="about" type="text" required
            className="popup__input popup__input_about"
            placeholder="О себе" minLength="2" maxLength="200"/>
          <span id="about-error" className="popup__error-visible"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="newAvatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonTitle="Сохранить"
      >
        <div className="popup__field">
          <input
            name="avatar" id="avatar" type="url" required
            className="popup__input popup__input_avatar"
            placeholder="Ссылка на аватар"/>
          <span id="avatar-error" className="popup__error-visible"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonTitle="Да">
      </PopupWithForm>

      <PopupWithForm
        name="addCard"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonTitle="Создать"
      >
        <div className="popup__field">
          <input
            name="name" id="place" type="text" required
            className="popup__input popup__input_place"
            placeholder="Название" minLength="2" maxLength="30"/>
          <span id="place-error" className="popup__error-visible"></span>
        </div>

        <div className="popup__field">
          <input
            name="link" id="link" type="url" required
            className="popup__input popup__input_link"
            placeholder="Ссылка на картинку"/>
          <span id="link-error" className="popup__error-visible"></span>
        </div>
      </PopupWithForm>

      <ImagePopup 
        name="imagePopup"
        card={selectedCard} 
        isImageOpen={isImageOpen} 
        onClose={closeAllPopups}
      />

      <Footer />
    </div>
    </div>
  );
}

export default App;