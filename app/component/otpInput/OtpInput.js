import React, { useState, useRef } from 'react';
import { View, TextInput } from 'react-native';
import styles from './Style';

const OtpInput = ({ length, onOtpChange, onComplete, ...props}) => {
  const inputRefs = useRef([]);

  const handleInputChange = (text, index) => {
    const otpArray = text.split('');
    const updatedOtp = [...otpArray];
    onOtpChange(updatedOtp, index);

    if (otpArray.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (updatedOtp.length === inputRefs.current.length) {
      onComplete(updatedOtp.join(''));
    }
  };

  return (
    <View style={styles.otpContainer}>
      {Array.from({ length }).map((_, index) => (
        <View key={index} style={styles.otpBox}>
          <TextInput
          {...props}
            style={styles.otpText}
            onChangeText={(text) => handleInputChange(text, index)}
            maxLength={1}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        </View>
      ))}
    </View>
  );
};

export default OtpInput;
