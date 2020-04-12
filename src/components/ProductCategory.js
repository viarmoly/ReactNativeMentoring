import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import AppStyles from '../config/styles';

const ProductCategory = (props) => {
    const {category, uri} = props;
    return(
        <TouchableOpacity style={AppStyles.productCategory.container}>
            <Image
                style={AppStyles.productCategory.image}
                source={{uri}}
            />
            <Text>{category}</Text>
        </TouchableOpacity>
    )
};

export default ProductCategory;
