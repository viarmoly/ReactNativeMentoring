import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faShoppingCart, faArrowLeft, faHeart} from '@fortawesome/free-solid-svg-icons';
import AppStyles from '../config/styles';

class ProductDetails extends Component{
    render() {
        return(
            <SafeAreaView style={AppStyles.flex}>
                <ScrollView>
                    <View style={AppStyles.productDetails.header}>
                        <View style={AppStyles.productDetails.header.container}>
                            <TouchableOpacity>
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
                                    uri: 'https://cdn2.biggeek.ru/1/435/a9f5/10352-978%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202019-10-29%20%D0%B2%2011.21.05.png',
                                }}
                            />
                        </TouchableOpacity>

                        <Text style={AppStyles.productDetails.product}>AirPods Pro</Text>
                        <View style={AppStyles.flex.row}>
                            <Text style={AppStyles.productDetails.price}>$ 222 </Text>
                            <Text style={AppStyles.productDetails.discount}>$ 244 </Text>
                            <Text style={AppStyles.productDetails.sale}>%9 Off</Text>
                        </View>
                    </View>

                    <View style={AppStyles.productDetails.contain}>
                        <Text style={AppStyles.productDetails.colorTitle}>
                            Select color:
                        </Text>

                        <TouchableOpacity style={AppStyles.productDetails.colorBtn}>
                            <Text style={AppStyles.productDetails.colorBtn.title}>
                                BLUE
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={AppStyles.productDetails.productDescription}>
                        <Text style={AppStyles.productDetails.colorTitle}>Description:</Text>
                        <Text style={AppStyles.productDetails.productDescription.text}>
                            AirPods Pro are Apple's first in-ear earbuds that feature Active Noise Cancellation
                            technology, but Apple has previously used ANC in its on-ear Beats headphones. Active Noise
                            Cancellation leverages two microphones and Apple's advanced software algorithms to adapt
                            sound to each individual's ear.

                            Because of the new silicone tips, the AirPods Pro are larger than prior versions of the
                            AirPods, necessitating a wider charging case. The new AirPods Pro case is longer in the
                            horizontal dimension than the prior AirPods case, but still pocketable.

                            AirPods Pro are water-resistant with an IPX4 rating, which means they can hold up to
                            splashing water regardless of the direction. This suggests AirPods Pro should be safe from
                            sweat and light rain, but they shouldn't be submerged.

                            Apple says that AirPods Pro include an Adaptive EQ feature for superior sound quality.
                            Adaptive EQ tunes the low and mid frequencies of the music to the shape of an individual's
                            ear for a "rich, immersive listening experience."

                            Like the AirPods 2 and the Beats Solo Pro, the AirPods Pro are powered by an Apple-designed
                            H1 chip. The H1 chip powers real-time noise cancellation, the Adaptive EQ feature, and
                            hands-free "Hey Siri" support.
                        </Text>
                    </View>

                    <View style={AppStyles.productDetails.bottomBtns}>
                        <TouchableOpacity style={AppStyles.productDetails.wishListBtn}>
                            <FontAwesomeIcon icon={faHeart} color='lightblue' size={25}/>
                            <Text style={AppStyles.productDetails.wishListBtn.title}>WishList</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyles.productDetails.addToCartBtn}>
                            <Text style={AppStyles.productDetails.addToCartBtn}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default ProductDetails;
