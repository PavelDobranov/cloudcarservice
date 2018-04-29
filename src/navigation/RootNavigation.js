import { TabNavigator } from 'react-navigation';

import CarServicesStack from './CarServicesStack';
import ShoppingCartStack from './ShoppingCartStack';
import UserProfileStack from './UserProfileStack';

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
    screen: UserProfileStack,
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
