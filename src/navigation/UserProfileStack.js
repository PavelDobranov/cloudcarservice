import { StackNavigator } from 'react-navigation';

import UserProfile from '../screens/UserProfile';

const routes = {
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      title: 'Профил',
    },
  },
};

const UserProfileStack = StackNavigator(routes);

export default UserProfileStack;
