import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

import CarServiceCategory from '../components/CarServiceCategory';
import CarService from '../components/CarService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F6F8FA',
  },
});

class CarServices extends Component {
  handleCategoryPress = (item) => {
    this.props.navigation.navigate('CarServices', { carServices: item.children });
  }

  renderItem = ({ item }) => {
    if (item.children) {
      return <CarServiceCategory title={item.title} onPress={() => this.handleCategoryPress(item)} />;
    }

    return <CarService title={item.title} price={item.price} />;
  };

  keyExtractor = ({ id }) => String(id);

  render() {
    const { carServices } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        {
          !carServices.length ?
            <ActivityIndicator size="large" /> :
            <FlatList
              data={carServices}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
        }
      </View>
    );
  }
}

export default CarServices;
