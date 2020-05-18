import React, { Component } from 'react';
import {Text, TouchableOpacity, View, SafeAreaView, ScrollView, FlatList, SectionList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../components/ProductCard';
import AppStyles from '../config/styles';
import productList from '../db'
import ContentAboveFlatList from '../components/ContentAboveFlatList';
import CategoryHeader from '../components/CategoryHeader';
Icon.loadFont()

class MainView extends Component{

    state = {
        productList
    }

    navigateToProduct = (itemId, itemName, itemPrice, priceOff, itemDiscount, itemColor, itemDescription, itemUrl) => {
        const {navigation} = this.props;
        navigation.navigate('Product', {
            itemId, itemName, itemPrice, priceOff, itemDiscount, itemColor, itemDescription, itemUrl
        })
    }

    render() {
        const {productList} = this.state;
        const {navigation} = this.props;
        return (
            <SafeAreaView >
                <View>
                    <FlatList
                        data={productList}
                        renderItem={({ item }) => {
                            const priceOff = parseInt(item.price * (item.discount/100));
                            return  <ProductCard
                                productModel={item.name}
                                price={item.price}
                                discount={priceOff}
                                sale={item.discount}
                                uri={item.uri}
                                onNav={()=>this.navigateToProduct(
                                    item.id, item.name, item.price, priceOff, item.discount, item.color, item.description, item.uri
                                )}

                            />
                        }
                        }
                        ListHeaderComponent={
                            <ContentAboveFlatList navigation={navigation}/>
                        }
                        keyExtractor={item => item.id.toString()}
                        columnWrapperStyle={{flex:1,     justifyContent: 'space-around'}}
                        // windowSize={3}
                        // initialNumToRender={10}
                        // maxToRenderPerBatch={10}
                        numColumns={2}
                        // updateCellsBatchingPeriod={999}
                        // refreshing={true}
                        // onRefresh={()=>true}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default MainView;
