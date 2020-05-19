import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AppStyles from '../config/styles';

const ProductCard = (props) => {
    const {keyID, productModel, price, discount, sale, uri, onNav} = props;
    return(
        <TouchableOpacity style={AppStyles.productCard.container} onPress={onNav} key={keyID}>
            <View style={AppStyles.productCard.imageBox} >
                <Image
                    style={AppStyles.productCard.imageStyle}
                    source={{uri}}
                />
            </View>

            <Text style={AppStyles.productCard.productTitle}>{productModel}</Text>
            <View style={AppStyles.flex.row}>
                <Text style={AppStyles.productCard.price}>{price} </Text>
                <Text style={AppStyles.productCard.discount}>{discount} </Text>
                <Text style={AppStyles.productCard.sale}>{sale}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default ProductCard;
