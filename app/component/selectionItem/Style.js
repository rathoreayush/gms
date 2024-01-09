import {StyleSheet,Dimensions} from 'react-native';
import colors from 'const/encolor';




const { height, width } = Dimensions.get('window')

const cardHeight = (height * 21) / 100;
const cardWidth = (width * 95) / 100;


const style= StyleSheet.create({
button:{
    height:cardHeight,
    width:cardWidth,
    backgroundColor:colors.hearingCardBackground,
    alignSelf:'center',
    marginTop:5,
    marginBottom:5,
    borderRadius:10,
    //flexDirection:'row',
    //justifyContent:'space-between',
   // alignItems:'center',
}
})

export default style