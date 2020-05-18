import React, { Component } from 'react';
import {Button, ImageBackground, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import CustomInput from '../components/CustomInput';
import AppStyles from '../config/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

class RegistrationView extends Component{
    render() {
        const image = { uri: "https://webgradients.com/public/webgradients_png/008%20Rainy%20Ashville.png" };
        const {navigation} = this.props;
        return(
            <SafeAreaView style={AppStyles.flex}>
                <View style={AppStyles.flex}>
                    <ImageBackground source={image} style={AppStyles.registration.background}>
                        <TouchableOpacity style={{flex:0, top:10, left: 10}} onPress={() => navigation.goBack()}>
                            <FontAwesomeIcon icon={faArrowLeft} color='black' size={25}/>
                        </TouchableOpacity>
                        <View style={AppStyles.registration.logo}>
                            <Text style={AppStyles.registration.title}>Ecommerce</Text>
                            <Text style={AppStyles.registration.title}>Store</Text>
                        </View>

                        <View style={AppStyles.registration.form}>
                            <CustomInput placeholder={"Full Name"}/>
                            <CustomInput placeholder={"Email Address"}/>
                            <CustomInput placeholder={"Password"} secure={true}/>
                            <CustomInput placeholder={"Confirm password"} secure={true}/>
                            <View style={{paddingTop: 20}}></View>

                            <Button
                                title="SIGN UP"
                                onPress={() => console.log("🥊")}
                                color="#138cbf"

                            />

                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
