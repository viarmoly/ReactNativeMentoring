import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AppStyles from '../config/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons';

const CartProduct = (props) => {
    const {keyID, productModel, price, discount, sale, uri, onNav} = props;
    return(
        <View style={AppStyles.cartProduct.container} key={keyID}>
            <View style={{flex:1, flexDirection:'row',
                justifyContent:'space-between',}}>
                <View>
                    <Text style={AppStyles.cartProduct.productColor}>IPHINE</Text>
                    <View style={AppStyles.flex.row}>
                        <Text style={AppStyles.productCard.price}>$222 </Text>
                        <Text style={AppStyles.productCard.discount}>$244 </Text>
                        <Text style={AppStyles.productCard.sale}>9% off</Text>
                    </View>
                    <Text style={AppStyles.cartProduct.productColor}>Color: Blue</Text>
                </View>

                <View >
                    <Image
                        style={AppStyles.cartProduct.imageStyle}
                        source={{uri : 'https://www.ixbt.com/img/n1/news/2020/3/3/Apple_new-iphone-se-white_04152020_big.jpg.large_large.jpg'}}
                    />
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row',
                justifyContent:'space-between', marginTop:10}}>
                <Text>QTY: 1</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faTrash} color='grey' size={25}/>
                </TouchableOpacity>
            </View>

        </View>
    )
};

export default CartProduct;
