import React from 'react';
import AppStyles from '../config/styles';
import {Input} from 'react-native-elements';

const CustomInput = (props) => {
    const { placeholder, field, onChangeText } = props;
    return(
        <Input
            placeholder={placeholder}
            inputStyle={AppStyles.customInput}
            onChangeText={(val) => onChangeText(field, val)}
        />
    )
};

export default CustomInput;
