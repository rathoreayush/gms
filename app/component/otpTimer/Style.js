import { StyleSheet } from "react-native";
import colors from "const/encolor";

const styles=StyleSheet.create({
    timerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:30,
        paddingLeft:30,
        marginTop:20 
     },
     iconContainer:{
        flexDirection:'row',
        alignItems:'center',
     },
     timerText:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.blackColor,
        marginLeft:5
     },
     text:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.primaryColor
     },
})

export default styles