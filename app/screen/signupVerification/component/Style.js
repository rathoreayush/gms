import { StyleSheet } from "react-native";
import colors from "const/encolor";

const styles=StyleSheet.create({
    verificationContainer:{
        flex:1,
        backgroundColor:colors.whiteColor,
     },
     titleContainer:{
        alignItems:'center',
        marginBottom:10
     },
     boxContainer:{
        marginTop:200
     },
     buttonContainer:{
        alignItems:'center',
        marginTop:210
     },
     signContainer: {
        alignItems: 'center',
        marginTop: 40,
      },
      signUpContainer: {
        flexDirection: 'row',
      },
      signupText:{
        color:colors.blackColor,
        fontSize:15,
        fontWeight:'bold'
      },
      SignText:{
        color:colors.primaryColor,
        fontWeight:'bold',
        fontSize:15
      },
      
     
})

export default styles