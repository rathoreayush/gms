import Button from 'component/button/Button';
import React from 'react';
import styles from './Style';
import {Text,View,SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResetPasswordView = () => {

    const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.screenContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Reset Password Successfully Updated</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button 
            title="Login"
            onPress={()=>navigation.navigate('Login')}
            />
        </View>
    </SafeAreaView>
  )
}

export default ResetPasswordView
