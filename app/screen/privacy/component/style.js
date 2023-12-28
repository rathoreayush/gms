import {StyleSheet} from 'react-native';
import colors from 'const/encolor';

const styles = StyleSheet.create({
  privacyContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingLeft: 10,
    marginTop: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    padding:10
  },
  text:{
    fontSize:15,
    color:colors.blackColor,
    textAlign:'justify'
  }
});

export default styles;
