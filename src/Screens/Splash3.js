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
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';
import {Colors} from '../Constants/Colors';
import Routes from '../Navigation/Routes';
import {Navigate} from '../Utils/NavigationHelper';

const Splash2 = props => {
  const Navto = () => {
    Navigate(Routes.Splash4);
    //props.navigation.navigate('Splash');
  };
  const circle = [{active: false}, {active: true}, {active: false}];
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={Images.SplashImageBG}
        resizeMode="cover"
        style={Styles.image}>
        <Image source={Images.Splash3Astro} style={Styles.logo} />
        <CustomText style={{color: Colors.White, fontSize: 24}}>
          Save and invest at the same time
        </CustomText>
        <CustomText
          style={{
            color: Colors.Grey,
            fontSize: 18,
            padding: 15,
            textAlign: 'center',
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </CustomText>
        <View style={{flexDirection: 'row'}}>
          {circle.map((item, index) => {
            return (
              <View
                style={[
                  Styles.circle,
                  {backgroundColor: item.active ? Colors.White : Colors.Grey},
                ]}
                key={index}></View>
            );
          })}
        </View>
        <CustomButton onPress={Navto}>Next</CustomButton>
      </ImageBackground>
    </View>
  );
};

export default Splash2;
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
