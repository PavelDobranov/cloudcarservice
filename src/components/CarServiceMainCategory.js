import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
  },
});

const CarServiceMainCategory = ({ name, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text>{name}</Text>
  </TouchableOpacity>
);

export default CarServiceMainCategory;
