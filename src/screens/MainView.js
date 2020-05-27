import React, { Component } from 'react';
import {
    View, SafeAreaView, FlatList, Alert, Text, StyleSheet, Modal, TouchableHighlight, Vibration,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../components/ProductCard';
import productList from '../db'
import ContentAboveFlatList from '../components/ContentAboveFlatList';
import AppStyles from '../config/styles';
Icon.loadFont()

class MainView extends Component{

    state = {
        isConnected: '',
        isErrorMessageShow: false,
        productList
    };

    componentDidMount() {
        NetInfo.addEventListener(state => {
            if(state.isConnected) {
                this.setState({
                    isConnected: true,
                })
            } else {
                this.setState({
                    isConnected: false,
                    isErrorMessageShow: true
                })
            }

        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { isErrorMessageShow } = this.state;
        const { isErrorMessageShow: isErrorMessageShowPrev } = prevState;

        const vibrate = isErrorMessageShowPrev === false && isErrorMessageShow === true;

        if (vibrate) {
            this.vibrateOnAlert();
        }
    }

    vibrateOnAlert = () => {
        const ONE_SECOND_IN_MS = 1000;

        const PATTERN = [
            1 * ONE_SECOND_IN_MS,
            2 * ONE_SECOND_IN_MS,
            3 * ONE_SECOND_IN_MS
        ];
        Vibration.vibrate(PATTERN)
    };

    navigateToProduct = (itemId, itemName, itemPrice, priceOff, itemDiscount, itemColor, itemDescription, itemUrl) => {
        const {navigation} = this.props;
        navigation.navigate('Product', {
            itemId, itemName, itemPrice, priceOff, itemDiscount, itemColor, itemDescription, itemUrl
        })
    };

    setModalVisible = () =>{
        this.setState({ isErrorMessageShow: false })
    };

    render() {
        const { productList, isConnected, isErrorMessageShow } = this.state;
        const { navigation } = this.props;
        return (
            <SafeAreaView >
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isErrorMessageShow}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={AppStyles.modal.centeredView}>
                            <View style={AppStyles.modal.modalView}>
                                <Text style={AppStyles.modal.modalText}>There is some problems with your internet connection</Text>
                                <Text style={AppStyles.modal.modalText}>Please, check your internet connection</Text>
                                <TouchableHighlight
                                    style={{ ...AppStyles.modal.openButton, backgroundColor: "#2196F3" }}
                                    onPress={() => {
                                        this.setModalVisible();
                                    }}
                                >
                                    <Text style={AppStyles.modal.textStyle}>Got it</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                    <FlatList
                        data={productList}
                        renderItem={({ item }) => {
                            const priceOff = parseInt(item.price * (item.discount/100));
                            return  <ProductCard
                                keyID={item.id}
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
                            <ContentAboveFlatList navigation={navigation} isConnected={isConnected}/>
                        }
                        keyExtractor={item => item.id.toString()}
                        columnWrapperStyle={{flex:1, justifyContent: 'space-around'}}
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
const styles = StyleSheet.create({

});


export default MainView;
