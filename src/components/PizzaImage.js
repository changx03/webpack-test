import React from 'react';
import styleClass from './PizzaImage.css';
import PizzaImage from '../assets/pizza.png';

const pizzaImage = props => (
  <div className={styleClass.PizzaImage}>
    <img src={PizzaImage} className={styleClass.PizzaPNG} />
  </div>
);

export default pizzaImage;
