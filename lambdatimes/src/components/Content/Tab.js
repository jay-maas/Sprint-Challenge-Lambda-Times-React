import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  render() {
    const selectedTab = this.props.selectedTab
    const thisTab = this.props.tab
    const selectTab = selectedTab === thisTab ? 'tab' : 'tab active-tab'
    return (
      <div
        className={selectTab}
        onClick={this.props.changeSelected}
        id={this.props.tab}
      >
        {this.props.tab.toUpperCase()}
      </div>
    );
  }
};

Tab.propTypes = {

}
// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired
}

export default Tab;
