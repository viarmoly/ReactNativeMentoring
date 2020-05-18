import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faShoppingCart, faArrowLeft, faHeart} from '@fortawesome/free-solid-svg-icons';
import AppStyles from '../config/styles';

class ProductDetails extends Component{

    render() {
        console.log(this.props.route.params);
        const {navigation} = this.props;
        const {
            itemId,
            itemName,
            itemPrice,
            priceOff,
            itemDiscount,
            itemColor,
            itemDescription,
            itemUrl
        } =this.props.route.params;

        return(
            <SafeAreaView style={AppStyles.flex}>
                <ScrollView>
                    <View style={AppStyles.productDetails.header}>
                        <View style={AppStyles.productDetails.header.container}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text >
                                    <FontAwesomeIcon icon={faArrowLeft} color='white' size={25}/>
                                </Text>
                            </TouchableOpacity>
                            <View style={AppStyles.productDetails.header.btns}>
                                <TouchableOpacity><
                                    FontAwesomeIcon icon={faSearch} color='white' size={24}/>
                                </TouchableOpacity>

                                <TouchableOpacity style={AppStyles.productDetails.header.cart}>
                                    <FontAwesomeIcon icon={faShoppingCart} color='white' size={25}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={AppStyles.productDetails.contain}>
                        <TouchableOpacity style={AppStyles.productDetails.imageBox}>
                            <Image
                                style={AppStyles.productDetails.image}
                                source={{
                                    uri: itemUrl,
                                }}
                            />
                        </TouchableOpacity>

                        <Text style={AppStyles.productDetails.product}>{itemName}</Text>
                        <View style={AppStyles.flex.row}>
                            <Text style={AppStyles.productDetails.price}>$ {itemPrice} </Text>
                            <Text style={AppStyles.productDetails.discount}>$ {itemDiscount}  </Text>
                            <Text style={AppStyles.productDetails.sale}> %{priceOff} Off</Text>
                        </View>
                    </View>

                    <View style={AppStyles.productDetails.contain}>
                        <Text style={AppStyles.productDetails.colorTitle}>
                            Select color:
                        </Text>


                            {itemColor.map((item)=>
                                <TouchableOpacity style={AppStyles.productDetails.colorBtn}>
                                <Text key={item} style={AppStyles.productDetails.colorBtn.title}>
                                    {item}
                                </Text>
                                </TouchableOpacity>
                            )}


                    </View>

                    <View style={AppStyles.productDetails.productDescription}>
                        <Text style={AppStyles.productDetails.colorTitle}>Description:</Text>
                        <Text style={AppStyles.productDetails.productDescription.text}>
                            {itemDescription}
                        </Text>
                    </View>

                    <View style={AppStyles.productDetails.bottomBtns}>
                        <TouchableOpacity style={AppStyles.productDetails.wishListBtn}>
                            <FontAwesomeIcon icon={faHeart} color='lightblue' size={25}/>
                            <Text style={AppStyles.productDetails.wishListBtnTitle}>WishList</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyles.productDetails.addToCartBtn}>
                            <Text style={AppStyles.productDetails.addToCartBtnTitle}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default ProductDetails;
