import { StackNavigator } from 'react-navigation';

import { CarServicesMain, CarServiceCategories } from '../screens/CarServices';

const routes = {
  CarServicesMain: {
    screen: CarServicesMain,
    navigationOptions: {
      title: 'Услуги',
    },
  },
  CarServiceCategories: {
    screen: CarServiceCategories,
  },
};

export default StackNavigator(routes);
