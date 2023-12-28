import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import colors from 'const/encolor';
import CountryPicker from 'react-native-country-picker-modal';

export const InputField = ({
  icon,
  secureTextEntry,
  onToggleSecureTextEntry,
  onCountrySelect,
  children,
  onChangeText,
  value,
  isValid,
  ...props
}) => {
  const [isSecure, setIsSecure] = useState(true);

  const toggleSecureTextEntry = () => {
    setIsSecure(!isSecure);
    if (onToggleSecureTextEntry) {
      onToggleSecureTextEntry(!isSecure);
    }
  };

  return (
    <View style={[styles.inputView,  {borderColor:isValid? colors.inputBorderColor:'red'}]}>
      {children}
      {onCountrySelect && (
        <View style={styles.countryCodeContainer}>
          {/* <CountryPicker
            style={styles.countryCodeInput}
            // value={countryCode}
            visible={false} // Set to true to show the country picker modal
            withFilter={true}
            // onSelect={onCountrySelect}
            // withFlag={true}
            // withEmoji={true}
          /> */}
        </View>
      )}

      <MaterialIcons
        name={icon}
        size={20}
        color={colors.primaryColor}
        style={styles.icon}
      />
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={colors.blackColor}
        secureTextEntry={secureTextEntry && isSecure}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        value={value}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={toggleSecureTextEntry}>
          <MaterialIcons
            name={isSecure ? 'visibility-off' : 'visibility'}
            size={20}
            color={colors.primaryColor}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;


export const InputBox = ({ icon, secureTextEntry, isSecure, onToggleSecureTextEntry, ...props }) => {
  return (
    <View style={styles.inputView}>
      <MaterialIcons
        name={icon}
        size={20}
        color={colors.primaryColor}
        style={styles.icon}
      />
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={styles.color}
        secureTextEntry={secureTextEntry && isSecure}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={onToggleSecureTextEntry}>
          <MaterialIcons
            name={isSecure ? 'visibility-off' : 'visibility'}
            size={20}
            color={colors.primaryColor}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

