import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import withShoppingCartState from '../containers/withShoppingCartState';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#dddfe2',
  },
  top: {
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dddfe2',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
});

const CarService = ({ service, shoppingCart }) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Text>{service.title}</Text>
    </View>
    <View style={styles.bottom}>
      <Text style={styles.price}>
        {service.price ? `Цена: ${service.price.toFixed(2)} лв.` : 'Направи запиване'}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => shoppingCart.addProduct(service)}
      >
        <IonIcon name="ios-basket" size={40} color="green" />
      </TouchableOpacity>
    </View>
  </View>
);

export default withShoppingCartState(CarService);
