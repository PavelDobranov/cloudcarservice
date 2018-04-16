import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Subscribe } from 'unstated';

import CarServicesContainer from '../../containers/CarServicesContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F6F8FA',
  },
  listItem: {
    margin: 5,
    padding: 10,
    backgroundColor: '#FFF',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'orange',
    // borderRadius: 10,
    elevation: 10,
  },
});

const ServiceItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.listItem}>
    <Text >{item.name}</Text>
  </TouchableOpacity>
);

const CarServicesMain = ({ navigation }) => (
  <Subscribe to={[CarServicesContainer]}>
    {CarServices => (
      <View style={styles.container}>
        <FlatList
          data={CarServices.state.services}
          renderItem={({ item }) => (
            <ServiceItem
              item={item}
              onPress={() => navigation.navigate('CarServiceCategories', { title: item.name })}
            />
          )}
          keyExtractor={({ id }) => String(id)}
        />
      </View>
    )}
  </Subscribe>
);

export default CarServicesMain;
