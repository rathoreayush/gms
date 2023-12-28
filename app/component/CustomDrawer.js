import React from 'react';
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import { Text, View,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function CustomDrawer(props) {
  return (
    <View style={{flex:1}}>
   <DrawerContentScrollView  {...props}>
    <DrawerItemList {...props}/>
   </DrawerContentScrollView>
   <View style={{padding:20,borderTopWidth:1,borderTopColor:"#ccc"}}>
    <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Ionicons name="share-social-outline" size={22}/>
        <Text style={{fontSize:15,marginLeft:5,fontWeight:"bold"}}>Share</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Ionicons name="exit-outline" size={22}/>
        <Text style={{fontSize:15,marginLeft:5,fontWeight:"bold"}}>Sign Out</Text>
        </View>
    </TouchableOpacity>
   </View>
   </View>
  )
}

export default CustomDrawer
