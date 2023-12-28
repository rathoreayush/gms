import { StyleSheet, Dimensions } from 'react-native';
import colors from 'const/encolor';

const { height, width } = Dimensions.get('window')

const searchHeight = (height * 5) / 100;
const searchWidth = (width * 80) / 100;

const lottieHeight = (height * 40) / 100;
const lottieWidth = (width * 100) / 100
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5
    },
    searchView: {
        width: searchWidth
    },
    lottieView: {
        alignItems: 'center',
        marginTop: 20
    },
    lottie: {
        height: lottieHeight,
        width: lottieWidth,
    },
    textView:{
        textAlign:'center',
        paddingLeft:30,
        paddingRight:30,
    },
    text:{
        color:colors.primaryColor,
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center'
    },
    subText:{
        color:colors.primaryColor,
        fontSize:20,
        fontWeight:'700',
        alignSelf:'center'
    },
    bottomTextView:{
     paddingRight:20,
     paddingLeft:20,
     marginTop:10,
    },
    bottomText:{
        color:colors.blackColor,
        fontSize:15,
        textAlign:'center'
    
    },
    bottomSubText:{
        color:colors.blackColor,
        fontSize:15,
        textAlign:'center'
   
    }

})

export default styles