import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import colors from 'const/encolor';

//calculate % into pixel
const buttonWidth = (width * 80) / 100;
const buttonHeight = (height * 6) / 100;

const styles = StyleSheet.create({
  button: {
    // backgroundColor: colors.primaryColor,
    width: buttonWidth,
    height: buttonHeight,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.whiteColor,
    fontSize: 20,
    fontWeight: 'bold',
  },

});

export default styles;
