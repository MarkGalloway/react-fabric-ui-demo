import React, { Component } from 'react';

import AppBar from '../AppBar';
import NavBar from '../NavBar';

const propTypes = {
  history: React.PropTypes.object.isRequired,
  match: React.PropTypes.object.isRequired
}

export class Appraisals extends Component {
  render() {
    const { match, history } = this.props;

    const rightMenuItems = [
      {
        key: 'NewItem',
        name: 'New',
        iconProps: { iconName: 'Add' }
      },
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
        <AppBar rightMenuItems={rightMenuItems}/>
        <NavBar match={match} history={history}/>
      </div>
    );
  }
}

Appraisals.propTypes = propTypes;

export default Appraisals;
