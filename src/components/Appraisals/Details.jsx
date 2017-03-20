import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, PrimaryButton } from 'office-ui-fabric-react/lib/Button';

import CbbStatus from './CbbStatus';
import { formatPrice } from '../../utils';

const propTypes = {
  appraisal: React.PropTypes.object.isRequired,
  match: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
};

export class Details extends Component {

  goBack() {
    this.props.history.push('/appraisals');
  }

  render() {
    const {
      appraisal: {
       id, year, make, model, customer, cbb_status, appraised_value, vin
      },
      match,
      history
    } = this.props;

    return (
      <div className="App-content">
          <h1 className="App-content-header ms-font-xxl">
            Appraisal #{id}
          </h1>
          <div className="Appraisal-item">
            <div className="Appraisal-header">
              <div className="Appraisal-vehicle">
                <div className="ms-font-l ms-fontWeight-semibold">
                  {`${year} ${make} ${model}`}
                </div>
                <div className="Appraisal-vin ms-fontWeight-light">
                  {vin}
                </div>
              </div>
              <CbbStatus status={cbb_status}/>
            </div>
              <div className="Appraisal-details">
              <div className="Appraisal-details-item">Customer</div>
              <div>{customer}</div>
            </div>
            <div className="Appraisal-details">
              <div className="Appraisal-details-item">Appraised Value</div>
              <div className="ms-fontWeight-semibold">{formatPrice(appraised_value)}</div>
            </div>
            <div className="Appraisal-details">
              <div className="Appraisal-details-item">More fields go here....</div>
            </div>
            <div className="Appraisal-actions">
              <Button onClick={() => this.goBack()}>
                Back
              </Button>
              <PrimaryButton
                onClick={() => history.push(`${match.url}/edit`)}
              >
                Edit
              </PrimaryButton>
            </div>
          </div>
      </div>
    );
  }
}

Details.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
  const appraisals = state.appraisals.appraisals;
  const appraisalID = ownProps.match.params.appraisalId;
  return {
    appraisal: appraisals.find(a => a.id == appraisalID)
  }
}

export default connect(mapStateToProps)(Details);
