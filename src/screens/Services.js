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

const Services = () => (
  <View style={styles.container}>
    <Text>Services screen</Text>
  </View>
);

export default Services;
