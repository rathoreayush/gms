import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from 'navigation/AuthStack';
import { StatusBar } from 'react-native';
import AppNavigator from 'navigation/AppNavigator';





function App() {
  StatusBar.setBackgroundColor('#5969E3');
  return (
    <NavigationContainer>
        <AuthStack/>
      {/* <AppNavigator/> */}
    </NavigationContainer>
   
  )
}

export default App