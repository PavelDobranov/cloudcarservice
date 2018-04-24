import { Container } from 'unstated';

class ShoppingCartContainer extends Container {
  state = {
    products: [],
  };

  addProduct = (id) => {
    const { products } = this.state;
    const product = products.find(prod => prod.id === id);

    if (product) {
      product.qty += 1;
    } else {
      products.push({ id, qty: 1 });
    }

    this.setState({ products });
  };

  removeProduct = (id) => {
    const { products } = this.state;
    const productIndex = products.findIndex(prod => prod.id === id);
    const product = products[productIndex];

    if (product.qty > 1) {
      product.qty -= 1;
    } else {
      products.splice(productIndex, 1);
    }

    this.setState({ products });
  };
}

export default ShoppingCartContainer;
