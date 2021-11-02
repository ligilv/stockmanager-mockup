/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Images} from './src/Assets';
import Container from './src/Components/Container';
import Splash from './src/Screens/Splash';
import Splash2 from './src/Screens/Splash2';
import {NavigationContainer} from '@react-navigation/native';
import Mainstack from './src/Navigation';
import 'react-native-gesture-handler';
import {Navigation_ref} from './src/Utils/NavigationHelper';

const App = () => {
  return (
    // <Container>
    //   <Text>hello</Text>
    // </Container>
    // <Splash />
    <NavigationContainer
      onStateChange={state => console.log('stte', state)}
      ref={Navigation_ref}>
      {/* <Splash2 /> */}
      <Mainstack />
    </NavigationContainer>
  );
};

export default App;
