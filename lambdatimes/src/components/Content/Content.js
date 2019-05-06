import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

import Carousel from '../Carousel/Carousel';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab.target.id
    })
  };

  filterCards = () => {
    return this.state.selected === "all" ? this.state.cards : this.state.cards.filter(card => card.tab === this.state.selected)
  };

  render() {
    return (
      <div className="content-container">
        <Tabs selectedTab={this.state.selected} tabs={this.state.tabs} changeSelected={this.changeSelected} />
        <Carousel />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
