import React, { Component } from 'react';
import {Text, TouchableOpacity, View, SafeAreaView, ScrollView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faBars ,faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import ProductCard from '../components/ProductCard';
import ProductCategory from '../components/ProductCategory';
import AppStyles from '../config/styles';

class MainView extends Component{
    render() {
        return (
            <SafeAreaView style={AppStyles.flex}>
                <ScrollView>

                    <View style={AppStyles.mainPage.header.container}>
                        <View style={AppStyles.mainPage.header.nav}>
                            <TouchableOpacity>
                                <Text>
                                    <FontAwesomeIcon icon={faBars} color='white' size={25}/>
                                </Text>
                            </TouchableOpacity>

                            <Text style={AppStyles.mainPage.header.logo}>Ecommerce Store</Text>

                            <TouchableOpacity>
                                <FontAwesomeIcon icon={faShoppingCart} color='white' size={25}/>
                            </TouchableOpacity>
                        </View>

                        <View >
                            <View style={AppStyles.mainPage.header.styledInput}>
                                <Input
                                    placeholder='Search for products'
                                    inputStyle={AppStyles.mainPage.header.inputStyle}
                                    leftIcon={
                                        <Icon
                                            name='search'
                                            size={24}
                                            color='lightgrey'
                                        />
                                    }
                                />
                            </View>
                        </View>
                    </View>

                    <View style={AppStyles.mainPage.productCategory}>
                        <ProductCategory category={'Electronics'} uri={'https://www.worldmeeting2015.org/wp-content/uploads/2019/07/1810_mate20_vsavov3.10.jpg'}/>
                        <ProductCategory category={'Cloth'} uri={'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}/>
                        <ProductCategory category={'Furniture'} uri={'https://cb2.scene7.com/is/image/CB2/122919_m_super_furniture_dining?wid=670&qlt=65'}/>
                    </View>

                    <View style={{paddingHorizontal:20}}>

                        <View style={AppStyles.mainPage.productsHeader}>
                            <Text style={AppStyles.mainPage.productsHeader.title}>Electronics</Text>
                            <TouchableOpacity style={AppStyles.mainPage.productsHeader.btn}>
                                <Text style={AppStyles.mainPage.productsHeader.btnTitle}>
                                    View All
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={AppStyles.mainPage.products}>
                            <ProductCard productModel={'AirPods Pro'} price={'$ 99'} discount={'$ 99'} sale={'%25 Off'} uri={'https://hotline.ua/img/tx/212/2126655825.jpg'}/>
                            <ProductCard productModel={'MacBook Pro'} price={'$ 1500'} discount={'$ 500'} sale={'%10 Off'} uri={'https://hotline.ua/img/tx/197/1974055665.jpg'}/>
                            <ProductCard productModel={'AirPods Pro'} price={'$ 222'} discount={'$ 244'} sale={'%9 Off'} uri={'https://cdn2.biggeek.ru/1/435/a9f5/10352-978%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202019-10-29%20%D0%B2%2011.21.05.png'}/>
                        </View>

                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default MainView;
