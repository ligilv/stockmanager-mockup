import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Splash2 from '../Screens/Splash2';
import Splash3 from '../Screens/Splash3';
import Splash4 from '../Screens/Splash4';
import Signin1 from '../Screens/Signin1';
import Routes from './Routes';
const Onboarding = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.Splash}>
      <Stack.Screen name={Routes.Splash} component={Splash} />
      <Stack.Screen name={Routes.Splash2} component={Splash2} />
      <Stack.Screen name={Routes.Splash3} component={Splash3} />
      <Stack.Screen name={Routes.Splash4} component={Splash4} />
      <Stack.Screen name={Routes.Signin1} component={Signin1} />
    </Stack.Navigator>
  );
};
const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="onboard" component={Onboarding} head />
    </Stack.Navigator>
  );
};
export default MainStack;
