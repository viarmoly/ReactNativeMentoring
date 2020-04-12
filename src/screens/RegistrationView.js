import React, { Component } from 'react';
import {Button, ImageBackground, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import CustomInput from '../components/CustomInput';
import AppStyles from '../config/styles';

class RegistrationView extends Component{
    render() {
        const image = { uri: "https://webgradients.com/public/webgradients_png/008%20Rainy%20Ashville.png" };
        return(
            <SafeAreaView style={AppStyles.flex}>
                <View style={AppStyles.flex}>
                    <ImageBackground source={image} style={AppStyles.registration.background}>
                        <View style={AppStyles.registration.logo}>
                            <Text style={AppStyles.registration.title}>Ecommerce</Text>
                            <Text style={AppStyles.registration.title}>Store</Text>
                        </View>

                        <View style={AppStyles.registration.form}>
                            <CustomInput placeholder={"Full Name"}/>
                            <CustomInput placeholder={"Email Address"}/>
                            <CustomInput placeholder={"Password"}/>
                            <CustomInput placeholder={"Confirm password"}/>

                            <Button
                                title="SIGN UP"
                                onPress={() => console.log("🥊")}
                                color="#138cbf"
                            />

                            <TouchableOpacity onPress={() => console.log("🥊")}>
                                <Text style={AppStyles.registration.signIn}>
                                    Already have an account? Sigh in
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        );
    }

}
export default RegistrationView;
