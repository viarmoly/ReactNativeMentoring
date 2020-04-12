import React, { Component } from 'react';
import {Button, Text, TouchableOpacity, View, SafeAreaView, ImageBackground} from 'react-native';
import CustomInput from '../components/CustomInput';
import AppStyles from '../config/styles';

class LoginView extends Component{
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
                        <CustomInput placeholder={"Email Address"}/>
                        <CustomInput placeholder={"Password"}/>

                        <TouchableOpacity onPress={() => console.log("🥊")} style={AppStyles.login.forgotPass}>
                            <Text style={AppStyles.login.forgotTitle}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <Button
                            title="Sign In"
                            onPress={() => console.log("🥊")}
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
