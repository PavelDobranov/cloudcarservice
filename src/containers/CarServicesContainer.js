import { Container } from 'unstated';

export default class CarServicesContainer extends Container {
  constructor() {
    super();
    this.fetchServices();
  }

  state = {
    services: [],
    loading: true,
  };

  fetchServices = () => {
    fetch('http://cloudcarservice.herokuapp.com/services')
      .then(response => response.json())
      .then(services => {
        this.setState({ services, loading: false });
      });
  };
}
