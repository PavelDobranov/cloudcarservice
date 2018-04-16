import { TabNavigator } from 'react-navigation';

import CarServicesStack from './CarServicesStack';
import ShoppingCartScreen from '../screens/ShoppingCart';
import UserProfileScreen from '../screens/UserProfile';

const routes = {
  CarServices: {
    screen: CarServicesStack,
    navigationOptions: {
      title: 'Услуги',
    },
  },
  ShoppingCart: {
    screen: ShoppingCartScreen,
    navigationOptions: {
      title: 'Кошница',
    },
  },
  UserProfile: {
    screen: UserProfileScreen,
    navigationOptions: {
      title: 'Профил',
    },
  },
};

const config = {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
};

export default TabNavigator(routes, config);
