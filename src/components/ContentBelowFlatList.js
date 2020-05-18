import React from 'react';
import { FlatList, View } from 'react-native';
import AppStyles from '../config/styles';
import productList from '../db'

import ProductCard from './ProductCard';

const ContentBelowFlatList = () => {
    return(
        <View style={AppStyles.mainPage.products}>
            <FlatList
                data={productList}
                renderItem={({ item }) => {
                    const priceOff = parseInt(item.price * (item.discount/100));
                    return  <ProductCard productModel={item.name} price={item.price} discount={priceOff} sale={item.discount} uri={item.uri}/>
                }
                }
            />
        </View>
    )
};

export default ContentBelowFlatList;
