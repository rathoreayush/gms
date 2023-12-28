import React from 'react';
import styles from './Style';
import {View,Text,TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OtpTimer = () => {
  return (
    <View style={styles.timerContainer}>
    <View style={styles.iconContainer}>
      <MaterialIcons name="update" size={40} color="blue" />
      <Text style={styles.timerText}>01:20</Text>
    </View>
    <View>
      <TouchableOpacity>
        <Text style={styles.text}>Resend Otp</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default OtpTimer
