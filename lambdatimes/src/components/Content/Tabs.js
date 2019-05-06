import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  render() {
    const tabs = this.props.tabs
    return (
      <div className="tabs">
        <div className="topics">
          <span className="title">TRENDING TOPICS:</span>
          {tabs && tabs.map((tab, index) => <Tab tab={tab} key={index} changeSelected={this.props.changeSelected} selectedTab={this.props.selectedTab} /> )}
        </div>
      </div>
    );
  }
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired)
}
export default Tabs;
