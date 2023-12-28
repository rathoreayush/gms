import React, { useState } from 'react';
import styles from './style';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import InputField from 'component/inputField/inputField';
import Button from 'component/button/Button';
import CustomCheckbox from 'component/checkbox/Checkbox';
import { fieldNames } from 'app/const/en';
import { useNavigation } from '@react-navigation/native';

function SignupView() {
  const navigation = useNavigation();
  //checkbox 
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const handleCheckboxToggle = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  // get value
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const [wrongemail, setWrongEmail] = useState('');
  const [wrongPassword, setWrongPassword] = useState('');
  const [wrongname, setWrongName] = useState('');
  const [wrongphonenumber, setWrongPhoneNumber] = useState('');

  //validation
  const validate = () => {
    let isValid = false
    if (email == '') {
      setWrongEmail("Please Enter Email");
      isValid = false
    } else if (email != '' && !email.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {

      setWrongEmail("Please Enter Valid Email");
      isValid = false
    } else if (email != '' && email.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
      isValid = true
      setWrongEmail('');
    }
    if (password == '') {
      setWrongPassword("Please Enter Password");
      isValid = false
    } else if (password != '' && password.length < 5) {
      setWrongPassword("Please Enter Minimum 5 Character Password");
      isValid = false
    }
    else if (password != '' && password.length > 4) {
      setWrongPassword('');
      isValid = true
    }
    if (name == '') {
      setWrongName("Please Enter Name");
      isValid = false
    } else if (name != '') {
      setWrongName('');
      isValid = true
    }
    if (phonenumber == '') {
      setWrongPhoneNumber("Please Enter Phone Number");
      isValid = false
    }
    else if (phonenumber != '' && phonenumber.length < 10) {
      setWrongPhoneNumber("Please Enter Minimum 10 Digit Mobile Number");
      isValid = false
    }
    else if (phonenumber != '' && phonenumber.length > 9) {
      setWrongPhoneNumber('');
      isValid = true
    }
    return isValid
  };

  return (
    <SafeAreaView style={styles.screenView}>

      <View style={styles.inputContainer}>
        <View style={styles.fieldContainer}>
          <InputField
            icon={'person' ? 'person' : null}
            placeholder={fieldNames.name ? fieldNames.name : null}
            style={styles.inputText}
            value={name}
            onChangeText={txt => setName(txt)}
            isValid={wrongname == '' ? true : false}
          />
          {wrongname != '' && <Text style={styles.errorText}>{wrongname}</Text>}
        </View>
        <View style={styles.fieldContainer}>
          <InputField
            icon={'email' ? 'email' : null}
            placeholder={fieldNames.email ? fieldNames.email : null}
            keyboardType="email-address"
            style={styles.inputText}
            value={email}
            onChangeText={txt => setEmail(txt)}
            isValid={wrongemail == '' ? true : false}
          />
          {wrongemail != '' && <Text style={styles.errorText}>{wrongemail}</Text>}
        </View>
        <View style={styles.fieldContainer}>
          <InputField
            icon={'phone' ? 'phone' : null}
            placeholder={fieldNames.phoneNumber ? fieldNames.phoneNumber : null}
            onCountrySelect="+91"
            isPhoneNumberScreen={true}
            keyboardType="numeric"
            style={styles.inputText}
            onPressCountryCode={() => {
              // Handle the country code button press here
            }}
            value={phonenumber}
            onChangeText={txt => setPhoneNumber(txt)}
            isValid={wrongphonenumber == '' ? true : false}
          />
          {wrongphonenumber != '' && <Text style={styles.errorText}>{wrongphonenumber}</Text>}
        </View>
        <View style={styles.fieldContainer}>
          <InputField
            icon={'lock' ? 'lock' : null}
            placeholder={fieldNames.password ? fieldNames.password : null}
            secureTextEntry={true}
            style={styles.inputText}
            onToggleSecureTextEntry={secureTextEntry => { secureTextEntry }}
            value={password}
            onChangeText={txt => setPassword(txt)}
            isValid={wrongPassword == '' ? true : false}
          />
          {wrongPassword != '' && <Text style={styles.errorText}>{wrongPassword}</Text>}
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <CustomCheckbox
            checked={isCheckboxChecked} onToggle={handleCheckboxToggle}
          />
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Condition')}>
              <Text style={styles.text}>Terms & Condition</Text>
            </TouchableOpacity>
            <Text style={styles.normalText}>and</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
              <Text style={styles.text}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Sign Up"
          disabled={!isCheckboxChecked}
          onPress={() => {
            if (validate()) {
              navigation.navigate('SignupVerification')
            }
          }}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account ?</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginbtnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SignupView;
