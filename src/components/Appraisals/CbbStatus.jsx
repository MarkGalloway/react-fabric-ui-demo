import React from 'react';

const propTypes = {
  status: React.PropTypes.string.isRequired
};

function CbbStatus({status}) {
    switch(status) {
    case "Complete":
      return (
        <div className="Appraisal-cbb Appraisal-cbb-complete">
          CBB Complete
        </div>
      )
    case "Incomplete":
      return (
        <div className="Appraisal-cbb Appraisal-cbb-incomplete">
          CBB Incomplete
        </div>
      )
    default:
      return (
        <div className="Appraisal-cbb Appraisal-cbb-not-bookable">
          Not Bookable
        </div>
      )
  }
}

CbbStatus.propTypes = propTypes;

export default CbbStatus;
