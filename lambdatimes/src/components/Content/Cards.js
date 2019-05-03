import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class Cards extends Component {
  render() {
    const cards = this.props.cards
    return (
      <div className="cards-container">
            {cards && cards.map((card, index) => <Card card={card} key={index} />)}
      </div>
    )
  }
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Cards;