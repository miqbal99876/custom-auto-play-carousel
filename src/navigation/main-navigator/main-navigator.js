// In App.js in a new project

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StatusBar, View } from 'react-native';
import SignUp from '../../screens/sign-up/sign-up';
import Signin from '../../screens/signin-screen/signin';
import Splash from '../../screens/splash-screen/splash';
import TabNavigator from '../tab-navigator/tab-navigator';
import colors from './../../services/colors';
import Carousel from '../../screens/Carousel';
const Stack = createStackNavigator();
const horizontalAnimation = {
  headerShown: false,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
export const MainNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <Stack.Navigator
        initialRouteName="Carousel"
        screenOptions={horizontalAnimation}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Carousel" component={Carousel} />

        <Stack.Screen name="TabNavigator" component={TabNavigator} />

      </Stack.Navigator>
    </View>
  );
};
