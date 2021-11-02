import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import {Images} from '../Assets';
import Routes from '../Navigation/Routes';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Routes.Splash2);
    }, 2000);
  });
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={Images.SplashImageBG}
        resizeMode="cover"
        style={Styles.image}>
        <Image source={Images.Logo} style={Styles.logo} />
      </ImageBackground>
    </View>
  );
};

export default Splash;
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
    width: 250,
    height: 160,
  },
});
