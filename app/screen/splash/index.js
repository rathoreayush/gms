import React,{useEffect} from 'react';
import Splash from './component/Splash';



const SplashsScreen = ({navigation}) =>{

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboard');
    }, 2000);
  }, []);
  return(
    <Splash/>
  )
}

export default SplashsScreen
