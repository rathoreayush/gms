import { StyleSheet } from 'react-native';
import colors from 'const/encolor';

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fieldContainer: {
    marginTop: 20,
  },
  inputText: {
    color: colors.blackColor,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  buttonView: {
    marginTop: 40,
    alignItems: 'center',
  },
  checkboxContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  checkbox: {
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
  },
  text: {
    color: colors.primaryColor,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  normalText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.blackColor,
    marginLeft: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  loginText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.blackColor,
  },
  loginButton: {
    marginLeft: 5,
  },
  loginbtnText: {
    color: colors.primaryColor,
    fontSize: 15,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginLeft: 5,
    marginTop: 5,
    fontSize: 10
  }
});

export default styles;
