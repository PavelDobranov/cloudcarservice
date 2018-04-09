import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Subscribe } from 'unstated';

import CarServicesContainer from '../containers/CarServicesContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
  },
});

const CarServices = () => (
  <Subscribe to={[CarServicesContainer]}>
    {CarSvcs => (
      <View style={styles.container}>
        <FlatList
          data={CarSvcs.state.services}
          renderItem={({ item }) => <Text style={styles.listItem}>{item.name}</Text>}
          keyExtractor={({ id }) => String(id)}
        />
      </View>
    )}
  </Subscribe>
);

export default CarServices;
