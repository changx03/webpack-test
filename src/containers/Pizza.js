import React, { Component } from 'react';
import PizzaImage from '../components/PizzaImage';

export default class PizzaPage extends Component {
  render() {
    return(
      <div>
        <h1>The pizza</h1>
        <PizzaImage />
      </div>
    );
  }
}
