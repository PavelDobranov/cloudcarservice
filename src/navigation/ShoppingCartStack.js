import { StackNavigator } from 'react-navigation';

import ShoppingCart from '../screens/ShoppingCart';
import Order from '../screens/Order';

const routes = {
  ShoppingCart: {
    screen: ShoppingCart,
    navigationOptions: {
      title: 'Кошница',
    },
  },
  Order: {
    screen: Order,
    navigationOptions: {
      title: 'Поръчка',
    },
  },
};

const ShoppingCartStack = StackNavigator(routes);

export default ShoppingCartStack;
