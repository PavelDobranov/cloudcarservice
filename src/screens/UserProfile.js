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

const UserProfile = () => (
  <View style={styles.container}>
    <Text>User profile screen</Text>
  </View>
);

export default UserProfile;
