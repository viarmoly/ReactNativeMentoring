import React, { Component } from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AppStyles from '../config/styles';
import DrawerMenuItem from '../components/DrawerMenuItem';
import {
    faChartLine,
    faEnvelope,
    faHeart, faMailBulk,
    faMale,
    faPersonBooth, faPhone, faPhoneAlt,
    faPortrait, faShare,
    faShoppingBag,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons/faShoppingBasket';

class DrawerView extends Component{
    render(){
        return(
            <ScrollView>
                <View style={AppStyles.drawer.logo}>
                    <Text style={AppStyles.drawer.title}>Ecommerce</Text>
                    <Text style={AppStyles.drawer.title}>Store</Text>
                </View>

                <View style={AppStyles.drawer.account}>
                    <Text style={AppStyles.drawer.sectionHeader}>
                        My Account
                    </Text>

                    <DrawerMenuItem item={'My Profile'} icon={faPortrait}/>
                    <DrawerMenuItem item={'My Wish List'} icon={faHeart}/>
                    <DrawerMenuItem item={'My Cart'} icon={faShoppingCart}/>
                    <DrawerMenuItem item={'My Orders'} icon={faShoppingBag}/>
                </View>

                <View style={AppStyles.drawer.account}>
                    <Text style={AppStyles.drawer.sectionHeader}>
                        Support
                    </Text>

                    <DrawerMenuItem item={'Email'} icon={faEnvelope}/>
                    <DrawerMenuItem item={'Call'} icon={faPhoneAlt}/>
                </View>

                <View style={AppStyles.drawer.others} >
                    <Text style={AppStyles.drawer.sectionHeader}>
                        Others
                    </Text>

                    <DrawerMenuItem item={'Share'} icon={faShare}/>
                </View>
            </ScrollView>

        )
    }

}

export default DrawerView;
