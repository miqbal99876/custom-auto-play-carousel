import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import CustomDrawerContent from './custom-drawer';
import Home from '../../screens/home/home';
import TabNavigator from '../tab-navigator/tab-navigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = (props) => {
  const {route}=props;

  return (
    <Drawer.Navigator

      overlayColor="transparent"
      drawerStyle={{...styles.drawerStyles,backgroundColor:'white'}}
      drawerContent={(props) => {
        return <CustomDrawerContent {...props} />;
      }}
      sceneContainerStyle={{ backgroundColor: 'transparent', }}
      screenOptions={{
        headerShown:false,
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        drawerStyle:{
          width: Dimensions.get('window').width
        }
      }}
    >
    <Drawer.Screen
        name="BottomTab"
        component={TabNavigator}
        options={{ drawerLabel: 'BottomTab' }}
      />
      
    </Drawer.Navigator>

  );
}


const styles = StyleSheet.create({
  drawerStyles: { flex: 1, width: '80%', position: 'absolute',borderRadius:50,overflow:'hidden' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'white', marginLeft: -16 },
});