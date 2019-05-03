import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  render() {
    const cards = this.props.cards
    return (
      <div className="cards-container">
        {/* Completed */}
        {/* Using the cards prop, map over the list creating a 
            new Card component for each passing the card as the only prop*/}
            {cards && cards.map((card, index) => <Card card={card} key={index} />)}
      </div>
    )
  }
}

// Make sure you include prop types for all of your incoming props

export default Cards;