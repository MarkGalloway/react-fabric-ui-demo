import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

import { toggleNavActive } from '../actions';

const propTypes = {
  toggleNav: React.PropTypes.func.isRequired,
  rightMenuItems: React.PropTypes.array,
}

const defaultProps = {
  rightMenuItems: []
}

export class AppBar extends Component {
  render() {
    const { toggleNav, rightMenuItems } = this.props;

    const leftMenuItems = [
      {
        key: 'LeftNavItem',
        name: '',
        iconProps: { iconName: 'GlobalNavButton' },
        onClick: () => toggleNav()
      }
    ];

    return (
      <div>
        <CommandBar
          items={leftMenuItems}
          farItems={rightMenuItems}
        />
      </div>
    );
  }
}

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;

function mapDispatchToProps(dispatch) {
  return {
    toggleNav: () => dispatch(toggleNavActive())
  }
}

export default connect(null, mapDispatchToProps)(AppBar);
