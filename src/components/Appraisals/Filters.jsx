import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Slider } from 'office-ui-fabric-react/lib/Slider';

import { closeFilters } from '../../actions';


const DayPickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],

  shortMonths: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],

  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ],

  shortDays: [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S'
  ],

  goToToday: 'Go to today',

  isRequiredErrorMessage: 'Field is required.',

  invalidInputErrorMessage: 'Invalid date format.'
};


const propTypes = {
  showFilters: React.PropTypes.bool.isRequired,
  onDismiss: React.PropTypes.func.isRequired
};

export class Filters extends Component {
  render() {
    const { showFilters, onDismiss } = this.props;

    return (
      <Panel
        isOpen={showFilters}
        onDismiss={onDismiss}
        type={ PanelType.smallFixedFar }
        headerText="Filters"
      >
        <Checkbox
          label='Only Show Bookable'
        />
        <Toggle
            defaultChecked={ true }
            label='Filter by X?'
            onText='Yes, Please!'
            offText='No Way, Man!'
          />
        <ChoiceGroup
          label="CBB Status"
          options={[
            {
              key: 'Complete',
              text: 'Complete'
            },
            {
              key: 'Incomplete',
              text: 'Incomplete',
              checked: true
            },
            {
              key: 'Not Bookable',
              text: 'Not Bookable',
              disabled: true
            }]}
          />
          <Slider
            max={ 10 }
            label='Rating'
            min={ 1 }
            defaultValue={ 5 }
          />
          <DatePicker
            label='Created before'
            strings={ DayPickerStrings }
            placeholder='Select a date...'
          />
      </Panel>
    );
  }
}

Filters.propTypes = propTypes;


function mapStateToProps(state) {
  return {
    showFilters: state.appraisals.filtersActive
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDismiss: () => dispatch(closeFilters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
