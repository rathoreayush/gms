import colors from 'const/encolor';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  inputView: {
    backgroundColor: colors.inputBgColor,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    color:colors.blackColor,
  },

  countryCodeInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    borderRadius: 10,
    paddingLeft: 10,
  },
  color:{
    color:colors.blackColor
  }
});

export default styles;
