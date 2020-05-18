/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import React, { Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';


import LoginView from './screens/LoginView';
import RegistrationView from './screens/RegistrationView';
import MainView from './screens/MainView';
import ProductDetails from './screens/ProductDetails';
import {connect} from 'react-redux';
import DrawerView from './screens/DrawerView';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class App extends Component{


    render(){
    let {isLoggedIn} = this.props;
    return (
        <>
            <NavigationContainer headerMode="none">

                    {isLoggedIn && (
                        <>
                            <Drawer.Navigator initialRouteName={MainView} drawerContent={(props) => <DrawerView {...props} />}>
                                <Drawer.Screen name="main" component={MainView} options={{
                                    headerShown: false,
                                }}/>
                                <Drawer.Screen name="Product" component={ProductDetails}  options={{
                                    headerShown: false,
                                }}/>

                            </Drawer.Navigator>
                        </>
                    )}
                    {!isLoggedIn && (
                        <>
                        <Stack.Navigator>
                            <Stack.Screen name="Login" component={LoginView} options={{
                                headerShown: false,
                            }}/>
                            <Stack.Screen name="Registration" component={RegistrationView} options={{
                                headerShown: false,
                            }} />
                        </Stack.Navigator>
                        </>
                    )}
            </NavigationContainer>
        </>

    );
}

};



const mapStateToProps = state => ({
    isLoggedIn: state.login.isLoggedIn
});

export default connect(mapStateToProps)(App);
