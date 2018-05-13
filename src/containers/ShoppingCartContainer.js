import { Container } from 'unstated';

class ShoppingCartContainer extends Container {
  state = {
    products: [],
  };

  addProduct = (newProduct) => {
    const { products } = this.state;
    const product = products.find(prod => prod.id === newProduct.id);

    if (product) {
      product.qty += 1;
    } else {
      products.push({ ...newProduct, qty: 1 });
    }

    this.setState({ products });
  };

  removeProduct = (productToRemove) => {
    const { products } = this.state;
    const productIndex = products.findIndex(prod => prod.id === productToRemove.id);
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
