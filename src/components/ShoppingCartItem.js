import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#dddfe2',
  },
  top: {
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dddfe2',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
});

const ShoppingCartItem = ({ item, onAddButtonPress, onRemoveButtonPress }) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Text>{item.title}</Text>
      <Text>
        {item.price ? `Цена: ${item.price.toFixed(2)} лв.` : 'Направи запиване'}
      </Text>
    </View>
    <View style={styles.bottom}>
      <Text style={styles.price}>
        {item.price ? `Общо: ${(item.price * item.qty).toFixed(2)} лв.` : ''}
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={onRemoveButtonPress}
        >
          <IonIcon name="md-remove-circle" size={40} color="#ff6633" />
        </TouchableOpacity>
        <Text>{item.qty}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={onAddButtonPress}
        >
          <IonIcon name="md-add-circle" size={40} color="#ff6633" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default ShoppingCartItem;
