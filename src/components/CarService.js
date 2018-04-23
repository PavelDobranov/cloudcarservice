import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    backgroundColor: '#eee',
  },
});

const CarService = ({ title, price }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
    <Text>{price}</Text>
    <Button title="Добави" onPress={() => console.warn(price)} />
  </View>
);

export default CarService;
