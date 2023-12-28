import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Case from 'screen/cases/Index';
import Home from 'screen/home/Index';
import Judgments from 'screen/judgments/Index';
import Alert from 'screen/alert/Index';
import Header from 'component/header/Header';
import colors from 'const/encolor';
import HomeTopTab from 'navigation/topTab/HomeTopTab';
import JudgmentTopTab from 'navigation/topTab/JudgmentTopTab';


//Bottom Tab
const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: { backgroundColor: colors.primaryColor },
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: 'yellow',
                headerStyle: {
                    backgroundColor: colors.headerbgcolor,
                },
                headerTintColor: colors.headerTintColor,
            }}
        >
            <Tab.Screen name='Home' component={HomeTopTab} />
            <Tab.Screen name='Cases' component={Case} />
            <Tab.Screen name='Judgments' component={JudgmentTopTab} />
            <Tab.Screen name='Alert' component={Alert} />
        </Tab.Navigator>
    )
}

export default BottomTab
