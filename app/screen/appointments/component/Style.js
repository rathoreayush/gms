import {StyleSheet,Dimensions} from 'react-native';
import colors from 'const/encolor';

const{height,width}=Dimensions.get('window')

const buttonHeight=(height*5)/100;
const buttonWidth=(width*80)/100;

const lottieHeight=(height*40)/100;
const lottieWidth=(width*100)/100

const styles = StyleSheet.create({

    container:{
        flex:1,
    },
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
    lottie:{
        height:lottieHeight,
        width:lottieWidth,
    },
    lottieView:{
        alignItems:'center',
        marginTop:60
    },
    textView:{
        alignItems:'center',
    },
    text:{
        color:colors.primaryColor,
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center'
    },
    subText:{
        color:colors.blackColor,
        fontSize:15,
        fontWeight:'700',
    }

})
export default styles