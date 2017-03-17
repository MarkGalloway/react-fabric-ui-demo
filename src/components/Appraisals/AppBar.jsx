import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

import { toggleNavActive } from '../../actions';

const propTypes = {
  toggleNav: React.PropTypes.func.isRequired
}

export class AppBar extends Component {
  render() {
    const { toggleNav } = this.props;

    const leftMenuItems = [
      {
        key: 'LeftNavItem',
        name: '',
        iconProps: { iconName: 'GlobalNavButton' },
        onClick: () => toggleNav()
      },
      {
        key: 'NewItem',
        name: 'New',
        iconProps: { iconName: 'Add' }
      },
    ];

    const rightMenuItems = [
      {
        key: 'SortItem',
        name: 'Sort',
        iconProps: { iconName: 'SortLines' },
        subMenuProps: {
          items: [
            {
              key: 'emailMessage',
              name: 'Email message',
              icon: 'Mail',
            },
            {
              key: 'calendarEvent',
              name: 'Calendar event',
              icon: 'Calendar'
            }
          ],
        },
      },
      {
        key: 'FilterItem',
        name: 'Filter',
        iconProps: { iconName: 'Filter' }
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

function mapDispatchToProps(dispatch) {
  return {
    toggleNav: () => dispatch(toggleNavActive())
  }
}

export default connect(null, mapDispatchToProps)(AppBar);
