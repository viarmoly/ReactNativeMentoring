import React, { Component } from 'react';
import {Button, Text, TouchableOpacity, View, SafeAreaView, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {onLogin, onLogout} from '../actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomInput from '../components/CustomInput';
import AppStyles from '../config/styles';

class LoginView extends Component{

    state = {
        signInFields:{
            email: '',
            password: ''
        }
    };

    onStateChangeFieldHandler = (field, value) => {
        const { signInFields } = this.state;
        const { state } = this;
        signInFields[field] = value;
        this.setState({
            ...state,
            signInFields
        });
    };

    checkForm = () => {
        const {email, password} = this.state.signInFields;
        const {actions} = this.props;
        console.log(this.props)
        if (email && password) {
            let formData = new FormData();
            formData.append('loginname', email);
            formData.append('password', password);
            fetch('http://34.73.95.65/index.php?rt=a/account/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            })
                .then(response => response.json())
                .then(json => {
                    if(json.status === 1) {
                        this.storeToken(json.token);
                        actions.onLogin();
                    }
                })
                .catch(e => console.log(e));
        }
    };

    storeToken = async (token) => {
        try {
            await AsyncStorage.setItem('userToken', token)
        } catch (e) {
            console.log(e)
        }
    }

    // getToken = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('userToken');
    //         if(value !== null) {
    //             onLogin()
    //         }
    //     } catch(e) {
    //         console.log(e)
    //     }
    // }


    render() {
        const image = { uri: "https://webgradients.com/public/webgradients_png/008%20Rainy%20Ashville.png" };
        const {navigation} = this.props;
        return(
            <>
            <SafeAreaView style={AppStyles.flex}>
                <View style={AppStyles.flex}>
                <ImageBackground source={image} style={AppStyles.login.imageBackground}>
                    <View style={AppStyles.login.logoContainer}>
                        <Text style={AppStyles.login.logoText}>Ecommerce</Text>
                        <Text style={AppStyles.login.logoText}>Store</Text>
                    </View>

                    <View style={AppStyles.login.signInContainer}>
                        <CustomInput placeholder={"Name"}
                                     field={'email'}
                                     onChangeText={
                            (field, value) => this.onStateChangeFieldHandler(field, value)

                        }/>
                        <CustomInput
                            placeholder={"Password"}
                            field={'password'}
                            onChangeText={
                                (field, value) => this.onStateChangeFieldHandler(field, value)
                            }
                            secure={true}
                        />

                        <TouchableOpacity onPress={() => console.log("🥊")} style={AppStyles.login.forgotPass}>
                            <Text style={AppStyles.login.forgotTitle}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <Button
                            title="Sign In"
                            onPress={this.checkForm}
                            color="#138cbf"
                        />

                        <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={AppStyles.login.signUp}>
                            <Text style={AppStyles.login.signUpTitle}>New here? Sign Up</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Main')} style={AppStyles.login.skipContainer}>
                            <Text style={AppStyles.login.skipLogin}>SKIP LOGIN</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
                </View>
            </SafeAreaView>
            </>
        );
    }
}
// const mapStateToProps = state => ({
//     isLoggedIn: state.isLoggedIn,
// });

const mapStateToProps = state => ({
    isLoggedIn: state.login.isLoggedIn
});
const ActionCreators = Object.assign(
    {
        onLogin,
        onLogout
    },

);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
