import React, { Component } from 'react';
import {Button, Text, TouchableOpacity, View, SafeAreaView, ImageBackground} from 'react-native';
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

         if (email && password) {
             fetch("http://34.73.95.65/index.php?rt=a/account/login", {
             method: 'POST',
             headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 "loginname": email,
                 "password": password
             })
             })
             .then(response => response.json())
             .then(json => console.log(json))
             .catch(e => console.log(e))
         }
    };

    render() {
        const image = { uri: "https://webgradients.com/public/webgradients_png/008%20Rainy%20Ashville.png" };
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
                        <CustomInput placeholder={"Email Address"}
                                     field={'email'}
                                     onChangeText={
                            (field, value) => this.onStateChangeFieldHandler(field, value)

                        }/>
                        <CustomInput
                            placeholder={"Password"}
                            field={'password'}
                            onChangeText={
                            (field, value) => this.onStateChangeFieldHandler(field, value)
                        }/>

                        <TouchableOpacity onPress={() => console.log("🥊")} style={AppStyles.login.forgotPass}>
                            <Text style={AppStyles.login.forgotTitle}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <Button
                            title="Sign In"
                            onPress={this.checkForm}
                            color="#138cbf"
                        />

                        <TouchableOpacity onPress={() => console.log("🥊")} style={AppStyles.login.signUp}>
                            <Text style={AppStyles.login.signUpTitle}>New here? Sign Up</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log("🥊")} style={AppStyles.login.skipContainer}>
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
export default LoginView;
