import { TabNavigator } from 'react-navigation';

import CarServicesStack from './CarServicesStack';
import ShoppingCartStack from './ShoppingCartStack';
import UserProfileScreen from '../screens/UserProfile';

const routes = {
  CarServices: {
    screen: CarServicesStack,
    navigationOptions: {
      title: 'Услуги',
    },
  },
  ShoppingCart: {
    screen: ShoppingCartStack,
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
