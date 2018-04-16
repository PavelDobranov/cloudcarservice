import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

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

const CarServiceCategories = ({ categories }) => (
  <View style={styles.container}>
    <FlatList
      data={categories}
      renderItem={({ item }) => <Text style={styles.listItem}>{item.name}</Text>}
      keyExtractor={({ id }) => String(id)}
    />
  </View>
);

CarServiceCategories.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.state.params.title,
  };
};

export default CarServiceCategories;
