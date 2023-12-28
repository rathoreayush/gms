import React from 'react';
import {TouchableOpacity,SafeAreaView,Text,} from 'react-native';




function Home({navigation}) {
  
  return (
    <SafeAreaView>
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Cart')}
    style={{backgroundColor:'#AD40AF',padding:20,borderRadius:10,}}>
      <Text style={{textAlign:"center", fontWeight:'700',fontSize:16,color:'#fff'}}>Cart</Text>
    </TouchableOpacity>
    <Text>Home Page</Text>

   </SafeAreaView>
  )
}

export default Home
