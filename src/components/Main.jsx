import React, { useState, useEffect } from "react";
import Card from "./Card";
import { api } from "../utils/Api";

//Обработчики событий передаются как пропсы
const Main = props => {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;
  //Хуки, изменяющие состояние
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setAvatar] = useState();
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })

    api.getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log('Ошибка: ${err}');
      });
  }, []);  

  return (
    <div>
      <section className="profile root__profile">
      <div className="profile__avatar-container">
        <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
        <div className="profile__avatar-overlay" onClick={onEditAvatar}></div>
      </div>
        <div className="profile__info">
        <div className="profile__about">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
          <button type="button" aria-label="Редактировать профиль" className="profile__edit" 
          onClick={onEditProfile} />
        </div>
        <button type="button" aria-label="Добавить новый профиль" className="profile__add" 
        onClick={onAddPlace}/>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              src={card.link}
              title={card.name}
              onCardClick={onCardClick}
              likesAmount={card.likes.length}
            />
        )
        )}
        </ul>
      </section>

    </div>
  )
}

export default Main;