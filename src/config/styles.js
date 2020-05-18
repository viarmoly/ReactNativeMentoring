const customInput = {
    height: 50,
    fontSize: 20,
};

const flex = {
    flex:1,
    row:{
        flexDirection:'row'
    }
};

const login = {
    imageBackground:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    logoContainer:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal:20
    },
    logoText:{
        color:'#01a8f3',
        fontSize: 36
    },
    signInContainer:{
        flex:1,
        marginHorizontal:20
    },
    forgotPass:{
        alignItems:'flex-end'
    },
    forgotTitle:{
        color:'blue',
        fontSize:18,
        paddingVertical: 15
    },
    skipLogin:{
        color:'#138cbf',
        fontSize:18,
        paddingVertical: 15
    },
    signUp:{
        alignItems:'center',
    },
    skipContainer:{
        alignItems:'center',
        marginBottom:10
    },
    signUpTitle:{
        color:'blue',
        fontSize:18,
        paddingVertical: 15
    },
};

const mainPage = {
    products: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    productsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        alignItems: 'center',
        title: {
            color: '#3799c6',
            fontSize: 18
        },
        btn: {
            backgroundColor: '#138cbf',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 5
        },
        btnTitle: {
            color: 'white',
            fontSize: 14
        }
    },
    productCategory: {
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 10,
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    header: {
        container: {
            backgroundColor: '#138cbf',
            // width: '100%',
            paddingHorizontal: 20
        },
        nav: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 30,
            alignItems: 'center',
            marginTop: 10
        },
        logo: {
            color: 'white',
            fontSize: 20,
            alignItems: 'center'
        },
        styledInput: {
            backgroundColor: 'white',
            borderRadius: 10,
            marginVertical: 10
        },
        inputStyle: {
            height: 40,
            fontSize: 15,
            backgroundColor: 'white',
            paddingLeft: 10
        }
    }
};

const productCard = {
    container: {
        borderWidth:1,
        borderColor:'lightgray',
        borderRadius:5, padding:10,
        height:175, width:'48%',
        marginVertical:5
    },
    imageBox:{
        flex:1,
        alignItems:'center'
    },
    imageStyle:{
        width: 100,
        height: 100,
        marginBottom:10
    },
    productTitle:{
        paddingBottom:5
    },
    price:{
        fontWeight:'bold'
    },
    discount:{

    },
    sale:{
        color:'#138cbf',
        fontWeight:'bold'
    }
};

const productCategory = {
    container:{
        alignItems:'center',
        justifyContent:'center',
        width:90, height:90
    },
    image:{
        width: 50,
        height: 50,
        borderRadius:50,
        marginBottom:5
    }
};

const productDetails = {
    contain:{
        paddingHorizontal:20,
        paddingVertical:20,
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 10
    },
    header:{
        backgroundColor: '#138cbf',
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:10,
        container:{
            flex:1, flexDirection:'row',
            justifyContent:'space-between',
            height: 30,
            alignItems:'center'
        },
        btns:{
            flexDirection:'row',
            alignItems:'center'
        },
        cart:{
            marginLeft:20
        }
    },
    imageBox:{
        flex:1,
        alignItems:'center'
    },
    image:{
        width: 250,
        height: 250,
        marginBottom:10
    },
    product:{
        paddingBottom:5,
        fontSize:20
    },
    price: {
        fontWeight:'bold',
        fontSize:18
    },
    discount: {
        textDecorationLine:'line-through',
        fontWeight:'bold',
        fontSize:18
    },
    sale: {
        color:'#138cbf',
        fontWeight:'bold',
        fontSize:18},
    colorTitle: {
        color:'#138cbf',
        fontWeight:'bold',
        fontSize:20,
        paddingBottom:10
    },
    colorBtn: {
        maxWidth: 60,
        backgroundColor:'#ebebeb',
        alignItems:'center',
        paddingVertical: 3,
        borderRadius: 5,
        title:{fontSize: 16}
    },
    productDescription:{
        paddingHorizontal:20,
        paddingVertical:20,
        text: {
            fontSize:16,
            paddingBottom:10
        }
    },
    bottomBtns: {
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    wishListBtn: {
        width: '50%',
        alignItems: 'center',
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        title:{
            marginLeft:10
        }
    },
    wishListBtnTitle: {
            marginLeft:10
    },
    addToCartBtn: {
        backgroundColor:'#138cbf',
        width:'50%',
        alignItems:'center',
        paddingVertical:15,
        title: {
            color:'white',
            fontWeight:'bold'
        }
    },
    addToCartBtnTitle: {
        color:'white',
        fontWeight:'bold'
    }
};

const registration = {
    background:{
        width: '100%',
        height: '100%'
    },
    logo:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal:20
    },
    title:{
        color:'#01a8f3',
        fontSize: 36
    },
    form:{
        flex:2,
        marginHorizontal:20,
        alignItems:'center'
    },
    signIn:{
        color:'blue',
        fontSize:18,
        paddingVertical: 15
    }
};

const line = {
    width: '100%',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
};

const drawer = {
    menuitem: {
        width: '100%',
        flex:1,
        flexDirection: 'row',
        paddingVertical: 10,
        title: {
            paddingLeft: 20
        },
        alignItems:'center'
    },
    title: {
        fontSize: 25,
        color: '#128cbf',
        fontWeight: 'bold'
    },
    logo: {
        padding: 20,
        borderBottomColor: '#128cbf',
        borderBottomWidth: 1
    },
    account: {
        padding: 15,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },
    sectionHeader: {
        color: 'gray',
        marginBottom: 15
    },
    others: {
        padding: 15
    }
}

const AppStyles = {
    customInput,
    flex,
    login,
    mainPage,
    productCard,
    productCategory,
    productDetails,
    registration,
    line,
    // blueLine,
    drawer
};

export default AppStyles;
