import React from 'react';
import AppStyles from '../config/styles';
import {Input} from 'react-native-elements';

const CustomInput = (props) => {
    const { placeholder } = props;
    return(
        <Input
            placeholder={placeholder}
            inputStyle={AppStyles.customInput}
        />
    )
};

export default CustomInput;
