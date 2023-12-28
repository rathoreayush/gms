import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashsScreen from 'screen/splash/index';
import Onboard from 'screen/onboarding/Index';
import Signup from 'screen/signup/Index';
import Condition from 'screen/conditions/Index';
import Privacy from 'screen/privacy/Index';
import Login from 'screen/login/Index';
import LoginVerification from 'screen/loginVerification/Index';
import SignUpVerification from 'screen/signupVerification/Index';
import ForgotPassword from 'screen/forgotPassword/Index';
import CreatePassword from 'screen/createPassword/Index';
import ResetPassword from 'screen/resetPasssword/Index';
import Header from 'component/header/Header';
import colors from 'const/encolor';

const Stack = createStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.headerbgcolor,
        },
        headerTintColor: colors.headerTintColor,
      }}>
      <Stack.Screen
        name="Splash"
        component={SplashsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Condition"
        component={Condition}
        options={{
          headerTitle: () => <Header title="Terms & Condition" />
        }}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{headerTitle: () => <Header title="Privacy & Policy" />}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTitle: () => <Header title="Login" />}}
      />
      <Stack.Screen
        name="LoginVerification"
        component={LoginVerification}
        options={{headerTitle: () => <Header title="Login" />}}
      />
      <Stack.Screen
        name="SignupVerification"
        component={SignUpVerification}
        options={{headerTitle: () => <Header title="Sign Up" />}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerTitle: () => <Header title="Forgot Password" />}}
      />
      <Stack.Screen
        name="CreatePassword"
        component={CreatePassword}
        options={{headerTitle: () => <Header title="Create Password" />}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerTitle: () => <Header title="Create Password" />}}
      />
      {/* <Stack.Screen name='Login'component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={TabNavigator}/>
      <Stack.Screen name='View' component={ViewScreen} /> */}
    </Stack.Navigator>
  );
}

export default AuthStack;
