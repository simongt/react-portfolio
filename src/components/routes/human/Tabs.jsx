import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends Component {
  // Are all the items with a label being passed into Tabs as an array?
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };
  // 
  constructor(props) {
    super(props);
    
    const { label } = this.props.children[0].props;
    console.log(label);

    this.state = {
      activeTab: label,
    };
  }

  onClickTab = tab => {
    this.setState({ activeTab: tab });
    console.log(tab);
  };

  render() {

    const {
      onClickTab,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTab}
              />
            );
          })}
        </ol>

        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) {
              return undefined;
            }

            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
