import {StyleSheet} from 'react-native';
import colors from 'const/encolor';

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  otpBox: {
    borderRadius: 5,
    borderColor: colors.inputBorderColor,
    borderWidth: 2,
    backgroundColor:colors.inputBgColor
  },
  otpText: {
    fontSize: 15,
    color: colors.blackColor,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },

});

export default styles;
