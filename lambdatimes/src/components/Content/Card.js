import React from 'react';

class Card extends React.Component {
  render() {
    const {headline, img, author } = this.props.card
    return (
      <div className="card" > 
        <div className="headline">{headline}</div>
        <div className="author">
          <div className="img-container">
            <img src={img} alt={author + "card image"}/>
          </div>
          <span>By {author}</span>
        </div>
      </div>
    );
  }
};

// Make sure to include PropTypes.

export default Card;
