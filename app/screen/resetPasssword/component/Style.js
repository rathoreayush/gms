import {StyleSheet} from 'react-native';
import colors from 'const/encolor';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.whiteColor
  },
  buttonContainer: {
    marginTop: 300,
  },
  textContainer:{
    marginTop:200
  },
  text:{
color:colors.blackColor,
fontWeight:'bold',
fontSize:20
  }
});

export default styles;
