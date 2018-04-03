import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const ShoppingCart = () => (
  <View style={styles.container}>
    <Text>Shopping cart screen</Text>
  </View>
);

export default ShoppingCart;
