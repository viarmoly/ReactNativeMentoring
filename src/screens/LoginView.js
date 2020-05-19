import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    ImageBackground,
    LayoutAnimation,
    UIManager,
    Animated,
    ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {onLogin, onLogout} from '../actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomInput from '../components/CustomInput';
import AppStyles from '../config/styles';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

class LoginView extends Component{

    state = {
        opacity: new Animated.Value(0),
        isError: false,
        isSignInError: false,
        isLoading: false,
        signInFields:{
            email: '',
            password: ''
        }
    };


    onLoadingSignInError = () => {
        const {opacity} = this.state;
            Animated.timing(
                opacity,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver:true
                },
            ).start();
    };

    hidingOnSihnInError = () =>{
        const {opacity} = this.state;
            Animated.timing(
                opacity,
                {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver:true
                }
            ).start();
    };

    componentDidUpdate() {
        const {isSignInError} = this.state;
        const {email, password} = this.state.signInFields;
        const fieldsComplited = email && password;
        if(isSignInError && fieldsComplited){
            this.hidingOnSihnInError();
            this.setState({
                isSignInError: false
            })
        }
    }

    animationMethod = () => {
        LayoutAnimation.configureNext({
            duration: 1000,
            create:{
                property: LayoutAnimation.Properties.opacity,
                type: LayoutAnimation.Types.linear,
            },
            update:{
                property: LayoutAnimation.Properties.opacity,
                type: LayoutAnimation.Types.linear,
            },
            delete:{
                duration: 200,
                property: LayoutAnimation.Properties.opacity,
                type: LayoutAnimation.Types.linear,
            }})
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
        if (email && password) {
            this.setState({
                isLoading:true,
                isError: false,
            });
            this.animationMethod();
            let formData = new FormData();
            formData.append('loginname', email);
            formData.append('password', password);
            setTimeout(()=> {
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
                            this.setState({
                                isLoading: false
                            });
                            actions.onLogin();
                        } else {
                            this.animationMethod();
                            this.setState({
                                isError: true,
                                isLoading: false
                            })
                        }
                    })
                    .catch(e => console.log(e));
            }, 1000)
        } else if(!email || !password){
            this.onLoadingSignInError();
            this.setState({
                isSignInError: true
            })
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
        const {isLoading, isError, opacity} = this.state;
        return(
            <>
            <SafeAreaView style={AppStyles.flex}>
                <View style={AppStyles.flex}>

                <ImageBackground source={image} style={AppStyles.login.imageBackground}>
                    <View style={AppStyles.login.logoContainer}>
                        {isError &&(
                            <View style={{
                                backgroundColor: 'white',
                                paddingHorizontal:15,
                                paddingVertical:10,
                                borderRadius: 5,
                                marginBottom: 10
                            }}>
                                <Text style={{fontSize: 18}}>Your Email Or Password Was Incorrect!</Text>
                            </View>
                        )
                        }
                        <Text style={AppStyles.login.logoText}>Ecommerce</Text>
                        <Text style={AppStyles.login.logoText}>Store</Text>
                    </View>

                    <View style={AppStyles.login.signInContainer}>
                        <Animated.Text style={[{color:'red', fontSize: 18, position:'absolute', top: -20, left: 45 },{opacity}]}>Please, fill the sign in form to log in</Animated.Text>
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

                        <TouchableOpacity
                            onPress={this.checkForm}
                            style={{backgroundColor:"#138cbf", borderRadius:5, alignItems:'center', paddingVertical: 10}}
                        >
                            {isLoading && (
                                <ActivityIndicator size="large" color="white" />
                            )}
                            {!isLoading && (
                               <Text style={{color:'white', fontSize:18}}> Sign In </Text>
                            )}
                        </TouchableOpacity>

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
