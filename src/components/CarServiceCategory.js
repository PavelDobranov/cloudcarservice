import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
  },
});

const CarServiceCategory = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default CarServiceCategory;
