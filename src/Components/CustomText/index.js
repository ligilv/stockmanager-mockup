import React from 'react';
import {Text, View} from 'react-native';
import Fonts from '../../Configs/Fonts';
import {Colors} from '../../Constants/Colors';

function CustomText({
  Font = Fonts.Regular,
  Size = 14,
  Color = Colors.Black,
  children,
  style = {},
  onPress,
}) {
  return (
    <Text
      onPress={onPress}
      style={[
        {
          fontFamily: Font,
          fontSize: Size,
          color: Color,
        },
        style,
      ]}>
      {children}
    </Text>
  );
}

export default CustomText;
