import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import withShoppingCartState from '../containers/withShoppingCartState';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  badge: {
    width: 20,
    height: 20,
    padding: 2,
    marginLeft: -10,
    borderRadius: 20,
    backgroundColor: '#CB4335',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 10,
  },
});

const ShoppingCartIcon = ({ color, shoppingCart }) => {
  const productsCount = shoppingCart.state.products.reduce((acc, product) => {
    acc += product.qty;

    return acc;
  }, 0);

  return (
    <View style={styles.container}>
      <IonIcon name="ios-basket" size={30} color={color} />
      <View style={styles.badge}>
        <Text style={[styles.badgeText, { color }]}>{productsCount}</Text>
      </View>
    </View>
  );
};

export default withShoppingCartState(ShoppingCartIcon);
