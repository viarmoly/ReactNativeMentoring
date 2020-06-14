import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AppStyles from '../config/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import CartProduct from '../components/CartProduct';


class CartView extends Component{
    render(){
        const { navigation } = this.props;
        return(
            <>
                <ScrollView>
                    <View style={AppStyles.productDetails.header}>
                        <View style={AppStyles.productDetails.header.container}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text >
                                    <FontAwesomeIcon icon={faArrowLeft} color='white' size={25}/>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginVertical:20, marginHorizontal:10}}>
                        <CartProduct/>

                        <View style={AppStyles.cartProduct.container} >
                            <Text>PRICE DETAILS</Text>
                            <View style={{borderTopWidth: 1, borderBottomWidth: 1}}>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginVertical: 5}}>
                                    <Text>Price (1 item)</Text>
                                    <Text>$ 220.00</Text>
                                </View>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginVertical: 5}}>
                                    <Text>Delovery</Text>
                                    <Text>$ 1.00</Text>
                                </View>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginVertical: 5}}>
                                    <Text>Tax (2%)</Text>
                                    <Text>$ 400</Text>
                                </View>
                            </View>
                            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',marginVertical: 5}}>
                                <Text>Amount Payable</Text>
                                <Text>$ 400</Text>
                            </View>
                        </View>
                    </View>


                </ScrollView>
            </>
        )
    }
};

export default CartView;
