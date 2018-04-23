import React from 'react';
import { StackNavigator } from 'react-navigation';

import CarServices from '../screens/CarServices';
import withCarServicesState from '../containers/withCarServicesState';

const routes = {
  CarServices: {
    screen: CarServices,
    navigationOptions: {
      title: 'Услуги',
    },
  },
};

const CarServicesStack = ({ carServices }) => {
  const Navigator = StackNavigator(routes, {
    initialRouteParams: { carServices: carServices.state.services },
  });

  return <Navigator />;
};

export default withCarServicesState(CarServicesStack);
