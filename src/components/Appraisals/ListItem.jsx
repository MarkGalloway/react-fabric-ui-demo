import React from 'react';

import CbbStatus from './CbbStatus';
import { formatPrice } from '../../utils';

const propTypes = {
  appraisal: React.PropTypes.shape({
    year: React.PropTypes.number.isRequired,
    make: React.PropTypes.string.isRequired,
    model: React.PropTypes.string.isRequired,
    customer: React.PropTypes.string.isRequired,
    cbb_status: React.PropTypes.string.isRequired,
    appraised_value: React.PropTypes.number.isRequired,
    vin: React.PropTypes.string.isRequired
  }).isRequired,
  onViewClick: React.PropTypes.func.isRequired
};

function ListItem({appraisal, onViewClick}) {
  const {
    year, make, model, customer, cbb_status, appraised_value, vin
  } = appraisal;

  return (
    <div
      className="Appraisal-item Appraisal-list-item"
      onClick={onViewClick}
    >
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
        <div className="Appraisal-details-item">
          Appraised Value
        </div>
        <div className="ms-fontWeight-semibold">
          {formatPrice(appraised_value)}
        </div>
      </div>
    </div>
  );
}

ListItem.propTypes = propTypes;

export default ListItem;
