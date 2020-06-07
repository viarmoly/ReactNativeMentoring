import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    SafeAreaView,
    Alert,
    TouchableHighlight,
    Modal,
    Vibration,
    NativeModules
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faShoppingCart, faArrowLeft, faHeart} from '@fortawesome/free-solid-svg-icons';
import AppStyles from '../config/styles';
import {onSignIn, onSignOut} from '../actions/loginActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const {ToastModule} = NativeModules;

class ProductDetails extends Component{
    state = {
        showModal: false
    };
    componentDidUpdate(prevProps, prevState) {
        const { showModal } = this.state;
        const { showModal: showModalPrev } = prevState;

        const vibrate = showModalPrev === false && showModal === true;

        if (vibrate) {
           this.vibrateOnAlert();
        }
    }

    toastMess = () => {
        ToastModule.showToast('Product is added');
    };

    vibrateOnAlert = () => {
        const ONE_SECOND_IN_MS = 1000;

        const PATTERN = [
            1 * ONE_SECOND_IN_MS,
            2 * ONE_SECOND_IN_MS,
            3 * ONE_SECOND_IN_MS
        ];
        Vibration.vibrate(PATTERN)
    };

    setModalVisible = (visible) =>{
        this.setState({showModal: visible})
    };

    onNav = (visible, scene) => {
        const {actions} = this.props;

        this.setState({showModal: visible});
        this.deleteToken();
        actions.onSignOut();
    };

    deleteToken =  async () => {
        try {
            await AsyncStorage.removeItem('userToken');
        } catch(e) {
            console.log(e)
        }
    };

    render() {
        const { navigation } = this.props;
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
        const {showModal} = this.state;
        return(
            <SafeAreaView style={AppStyles.flex}>
                <ScrollView>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showModal}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={AppStyles.modal.centeredView}>
                            <View style={AppStyles.modal.modalView2BTN}>
                                <Text style={AppStyles.modal.modalText}>LOGIN TO CONTINUE</Text>
                                <Text style={AppStyles.modal.modalText}>Please, login to add product in your cart</Text>
                                <View style={{flexDirection:'row',  alignItems: "flex-start", justifyContent: "space-around"}}>

                                    <TouchableHighlight
                                        style={{ ...AppStyles.modal.openButton, backgroundColor: "#2196F3" }}
                                        onPress={() => this.onNav(!showModal, 'Registration')}
                                    >
                                        <Text style={AppStyles.modal.textStyle}>Registration</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        style={{ ...AppStyles.modal.openButton, backgroundColor: "#2196F3" }}
                                        onPress={() => this.onNav(!showModal, 'Login')}
                                    >
                                        <Text style={AppStyles.modal.textStyle}>Login</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </Modal>
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


                            {itemColor.map((item, index)=>
                                <TouchableOpacity style={AppStyles.productDetails.colorBtn} key={item + index} >
                                <Text style={AppStyles.productDetails.colorBtn.title}>
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
                        <TouchableOpacity style={AppStyles.productDetails.wishListBtn} onPress={() => this.setModalVisible(!showModal)}>
                            <FontAwesomeIcon icon={faHeart} color='lightblue' size={25}/>
                            <Text style={AppStyles.productDetails.wishListBtnTitle}>WishList</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyles.productDetails.addToCartBtn} onPress={() => this.toastMess()}>
                            <Text style={AppStyles.productDetails.addToCartBtnTitle}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => ({
    isSignout: state.login.isSignout
});
const ActionCreators = Object.assign(
    {
        onSignIn,
        onSignOut
    },

);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);


