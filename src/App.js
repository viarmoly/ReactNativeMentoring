/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import React, { Component} from 'react';
import {connect} from 'react-redux';
import DeviceInfo from 'react-native-device-info';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';


import LoginView from './screens/LoginView';
import RegistrationView from './screens/RegistrationView';
import MainView from './screens/MainView';
import ProductDetails from './screens/ProductDetails';
import DrawerView from './screens/DrawerView';
import SplashScreen from './components/SplashScreen';
import AsyncStorage from '@react-native-community/async-storage';
import { restoreUserToken } from './actions/loginActions';
import { bindActionCreators } from 'redux';
import Contacts from './screens/Contacts';
import CartView from './screens/CartView';
import { Client } from 'rollbar-react-native'

const rollbar = new Client('6d769366bedb4effa6e6893c9ab2f018');

rollbar.setPerson( 'test', '','')

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class App extends Component{
    componentDidMount() {
        this.getToken()
    }

    getToken = async () => {
        const { actions } = this.props;
        let userToken;

        try {
            userToken = await AsyncStorage.getItem('userToken');
            actions.restoreUserToken(userToken);
            rollbar.log({}, 'token added sucsesfully', () => {});
        } catch(e) {
            console.log(e)
        }
    }

    render() {
        const { userToken, isLoading } = this.props;

        if (isLoading) {
            return <SplashScreen/>;
        }

        return (
            <>
                <NavigationContainer headerMode="none">
                    { userToken == null ? (
                        <>
                            <Stack.Navigator>
                                <Stack.Screen name="Login" component={LoginView} options={{ headerShown: false }}/>
                                <Stack.Screen name="Registration" component={RegistrationView} options={{ headerShown: false }} />
                            </Stack.Navigator>
                        </>
                    ) : (
                        <>
                            <Drawer.Navigator initialRouteName={MainView} drawerContent={(props) => <DrawerView {...props} />}>
                                <Drawer.Screen name="main" component={MainView} options={{ headerShown: false }}/>
                                <Drawer.Screen name="Contacts" component={Contacts} options={{ headerShown: false }}/>
                                <Drawer.Screen name="Product" component={ProductDetails}  options={{ headerShown: false }}/>
                                <Drawer.Screen name="Cart" component={CartView}  options={{ headerShown: false }}/>
                            </Drawer.Navigator>
                        </>
                    )}
                </NavigationContainer>
            </>
        );
    }
}

const mapStateToProps = state => ({
    userToken: state.login.userToken,
    isLoading: state.login.isLoading,
});

const ActionCreators = Object.assign(
    {
        restoreUserToken,
    },

);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
