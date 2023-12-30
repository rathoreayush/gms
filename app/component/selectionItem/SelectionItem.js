import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import style from './Style';
const SelectionItem = ({item,onLongPress,onSelect}) => {
  return (
   <TouchableOpacity style={style.button}>
    <View style={{flexDirection:"row", justifyContent:'space-between',marginTop:10,paddingLeft:7,paddingRight:7}}>
    <Text style={{color:'#fff',fontWeight:'bold'}}>{item.date}</Text>
    <Text style={{color:'#fff',fontWeight:'bold'}}>{item.day}</Text>
    </View>
    <View style={{marginTop:5,paddingLeft:7,paddingRight:7}}>
    <Text style={{color:'#fff',fontWeight:'bold'}}>{item.title}</Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:10,paddingLeft:7,paddingRight:7}}>
    <Text style={{color:'#fff',fontWeight:'bold'}}>{item.caseNumber}</Text>
    <Text style={{color:'#fff',fontWeight:'bold'}}>{item.courtName}</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>
        <TouchableOpacity style={{borderColor:'yellow',borderWidth:1,width:80,height:30,borderRadius:40,marginRight:15,}}>
        <Text style={{color:'yellow',fontWeight:'500',textAlign:'center',marginTop:2}}>{item.schedule}</Text>
        </TouchableOpacity>
    </View>
   </TouchableOpacity>
  )
}

export default SelectionItem