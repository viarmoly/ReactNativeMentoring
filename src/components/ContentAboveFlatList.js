import React from 'react';
import {Text, TouchableOpacity, View, } from 'react-native';
import AppStyles from '../config/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faBars ,faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCategory from './ProductCategory';
import CategoryHeader from './CategoryHeader';

const ContentAboveFlatList = (props) => {
    const {navigation, isConnected} = props;
    return(
        <>
            <View style={AppStyles.mainPage.header.container}>
                <View style={AppStyles.mainPage.header.nav}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
                {/*{*/}
                {/*    categoryList.map(item => <ProductCategory category={item.name} url={item.thumb}/>)*/}
                {/*}*/}
                <ProductCategory category={'Electronics'} uri={'https://www.worldmeeting2015.org/wp-content/uploads/2019/07/1810_mate20_vsavov3.10.jpg'}/>
                <ProductCategory category={'Cloth'} uri={'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}/>
                <ProductCategory category={'Furniture'} uri={'https://cb2.scene7.com/is/image/CB2/122919_m_super_furniture_dining?wid=670&qlt=65'}/>

            </View>
            <CategoryHeader/>

        </>
    )
};

export default ContentAboveFlatList;
