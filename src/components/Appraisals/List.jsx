import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as FabricList } from 'office-ui-fabric-react/lib/List';

import Filters from './Filters';
import ListItem from './ListItem';

import './Appraisals.css';


const propTypes = {
  match: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
  appraisals: React.PropTypes.arrayOf(
    React.PropTypes.object.isRequired
  ).isRequired
};


export class List extends Component {



  render() {
    const { match, history, appraisals } = this.props;

    return (
      <div>
        <Filters/>
        <div className="App-content">
          <h1 className="App-content-header ms-font-xxl">Appraisals</h1>
            <div className='AppraisalList' data-is-scrollable={ true }>
              <FabricList
                items={appraisals}
                onRenderCell={(appraisal) => (
                  <ListItem
                    key={appraisal.id}
                    appraisal={appraisal}
                    onViewClick={() => history.push(`${match.url}/${appraisal.id}`)}
                  />
                )}
              />
            </div>
          </div>
      </div>
    );
  }
}

List.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    appraisals: state.appraisals.appraisals
  }
}

export default connect(mapStateToProps)(List);
