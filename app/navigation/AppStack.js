import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from '../screen/Contact';
import CustomDrawer from '../camponents/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator';
import About from '../screen/About';

const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        headerShown: false,
      }}
    >
      <Drawer.Screen name='Home1' component={TabNavigator} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="home-outline" size={22} color={color} />
        )
      }} />
      <Drawer.Screen name='About' component={About} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="people-circle" size={22} color={color} />
        )
      }} />
      <Drawer.Screen name='Contact' component={Contact} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="person-outline" size={22} color={color} />
        )
      }} />
    </Drawer.Navigator>
  )
}

export default AppStack;
