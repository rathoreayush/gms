import { StyleSheet, Dimensions } from 'react-native';
import colors from 'const/encolor';

const { height, width } = Dimensions.get('window')

const buttonHeight = (height * 5) / 100;
const buttonWidth = (width * 80) / 100;

const styles=StyleSheet.create({
    buttonContainer:{
        marginTop:20,
        alignItems:'center'
    },
    buttonView:{
        height:buttonHeight,
        width:buttonWidth,
        backgroundColor:colors.primaryColor,
        borderRadius:5,
        paddingVertical: 5,
    },
    buttonText:{
       textAlign:'center',
       fontSize:18,
       color:colors.whiteColor,
       fontWeight:'bold',
    },

})

export default styles