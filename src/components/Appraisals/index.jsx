import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import AppBar from '../AppBar';
import NavBar from '../NavBar';
import List from './List';
import Details from './Details';
import Edit from './Edit';
import Create from './Create';
import { fetchAppraisals, toggleFilters } from '../../actions';

const propTypes = {
  history: React.PropTypes.object.isRequired,
  match: React.PropTypes.object.isRequired,
  onFilterClick: React.PropTypes.func.isRequired,
}

class Appraisals extends Component {

  componentDidMount() {
    this.props.loadInitialData();
  }


  render() {
    const { match, history, onFilterClick } = this.props;

    const createAppraisalItem = {
      key: 'NewItem',
      name: 'New',
      iconProps: { iconName: 'Add' },
      onClick: () => history.push(`${match.url}/create`)
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
        iconProps: { iconName: 'Filter' },
        onClick: () => onFilterClick()
      }
    ];

    return (
      <div>
        {/* App bar */}
        <Switch>
          <Route exact path={`${match.url}`} render={() =>
            <AppBar rightMenuItems={[createAppraisalItem, ...appraisalListItems]} />
          } />
          <Route exact path={`${match.url}/create`} render={() =>
            <AppBar />
          } />
          <Route exact path={`${match.url}/:appraisalId/edit`} render={() =>
            <AppBar />
          } />
          <Route render={() =>
            <AppBar rightMenuItems={[createAppraisalItem]} />
          } />
        </Switch>

        {/* Nav */}
        <NavBar match={match} history={history} />

        {/* Body */}
        <Switch>
          <Route exact path={`${match.url}`} component={List} />
          <Route exact path={`${match.url}/create`} component={Create} />
          <Route exact path={`${match.url}/:appraisalId`} component={Details} />
          <Route exact path={`${match.url}/:appraisalId/edit`} component={Edit} />
        </Switch>
      </div>
    );
  }
}

Appraisals.propTypes = propTypes;

function mapDispatchToProps(dispatch) {
  return {
    onFilterClick: () => dispatch(toggleFilters()),
    loadInitialData: () => dispatch(fetchAppraisals())
  }
}


export default connect(null, mapDispatchToProps)(Appraisals);
