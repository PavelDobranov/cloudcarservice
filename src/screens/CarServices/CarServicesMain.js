import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Subscribe } from 'unstated';

import CarServicesContainer from '../../containers/CarServicesContainer';
import CarServiceMainCategory from '../../components/CarServiceMainCategory';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F6F8FA',
  },
});

const CarServicesMain = ({ navigation }) => (
  <Subscribe to={[CarServicesContainer]}>
    {CarServices => (
      <View style={styles.container}>
        <FlatList
          data={CarServices.state.services}
          renderItem={({ item }) => (
            <CarServiceMainCategory
              name={item.name}
              onPress={() => console.warn('pressed')}
            />
          )}
          keyExtractor={({ id }) => String(id)}
        />
      </View>
    )}
  </Subscribe>
);

export default CarServicesMain;
