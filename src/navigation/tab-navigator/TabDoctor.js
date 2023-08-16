import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {
  DashboardDoctor,
  DoctorTabFourDot,
  DoctorTabNotification,
  SelectedFourDots,
  SelectedNotification,
  UnSelectedDoctorHome,
} from '../../assets/svgs';
import DoctorHome from '../../screens/doctor/doctor-home/doctor-home';
import Notification from '../../screens/doctor/notification/Notification';
import Settings from '../../screens/doctor/settings/settings';
import {mvs} from '../../services/metrices';
const Tab = createBottomTabNavigator();
const TabDoctor = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'white',
          height: mvs(70),
          paddingTop: mvs(10),
          elevation: mvs(5),
        },
      }}>
      <Tab.Screen
        name="DoctorHome"
        component={DoctorHome}
        options={{
          title: '',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? <DashboardDoctor /> : <UnSelectedDoctorHome />}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: '',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? <SelectedNotification /> : <DoctorTabNotification />}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: '',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? <SelectedFourDots /> : <DoctorTabFourDot />}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = store => ({
  cart_data: store.state.store_cart,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(TabDoctor);
