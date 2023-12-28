import {StyleSheet} from 'react-native';
import colors from 'const/encolor';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
  },
  fieldContainer: {
    marginBottom: 20,
    marginTop:100
  },
  confirmContainer: {
    marginTop: 30,
    paddingBottom: 100,
  },
  buttonContainer: {
    paddingTop: 100,
    marginTop: 100,
  },
});

export default styles;
