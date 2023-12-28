import {StyleSheet} from 'react-native';
import colors from 'const/encolor';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  headerContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 200,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    color: colors.primaryColor,
  },
  otpContainer: {
    marginTop: 80,
  },
  buttonContainer:{
    alignItems:'center',
    marginTop:70
  },
  proceedButton:{
    alignItems: 'center',
     marginTop: 30 
  }
});

export default styles;
