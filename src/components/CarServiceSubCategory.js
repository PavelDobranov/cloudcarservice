import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    backgroundColor: '#eee',
  },
});

const CarServiceSubCategory = ({ name, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text>{name}</Text>
  </TouchableOpacity>
);

export default CarServiceSubCategory;
