import { Container } from 'unstated';

const normalizeServicesData = (services) => {
  return services.map(service => {
    const { id, name, title, children, products, price } = service;

    const result = {
      id,
      title: title || name
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

    return result;
  });
};

export default class CarServicesContainer extends Container {
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
