import React, { Component } from 'react';
import { View, ScrollView, Picker, Button, StyleSheet } from 'react-native';

import FormInput from '../components/FormInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    padding: 10,
  },
  pickerContainer: {
    marginVertical: 10,
    padding: 0,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#dddfe2',
  },
  picker: {
    width: '100%',
    height: 50,
  },
  button: {
    width: '100%',
  },
});

class Order extends Component {
  state = {

  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <FormInput
            placeholder="Име"
          />
          <FormInput
            placeholder="Телефон"
          />
          <FormInput
            placeholder="email"
          />
          <FormInput
            placeholder="Адрес 1"
          />
          <FormInput
            placeholder="Адрес 2"
          />
          <FormInput
            placeholder="Допълнително съобщение"
            multiline={true}
            numberOfLines={4}
          />
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              mode="dropdown"
            >
              <Picker.Item label="Получаване в офис на Cloud Car Service" value="0" />
              <Picker.Item label="Получаване в офис на Еконт Експрес" value="1" />
              <Picker.Item label="Доставка до адрес с Еконт Експрес" value="2" />
              <Picker.Item label="Без доставка" value="3" />
            </Picker>
          </View>
          <Button
            containerViewStyle={styles.button}
            title="Поръчай"
            color="#ff6633"
            onPress={() => { }}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Order;
