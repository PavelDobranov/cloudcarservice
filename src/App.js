import React from 'react';
import { Provider } from 'unstated';

import RootNavigation from './navigation/RootNavigation';

const App = () => (
  <Provider>
    <RootNavigation />
  </Provider>
);

export default App;
