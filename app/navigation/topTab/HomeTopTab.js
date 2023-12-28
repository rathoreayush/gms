import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from 'screen/home/Index';
import Appointments from 'screen/appointments/Index';
import Task from 'screen/tasks/Index';
import DisplayBoard from 'screen/display-board/Index';
import colors from 'const/encolor';


const Tab = createMaterialTopTabNavigator();
const HomeTopTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Hearing"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarGap: 1,
        lazy: true,
        tabBarPressColor: 'black',

        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: 'white',
        tabBarLabelStyle: {
          textTransform: 'none',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'black'
        },
        tabBarItemStyle: {
          width: 140,
        },
        tabBarStyle: {
          backgroundColor: colors.primaryColor,
        },

      }}>
      <Tab.Screen name='Hearing' component={Home} options={{
        title: 'Hearing',

      }} />
      <Tab.Screen name='Appointment' component={Appointments} options={{
        title: 'Appointments'
      }} />
      <Tab.Screen name='Board' component={DisplayBoard} options={{
        title: 'Work Updates'
      }} />
      <Tab.Screen name='Task' component={Task} options={{
        title: 'Work Schedules'
      }} />

    </Tab.Navigator>
  )
}

export default HomeTopTab
