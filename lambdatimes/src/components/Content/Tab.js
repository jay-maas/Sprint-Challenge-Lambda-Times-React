import React from 'react';

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


// Make sure you include PropTypes on your props.

export default Tab;
