import {StyleSheet,Dimensions} from 'react-native';
import colors from 'const/encolor';



const {height,width} =Dimensions.get("window");

//calculate % into pixel
const headWidth = (width*90)/100;
const headHeight = (height*7)/100;
export default styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.headTitleColor,
    marginRight:80
  },
  container: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',  
    width:headWidth,
    height:headHeight,
   backgroundColor:colors.headerbgcolor
   
  },
});
