import Header from 'component/header/Header';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView } from 'react-native';
import InputField from 'component/inputField/inputField';
import { fieldNames } from 'const/en';
import styles from './Style';
import OtpInput from 'component/otpInput/OtpInput';
import OtpTimer from 'component/otpTimer/OtpTimer';
import Button from 'component/button/Button';

const ForgotPasswordView = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState()
  const [showOtpComponent, setShowOtpComponent] = useState(false);
  const [showProceedButton, setShowProceedButton] = useState(true)


  const handleEmailChange = (value) => {
    setEmail(value);
  }

  const handleProceed = () => {
    setShowOtpComponent(true);
    setShowProceedButton(false);
  }

  const handleOtpChange = (updatedOtp, index) => {
    const newOtp = [...otp];
    newOtp[index] = updatedOtp[0];
    setOtp(newOtp);
  };

  const handleOtpComplete = (completedOtp) => {
    console.log('OTP Complete:', completedOtp);
  };
  return (
    <SafeAreaView style={styles.screenContainer}>

      <View style={styles.inputContainer}>
        <InputField
          icon={'email' ? 'email' : null}
          placeholder={fieldNames.email ? fieldNames.email : null}
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      {
        showProceedButton ? (
          <View style={styles.proceedButton}>
            <Button
              title="Proceed"
              onPress={handleProceed}
            />
          </View>
        ) : null
      }
      {
        showOtpComponent ? (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Otp Send to your mobile number ********98</Text>
            </View>
            <View style={styles.otpContainer}>
              <OtpInput keyboardType="numeric" length="4" onOtpChange={handleOtpChange} onComplete={handleOtpComplete} />
            </View>
            <View>
              <OtpTimer />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Verify Otp"
                onPress={() => navigation.navigate('CreatePassword')}
              />
            </View>
          </>
        ) : null
      }
    </SafeAreaView>
  );
};

export default ForgotPasswordView;
