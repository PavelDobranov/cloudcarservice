import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#dddfe2',
  },
  textContainer: {
    padding: 10,
    width: '80%',
  },
});

const CarServiceCategory = ({ category, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.textContainer}>
      <Text>{category.title}</Text>
    </View>
    {
      category.image ?
        (<Image
          style={{ width: 80, height: 80 }}
          source={{ uri: `https://cloudcarservice.com/img/service_icons/${category.image}` }}
        />) :
        (<Image
          style={{ width: 20, height: 20, margin: 20 }}
          source={{ uri: 'http://vnsoftindia.com/anagram/img/arrow-25-xxl.png' }}
        />)
    }
  </TouchableOpacity>
);

export default CarServiceCategory;
