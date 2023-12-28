import React, {useEffect} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import SplashSVG from '../assests/images/mics/splash-icon.svg';

function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
      <View style={{alignItems:'center'}}>
        <View style={{alignItems:'center'}}>
        <SplashSVG height={200} width={200}/>
      </View>
      <Text style={{
          fontSize:30,
          fontWeight:"900",
          color:'#C0AAE5',
          marginTop:30,
        }}>Law Managment</Text>
      </View>
    </SafeAreaView>
  );
}

export default Splash;
