import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

import { closeNav } from '../actions';

const propTypes = {
  history: React.PropTypes.object.isRequired,
  match: React.PropTypes.object.isRequired,
  showNav: React.PropTypes.bool.isRequired,
  hideNav: React.PropTypes.func.isRequired
};

export class NavBar extends Component {

  navigate(e, url) {
    e.preventDefault();
    this.props.history.push(url);
    this.props.hideNav();
  }

  render() {
    const { showNav, match } = this.props;

    const navLinks = [{
      links: [
        {
          name: 'Appraisals',
          key: '/appraisals',
          onClick: e => this.navigate(e, '/appraisals'),
          url: '#'

        },
        {
          name: 'Tasks',
          key: '/tasks',
          onClick: e => this.navigate(e, '/tasks'),
          url: '#'
        },
        {
          name: 'Appointments',
          key: '/appointments',
          onClick: e => this.navigate(e, '/appointments'),
          url: '#'
        }
      ]
    }]

    return (
      <div>
        {showNav &&
          <Nav
            className="App-nav"
            isOnTop={true}
            groups={navLinks}
            selectedKey={match.path}
          />
        }
      </div>
    );
  }
}

NavBar.propTypes = propTypes;


function mapStateToProps(state) {
  return {
    showNav: state.app.navActive
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideNav: () => dispatch(closeNav())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
