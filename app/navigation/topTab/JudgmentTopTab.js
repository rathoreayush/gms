import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SmartSearch from 'screen/smart-search/Index';
import KeyboardSearch from 'screen/keyboard-search/Index';
import Citation from 'screen/citation/Index';
import PartyName from 'screen/party-name/Index';
import JudgeName from 'screen/judgeName/Index';
import RecentlyView from 'screen/recentlyViewed/Index';
import Bookmark from 'screen/bookmark/Index';



const Tab = createMaterialTopTabNavigator();
const JudgmentTopTab = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarScrollEnabled: true,
      tabBarLabelStyle:{
        textTransform:'none'
      },
    }}
    >
      <Tab.Screen name='Smart' component={SmartSearch} options={{
        title: 'Smart Search'
      }} />
      <Tab.Screen name='Keyword' component={KeyboardSearch} options={{
        title: 'Keyboard Search'
      }} />
      <Tab.Screen name='Citation' component={Citation} options={{
        title: 'Citation'
      }} />
      <Tab.Screen name='Party' component={PartyName} options={{
        title: 'Party Name'
      }} />
      <Tab.Screen name='Judge' component={JudgeName} options={{
        title: 'Judge Name'
      }} />
      <Tab.Screen name='Recently' component={RecentlyView} options={{
        title: 'Recently View'
      }} />
      <Tab.Screen name='Bookmark' component={Bookmark} options={{
        title: 'Bookmarks'
      }} />
    </Tab.Navigator>
  )
}

export default JudgmentTopTab
