import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from '../AppBar';
import NavBar from '../NavBar';
import List from './List';

const propTypes = {
  history: React.PropTypes.object.isRequired,
  match: React.PropTypes.object.isRequired
}

export class Appraisals extends Component {
  render() {
    const { match, history } = this.props;

    const createAppraisalItem = {
      key: 'NewItem',
      name: 'New',
      iconProps: { iconName: 'Add' }
    }

    const appraisalListItems = [
      {
        key: 'SortItem',
        name: 'Sort',
        iconProps: { iconName: 'SortLines' },
        subMenuProps: {
          items: [
            {
              key: 'ID',
              name: 'ID',
              icon: 'Tag',
            },
            {
              key: 'AppraisedValue',
              name: 'AppraisedValue',
              icon: 'Money'
            },
            {
              key: 'CreatedDate',
              name: 'CreatedDate',
              icon: 'Calendar'
            },
            {
              key: 'ModifiedDate',
              name: 'ModifiedDate',
              icon: 'CalendarReply'
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
        {/* App bar */}
        <Switch>
          <Route exact path={`${match.url}`} render={() =>
            <AppBar rightMenuItems={[createAppraisalItem, ...appraisalListItems]}/>
          }/>
          <Route render={() =>
            <AppBar rightMenuItems={[createAppraisalItem]}/>
          }/>
        </Switch>

      {/* Nav */}
        <NavBar match={match} history={history}/>

       {/* Body */}
       <Switch>
          <Route exact path={`${match.url}`} render={() => <div>List</div>}/>
          <Route path={`${match.url}/create`} render={() => <div>Create</div>}/>
          <Route path={`${match.url}/:appraisalId`} render={() => <div>Details</div>}/>
          <Route path={`${match.url}/:appraisalId/edit`} render={() => <div>Edit</div>}/>
        </Switch>
      </div>
    );
  }
}

Appraisals.propTypes = propTypes;

export default Appraisals;
