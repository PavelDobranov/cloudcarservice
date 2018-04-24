/* global fetch */

import { Container } from 'unstated';

const normalizeServicesData = services => {
  services.map(service => {
    const { id, name, title, children, products, image, price } = service;

    const result = {
      id,
      title: title || name,
    };

    if (children && children.length) {
      result.children = normalizeServicesData(children);
    }

    if (products && products.length) {
      result.children = normalizeServicesData(products);
    }

    if (price) {
      result.price = price;
    }

    if (image) {
      result.image = image;
    }

    return result;
  });
};

class CarServicesContainer extends Container {
  constructor() {
    super();
    this.fetchServices();
  }

  state = {
    services: [],
  };

  fetchServices = () => {
    fetch('http://cloudcarservice.herokuapp.com/services')
      .then(response => response.json())
      .then(services => {
        const normlized = normalizeServicesData(services);

        this.setState({ services: normlized });
      });
  };
}

export default CarServicesContainer;
