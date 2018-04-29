import { StackNavigator } from 'react-navigation';

import ShoppingCart from '../screens/ShoppingCart';

const routes = {
  SHoppingCart: {
    screen: ShoppingCart,
    navigationOptions: {
      title: 'Кошница',
    },
  },
};

const SHoppingCartStack = StackNavigator(routes);

export default SHoppingCartStack;
