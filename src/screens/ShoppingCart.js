import React, { Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

import withShoppingCartState from '../containers/withShoppingCartState';
import ShoppingCartEmpty from '../components/ShoppingCartEmpty';
import ShoppingCartItem from '../components/ShoppingCartItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  list: {
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderTopColor: '#dddfe2',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

class ShoppingCart extends Component {
  goToCarServicesTab = () => this.props.navigation.navigate('CarServicesTab');

  keyExtractor = ({ id }) => String(id);

  renderShoppingCartItem = ({ item }) => (
    <ShoppingCartItem
      item={item}
      onAddButtonPress={() => this.props.shoppingCart.addProduct(item)}
      onRemoveButtonPress={() => this.props.shoppingCart.removeProduct(item)}
    />
  );

  render() {
    const { products } = this.props.shoppingCart.state;
    const total = products.reduce((acc, product) => {
      acc.count += product.qty;
      if (product.price) {
        acc.price += product.price * product.qty;
      }

      return acc;
    }, { count: 0, price: 0 });

    return (
      !products.length ?
        <ShoppingCartEmpty onButtonPress={this.goToCarServicesTab} /> :
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            data={products}
            extraData={total.count}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderShoppingCartItem}
          />
          <View style={styles.footer}>
            <Text style={{ fontWeight: 'bold' }}>Общо {total.price.toFixed(2)} лв.</Text>
            <Button
              title="Завърши поръчката"
              color="#ff6633"
              onPress={() => this.props.navigation.navigate('Order')}
            />
          </View>
        </View>
    );
  }
}

export default withShoppingCartState(ShoppingCart);
