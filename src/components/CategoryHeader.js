import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AppStyles from '../config/styles';


const CategoryHeader = () => {
    return(
        <View style={AppStyles.mainPage.productsHeader}>
            <Text style={AppStyles.mainPage.productsHeader.title}>Eletronics</Text>
            <TouchableOpacity style={AppStyles.mainPage.productsHeader.btn}>
                <Text style={AppStyles.mainPage.productsHeader.btnTitle}>
                    View All
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default CategoryHeader;
