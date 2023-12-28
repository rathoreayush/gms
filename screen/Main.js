import React from 'react';
import { View,Text,TouchableOpacity,SafeAreaView } from 'react-native';


function Main({navigation}) {
  return (
    <>
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
    <View>
    <Text style={{fontSize:30, fontWeight:'bold', color:'#20315f',}}>Welcome</Text>    
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{backgroundColor:"#AD40AF",padding:20,width:"70%",borderRadius:5,alignItems:"center",alignContent:"center",marginTop:20}}>
        <Text style={{fontWeight:"bold", fontSize:18,color:"#fff",}}>Start</Text>
    </TouchableOpacity>
    </SafeAreaView> 
    </>
  ) 
}

export default Main
