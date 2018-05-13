import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

const ShoppingCartEmpty = ({ onButtonPress }) => (
  <View style={styles.container}>
    <IonIcon name="ios-basket" size={80} color="lightgray" />
    <Text>Кошницата е празна</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Добави услуга"
        color="#ff6633"
        onPress={onButtonPress}
      />
    </View>
  </View>
);

export default ShoppingCartEmpty;
