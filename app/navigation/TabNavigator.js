import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Cart from '../screen/Cart';
import Favourite from '../screen/Favourite';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const Tab = createBottomTabNavigator();



function TabNavigator() {
  return (
      <Tab.Navigator screenOptions={{
        tabBarStyle:{backgroundColor:'#AD40Af'},
        tabBarInactiveTintColor:'#fff',
        tabBarActiveTintColor:'yellow'
      }}>
      <Tab.Screen name="Home2" component={Home}  options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="home-outline" color={color} size={size}/>
        )
      }}/>
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarBadge:4,
        tabBarBadgeStyle:{backgroundColor:'yellow'},
        tabBarIcon:({color,size})=>(
          <Feather name="shopping-bag" color={color} size={size}/>
        )
      }}/>
      <Tab.Screen name="Favorite" component={Favourite} options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="heart-outline" color={color} size={size}/>
        )
      }}/>
      </Tab.Navigator>
   
  )
}

export default TabNavigator
