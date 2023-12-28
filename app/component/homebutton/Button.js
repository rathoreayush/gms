import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native'
import styles from './style';

const HomeButton = ({title,onPress}) => {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.buttonView} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  </View>
  )
}

export default HomeButton
