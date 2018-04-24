import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import withShoppingCartState from '../containers/withShoppingCartState';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
    borderRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#dddfe2',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: 'orange',
  },
});

const CarService = ({ service, shoppingCart }) => (
  <View style={styles.container}>
    <Text>{service.title}</Text>
    <Text>{service.price.toFixed(2)} лв.</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => shoppingCart.addProduct(service.id)}
    >
      <Text>Добави</Text>
    </TouchableOpacity>
  </View>
);

export default withShoppingCartState(CarService);
