import React from 'react';
import Header from 'component/header/Header';
import {InputField} from 'component/inputField/inputField';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {fieldNames} from 'const/en';
import Button from 'component/button/Button';
import styles from './style';
import {useNavigation} from '@react-navigation/native';


const LoginView = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.allContainer}>
        <View style={styles.inputField}>
          <InputField
            icon={'phone' ? 'phone' : null}
            placeholder={fieldNames.phoneNumber ? fieldNames.phoneNumber : null}
            onCountrySelect="india"
            isPhoneNumberScreen={true}
            keyboardType="numeric"
            style={styles.inputText}
            onPressCountryCode={() => {
              // Handle the country code button press here
            }}
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.feildText}>OR</Text>
        </View>
        <View style={styles.inputField}>
          <InputField
            icon={'email' ? 'email' : null}
            placeholder={fieldNames.email ? fieldNames.email : null}
            keyboardType="email-address"
            // style={styles.inputText}
          />
        </View>
        <View style={styles.inputField}>
          <InputField
            icon={'lock' ? 'lock' : null}
            placeholder={fieldNames.password ? fieldNames.password : null}
            secureTextEntry={true}
            // style={styles.inputText}
            onToggleSecureTextEntry={isSecure => {
              // console.log(`Password visibility: ${isSecure ? 'Hidden' : 'Visible'}`);
            }}
          />
        </View>
      </View>
      <View style={styles.forgotContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login"
        onPress={()=> navigation.navigate('LoginVerification')}
        />
      </View>
      <View style={styles.signContainer}>
        <View style={styles.signUpContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.SignText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginView;
