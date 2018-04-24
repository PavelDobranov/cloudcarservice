import React from 'react';
import { Subscribe } from 'unstated';

import CarServicesContainer from './CarServicesContainer';

const withCarServicesState = WrappedComponent => props => (
  <Subscribe to={[CarServicesContainer]}>
    {carServices => <WrappedComponent {...props} carServices={carServices} />}
  </Subscribe>
);

export default withCarServicesState;
