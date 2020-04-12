/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import LoginView from './screens/LoginView';
import RegistrationView from './screens/RegistrationView';
import MainView from './screens/MainView';
import ProductDetails from './screens/ProductDetails';

const App: () => React$Node = () => {

  return (
    <>
      {/*<LoginView/>*/}
      <RegistrationView/>
      {/*<MainView/>*/}
      {/*<ProductDetails/>*/}
    </>
  );
};

export default App;
