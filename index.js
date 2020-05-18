/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import configureStore from './src/store/configureStore';
import { Provider } from 'react-redux';
import React from 'react';

if(__DEV__) {
    import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
const store = configureStore();

const Entrypoint = () => (
    <Provider store = { store }>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Entrypoint);


