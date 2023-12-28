import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';
import colors from 'const/encolor';

const Button = ({ disabled, onPress, title }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? "grey" : colors.primaryColor,
        }
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.buttonText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
