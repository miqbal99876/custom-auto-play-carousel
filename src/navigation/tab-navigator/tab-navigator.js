import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  ActiveBody,
  ActivePlus,
  ActiveProfile,
  ActiveUv,
  Body,
  Plus,
  Profile,
  Uv
} from '../../assets/svgs';

import colors from '../../services/colors';
import { mvs } from '../../services/metrices';
import Body1 from '../../screens/Body/body';
import Plus1 from '../../screens/Plus/Plus';
import Chat from '../../screens/Chat/chat';
import Uv1 from '../../screens/Uv-index/uv';
import Profile1 from '../../screens/Profile/Profile';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Body"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 80,
          elevation: 10,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        },
      }}>

      <BottomTab.Screen
        name="Body"
        component={Body1}
        options={{
          tabBarActiveTintColor: '#1648CE',
          tabBarInactiveTintColor: colors.black,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={styles.container}>
                {focused ? <ActiveBody /> : < Body />}
                <Text style={[styles.tabText, { color: color }]}>Body</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarActiveTintColor: '#1648CE',
          tabBarInactiveTintColor: colors.black,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={styles.container}>
                {focused ? <Image source={require('../../assets/images/activ-chat.png')} /> : <Image source={require('../../assets/images/chat.png')} />}
                <Text style={[styles.tabText, { color: color }]}>Chat</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Plus"
        component={Plus1}
        options={{
          tabBarActiveTintColor: '#1648CE',
          tabBarInactiveTintColor: colors.black,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={styles.container}>
                {focused ? <ActivePlus /> : <Plus />}
                <Text style={[styles.tabText, { color: color }]}></Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Uv"
        component={Uv1}
        options={{
          tabBarActiveTintColor: '#1648CE',
          tabBarInactiveTintColor: colors.black,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={styles.container}>
                {focused ? <ActiveUv /> : <Uv />}
                <Text style={[styles.tabText, { color: color }]}>Uv index</Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile1}
        options={{
          tabBarActiveTintColor: '#1648CE',
          tabBarInactiveTintColor: colors.black,
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={styles.container}>
                {focused ? <ActiveProfile /> : <Profile />}
                <Text style={[styles.tabText, { color: color }]}>Profile</Text>
              </View>
            );
          },
        }}
      />

      {/* </Stack.Navigator> */}
    </BottomTab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

  },
  tabText: {
    fontSize: mvs(12),
  },
});
export default TabNavigator;
