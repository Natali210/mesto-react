import React from "react";

const Card = props => {
  const { card, onCardClick, keyId, title, src, likesAmount } = props;

  return (
    <li className="element">
      <div className="element__info" key={keyId}>
        <button type="button" className="element__delete"></button>
        <img className="element__image" src={src} alt={title}
        //Передаем функцию, которая открывает при клике изображение карточки
        onClick={() => {onCardClick(card)}}/>
        <div className="element__footer">
          <h2 className="element__title">{title}</h2>
          <div className="element__like-counter">
            <button type="button" className="element__like"></button>
            <span className="element__like-amount">{likesAmount}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;