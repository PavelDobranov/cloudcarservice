import React from 'react';
import { Subscribe } from 'unstated';

import ShoppingCartContainer from './ShoppingCartContainer';

const withShoppingCartState = WrappedComponent => props => (
  <Subscribe to={[ShoppingCartContainer]}>
    {shoppingCart => <WrappedComponent {...props} shoppingCart={shoppingCart} />}
  </Subscribe>
);

export default withShoppingCartState;
