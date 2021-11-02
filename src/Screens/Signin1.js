import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import {Images} from '../Assets';
import {Icons} from '../Assets/Icons';
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';
import {Colors} from '../Constants/Colors';
import Routes from '../Navigation/Routes';
import {Navigate} from '../Utils/NavigationHelper';

const Signin1 = props => {
  const Navto = () => {
    Navigate(Routes.Splash4);
    //props.navigation.navigate('Splash');
  };
  const circle = [{active: false}, {active: true}, {active: false}];
  return (
    <View style={Styles.container}>
      <Image source={Icons.x} />
    </View>
  );
};

export default Signin1;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 331.72,
    height: 369,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 100,
    marginHorizontal: 5,
  },
});
