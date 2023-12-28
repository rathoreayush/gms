import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import OtpInput from 'component/otpInput/OtpInput';
import styles from './Styles';
import Header from 'component/header/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from 'component/button/Button';
import {useNavigation} from '@react-navigation/native';
import OtpTimer from 'component/otpTimer/OtpTimer';


const LoginVerificationView = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer,setTimer] = useState()

  const handleOtpChange = (updatedOtp, index) => {
    const newOtp = [...otp];
    newOtp[index] = updatedOtp[0];
    setOtp(newOtp);
  };

  const handleOtpComplete = (completedOtp) => {
    console.log('OTP Complete:', completedOtp);
  };

  return (
    <SafeAreaView style={styles.verificationContainer}>
      <View style={styles.boxContainer}>
        <OtpInput keyboardType="numeric" length="4" onOtpChange={handleOtpChange} onComplete={handleOtpComplete} />
      </View>
     <OtpTimer/>
      <View style={styles.buttonContainer}>
        <Button title="Verify Otp"/>
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

export default LoginVerificationView;
