import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { updateAppraisal } from '../../actions';

const propTypes = {
  appraisal: React.PropTypes.object.isRequired,
  match: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
  update: React.PropTypes.func.isRequired
};

export class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vin: props.appraisal.vin,
      make: props.appraisal.make,
      model: props.appraisal.model,
      year: props.appraisal.year,
      customer: props.appraisal.customer,
      appraised_value: props.appraisal.appraised_value
    }
  }

  onSave() {
    const {
      props: { history, appraisal, update },
      state: { vin, make, model, year, customer, appraised_value }
    } = this;

    update({
      vin: vin,
      make: make,
      model: model,
      year: year,
      customer: customer,
      appraised_value: appraised_value
    })

    history.replace(`/appraisals/${appraisal.id}`)
  }

  onCancel() {
    const { history, appraisal } = this.props;
    history.replace(`/appraisals/${appraisal.id}`)
  }

  render() {
    const {
      props: { appraisal },
      state: { vin, make, model, year, customer, appraised_value }
    } = this;

    return (
      <div className="App-content">
          <h1 className="App-content-header ms-font-xxl">
            Edit Appraisal #{appraisal.id}
          </h1>
          <div className="Appraisal-item">
            <TextField
              label='VIN'
              value={vin}
              onChanged={v => this.setState({vin: v})}
            />
            <TextField
              label='Year'
              value={year}
              onChanged={v => this.setState({year: v})}
            />
            <TextField
              label='Make'
              value={make}
              onChanged={v => this.setState({make: v})}
            />
            <TextField
              label='Model'
              value={model}
              onChanged={v => this.setState({model: v})}
            />
            <TextField
              label='Customer'
              value={customer}
              onChanged={v => this.setState({customer: v})}
            />
            <TextField
              label='Appraised Value'
              value={appraised_value}
              onChanged={v => this.setState({appraised_value: v})}
            />
            <div className="Appraisal-actions">
              <Button onClick={() => this.onCancel()}>
                Cancel
              </Button>
              <PrimaryButton onClick={() => this.onSave()}>
                Save
              </PrimaryButton>
            </div>
          </div>
      </div>
    );
  }
}

Edit.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
  const appraisals = state.appraisals.appraisals;
  const appraisalID = parseInt(ownProps.match.params.appraisalId);

  return {
    appraisal: appraisals.find(a => a.id === appraisalID)
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const appraisalID = parseInt(ownProps.match.params.appraisalId);

  return {
    update: data => dispatch(updateAppraisal(appraisalID, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
