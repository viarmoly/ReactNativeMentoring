import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import AppStyles from '../config/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const DrawerMenuItem = (props) => {
    // const {navigation} = this.props;
    const { item, icon, scene, navigation } = props;
    return(
        <TouchableOpacity style={AppStyles.drawer.menuitem} onPress={()=> navigation.navigate(scene)}>
            <FontAwesomeIcon icon={icon} color='#128cbf' size={25}/>
            <Text style={AppStyles.drawer.menuitem.title}>{item}</Text>
        </TouchableOpacity>
    )
};

export default DrawerMenuItem;
