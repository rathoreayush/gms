import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import SplashSVG from 'app/untils/images/mics/splash-icon.svg';
import styles from './Style';


function Splash() {
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
        <SplashSVG height={200} width={200}/>
      </View>
      <Text style={styles.title}>Law Managment</Text>
      </View>
    </SafeAreaView>
  );
}

export default Splash;
