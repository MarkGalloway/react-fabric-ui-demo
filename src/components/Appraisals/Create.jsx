import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { addAppraisal } from '../../actions';

const propTypes = {
  history: React.PropTypes.object.isRequired,
  create: React.PropTypes.func.isRequired
};

export class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vin: '',
      make: '',
      model: '',
      year: '',
      customer: '',
      appraised_value: 0
    }
  }

  onSave() {
    const {
      props: { history, create },
      state: { vin, make, model, year, customer, appraised_value }
    } = this;

    create({
      vin: vin,
      make: make,
      model: model,
      year: year,
      customer: customer,
      appraised_value: parseInt(appraised_value, 10)
    })

    history.replace(`/appraisals`)
  }

  onCancel() {
    this.props.history.replace(`/appraisals`)
  }

  render() {
    const {
      state: { vin, make, model, year, customer, appraised_value }
    } = this;

    return (
      <div className="App-content">
          <h1 className="App-content-header ms-font-xxl">
            New Appraisal
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

Create.propTypes = propTypes;

function mapDispatchToProps(dispatch) {
  return {
    create: data => dispatch(addAppraisal(data))
  }
}

export default connect(null, mapDispatchToProps)(Create);
