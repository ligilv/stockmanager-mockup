import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../Constants/Colors';
import CustomText from '../CustomText';

const CustomButton = ({children, style, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          marginTop: 30,
          backgroundColor: Colors.Green,
          //   width: '30%',
          borderRadius: 15,
          paddingVertical: 15,
          paddingHorizontal: 60,
        },
      ]}>
      <CustomText style={{textAlign: 'center', fontSize: 18}}>
        {children}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
