import {StyleSheet} from 'react-native';
import colors from 'const/encolor';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  allContainer: {
    alignItems: 'center',
  },
  inputField: {
    marginTop: 30,
  },
  feildText: {
    color: colors.blackColor,
    fontWeight: 'bold',
    fontSize: 20,
  },
  forgotContainer: {
    marginTop: 30,
    marginLeft: 20,
  },
  forgotText: {
    color: colors.primaryColor,
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
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
  }
});

export default styles;
