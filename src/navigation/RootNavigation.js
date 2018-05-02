import React from 'react';
import { TabNavigator } from 'react-navigation';
import IonIcon from 'react-native-vector-icons/Ionicons';

import CarServicesStack from './CarServicesStack';
import ShoppingCartStack from './ShoppingCartStack';
import UserProfileStack from './UserProfileStack';
import ShoppingCartIcon from '../components/ShoppingCartIcon';

const routes = {
  CarServices: {
    screen: CarServicesStack,
    navigationOptions: {
      title: 'Услуги',
      tabBarIcon: ({ tintColor }) => <IonIcon name="ios-car" size={30} color={tintColor} />,
    },
  },
  ShoppingCart: {
    screen: ShoppingCartStack,
    navigationOptions: {
      title: 'Кошница',
      tabBarIcon: ({ tintColor }) => <ShoppingCartIcon color={tintColor} />,
    },
  },
  UserProfile: {
    screen: UserProfileStack,
    navigationOptions: {
      title: 'Профил',
      tabBarIcon: ({ tintColor }) => <IonIcon name="ios-contact" size={30} color={tintColor} />,
    },
  },
};

const config = {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    pressColor: 'darkgrey',
    style: {
      backgroundColor: '#ff6633',
    },
    tabStyle: {
      padding: 0,
    },
    labelStyle: {
      marginTop: 0,
      marginBottom: 8,
      fontSize: 10,
    },
    indicatorStyle: {
      backgroundColor: '#fff',
    },
    iconStyle: {
      width: 40,
      height: 30,
    },
    showIcon: true,
  },
};

export default TabNavigator(routes, config);
