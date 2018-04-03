import { TabNavigator } from 'react-navigation';

import ServicesScreen from '../screens/Services';
import ShoppingCartScreen from '../screens/ShoppingCart';
import UserProfileScreen from '../screens/UserProfile';

const routes = {
  Services: {
    screen: ServicesScreen,
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
