import React from 'react';
import { Text, View } from 'react-native';

const SplashScreen = () => {
    return(
        <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 30}}>SPLASH</Text>
            <Text style={{color: 'white', fontSize: 30}}>SCREEN</Text>
        </View>
    )
};

export default SplashScreen;
