import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
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
import { onSignOut } from '../actions/loginActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DrawerView extends Component{

    signOut = () => {
        const { actions } = this.props;
        this.deleteToken();
        actions.onSignOut();
    }

    deleteToken =  async () => {
        try {
            await AsyncStorage.removeItem('userToken');
        } catch(e) {
            console.log(e)
        }
    };

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

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 30}}>
                    <Button
                        title="Sign Out"
                        buttonStyle={AppStyles.signOut.signOutButton}
                        onPress={this.signOut}
                        titleStyle={AppStyles.signOut.signOutButtonTitle}
                        type="outline"
                    />
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    isSignout: state.login.isSignout
});

const ActionCreators = Object.assign(
    {
        onSignOut
    },
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerView);
