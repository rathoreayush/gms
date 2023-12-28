import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './Style';
import OtpInput from 'component/otpInput/OtpInput';
import Header from 'component/header/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from 'component/button/Button';
import Checkbox from 'component/checkbox/Checkbox';
import {useNavigation} from '@react-navigation/native';
import OtpTimer from 'component/otpTimer/OtpTimer';

const SignUpVerificationView = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState();

  const handleOtpChange = (updatedOtp, index) => {
    const newOtp = [...otp];
    newOtp[index] = updatedOtp[0];
    setOtp(newOtp);
  };

  const handleOtpComplete = completedOtp => {
    console.log('OTP Complete:', completedOtp);
  };

  //checkbox

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);
  console.log(setIsCheckboxChecked);

  const handleCheckboxToggle = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };
  console.log(isCheckboxChecked);

  return (
    <SafeAreaView style={styles.verificationContainer}>
      <View style={styles.boxContainer}>
        <OtpInput
          keyboardType="numeric"
          length="4"
          onOtpChange={handleOtpChange}
          onComplete={handleOtpComplete}
        />
      </View>
      <OtpTimer />

      <View style={styles.buttonContainer}>
        <Button title="Verify Otp" />
      </View>
      <View style={styles.signContainer}>
        <View style={styles.signUpContainer}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.SignText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpVerificationView;
