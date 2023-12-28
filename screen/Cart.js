import React from 'react';
import {Text,View,SafeAreaView,TouchableOpacity} from 'react-native';

function Cart({navigation}) {
  return (
    <SafeAreaView>
    <View>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        style={{backgroundColor:'#AD40AF',padding:20,borderRadius:10,}}
        >
          <Text style={{textAlign:"center", fontWeight:'700',fontSize:16,color:'#fff'}}>Home</Text>
        </TouchableOpacity>
        <Text>CartPage</Text>
    </View>
    </SafeAreaView>
  )
}


export default Cart
