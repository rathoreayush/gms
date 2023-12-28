import React from 'react';
import styles from './Style';
import {SafeAreaView,View,Text} from 'react-native';
import InputField from 'component/inputField/inputField';
import { fieldNames } from 'const/en';
import Button from 'component/button/Button';
import { useNavigation } from '@react-navigation/native';

const CreatePasswordView = () => {

  const navigation=useNavigation();
  return (
   <SafeAreaView style={styles.screenContainer}>
    <View style={styles.fieldContainer}>
    <InputField
            icon={'lock' ? 'lock' : null}
            placeholder={fieldNames.newPassword ? fieldNames.newPassword : null}
            secureTextEntry={true}
            style={styles.inputText}
            onToggleSecureTextEntry={isSecure => {
              // console.log(`Password visibility: ${isSecure ? 'Hidden' : 'Visible'}`);
            }}
          />
    </View>
    <View style={styles.confirmContainer}>
    <InputField
            icon={'lock' ? 'lock' : null}
            placeholder={fieldNames.confirmPassword ? fieldNames.confirmPassword : null}
            secureTextEntry={true}
            style={styles.inputText}
            onToggleSecureTextEntry={isSecure => {
              // console.log(`Password visibility: ${isSecure ? 'Hidden' : 'Visible'}`);
            }}
          />
    </View>
    <View style={styles.buttonContainer}>
      <Button 
      title="Submit"
      onPress={()=>navigation.navigate('ResetPassword')}
      />
    </View>
   </SafeAreaView>
  )
}

export default CreatePasswordView
