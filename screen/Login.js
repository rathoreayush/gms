import React from 'react';
import {View,Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import LoginSVG from '../assests/images/mics/login.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Google from '../assests/images/mics/google.svg';
import Facebook from '../assests/images/mics/facebook.svg';
import Twitter from '../assests/images/mics/twitter.svg';

function Login() {
  return (
  
      <SafeAreaView style={{flex:1,justifyContent:'center'}}>
        <View style={{paddingHorizontal:25}}>
        <View style={{alignItems:"center"}}>
        <LoginSVG height={300} width={300}/>
        </View>
        <Text style={{
          fontSize:25,
          fontWeight:'500',
          color:'#333',
          marginBottom:30,
        }}>Login</Text>

        <View style={{flexDirection:"row", borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
         <MaterialIcons name="alternate-email" size={20} color="#666" style={{marginRight:5}}/> 
         <TextInput placeholder='Email Id' style={{flex:1, paddingVertical:0}} keyboardType='email-address' />
        </View>

        <View style={{flexDirection:"row", borderBottomColor:"#ccc",borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
         <Ionicons name="lock-closed-outline" size={20} color="#666" style={{marginRight:5}}/> 
         <TextInput placeholder='Password' style={{flex:1, paddingVertical:0}} secureTextEntry={true}/>
         <TouchableOpacity onPress={()=>{}}>
          <Text style={{color:'#AD40AF',fontWeight:'700'}}>Forgot?</Text>
         </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{}}
         style={{backgroundColor:'#AD40AF',padding:20,borderRadius:10,marginBottom:30}}
         >
          <Text
          style={{textAlign:"center", fontWeight:'700',fontSize:16,color:'#fff'}}
          >Login</Text>
         </TouchableOpacity>
         <Text style={{textAlign:'center',color:'#666',marginBottom:30}}>Or, login with..</Text>
         <View style={{flexDirection:"row", justifyContent:"space-between",marginBottom:30}}>
         <TouchableOpacity onPress={()=>{}} style={{
          borderColor:"#ddd",
          borderWidth:2,
          borderRadius:10,
          paddingHorizontal:30,
          paddingVertical:10,
         }}>
          <Google height={24} width={24}/>
         </TouchableOpacity>

         <TouchableOpacity onPress={()=>{}} style={{
          borderColor:"#ddd",
          borderWidth:2,
          borderRadius:10,
          paddingHorizontal:30,
          paddingVertical:10,
         }}>
          <Facebook height={24} width={24}/>
         </TouchableOpacity>

         <TouchableOpacity onPress={()=>{}} style={{
          borderColor:"#ddd",
          borderWidth:2,
          borderRadius:10,
          paddingHorizontal:30,
          paddingVertical:10,
         }}>
          <Twitter height={24} width={24}/>
         </TouchableOpacity>
         </View>

         <View style={{flexDirection:"row", justifyContent:"center",marginBottom:30}}>
         <Text>New to the app?</Text>
         <TouchableOpacity onPress={()=>{}}>
         <Text style={{color:"#AD40AF",fontWeight:"700"}}>Register</Text>
         </TouchableOpacity>
         </View>
        </View>
      </SafeAreaView>
   
  );
}

export default Login;
