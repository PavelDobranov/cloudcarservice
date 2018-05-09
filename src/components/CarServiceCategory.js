import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';

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
        <Image
          style={{ width: 80, height: 80 }}
          source={{ uri: `https://cloudcarservice.com/img/service_icons/${category.image}` }}
        /> :
        <View style={{ margin: 12 }}>
          <IonIcon name="ios-arrow-forward" size={30} color="darkgrey" />
        </View>
    }
  </TouchableOpacity>
);

export default CarServiceCategory;
