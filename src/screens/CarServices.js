import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const services = [
  {
    "id": 9,
    "name": "ГТП"
  },
  {
    "id": 14,
    "name": "Смяна на гуми"
  },
  {
    "id": 15,
    "name": "Хотел за гуми",
  },
  {
    "id": 13,
    "name": "Автоклиматици",
  },
  {
    "id": 10,
    "name": "Реглаж",
  },
  {
    "id": 11,
    "name": "Сервиз",
  },
  {
    "id": 16,
    "name": "Автомивка",
  },
  {
    "id": 12,
    "name": "Компютърна Диагностика",
  },
  {
    "id": 18,
    "name": "Застраховки",
  },
  {
    "id": 17,
    "name": "Закарване на автомобил до оторизиран сервиз / сервиз по желание на клиента",
  }
];

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
  <View style={styles.container}>
    <FlatList
      data={services}
      renderItem={({ item }) => <Text style={styles.listItem}>{item.name}</Text>}
      keyExtractor={({ id }) => String(id)}
    />
  </View>
);

export default CarServices;
