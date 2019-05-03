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
          {/* Completed */}
          {/* map over the tabs provided on your props, create a new Tab component for each one.
              give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {tabs && tabs.map((tab, index) => <Tab tab={tab} key={index} changeSelected={this.props.changeSelected} selectedTab={this.props.selectedTab} /> )}
        </div>
      </div>
    );
  }
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired)
}
export default Tabs;
