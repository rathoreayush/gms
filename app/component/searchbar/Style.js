import { StyleSheet, Dimensions } from 'react-native';
import colors from 'const/encolor';

const { height, width } = Dimensions.get('window');

const logoHeight = (height * 10) / 100;
const logoWidth = (width * 10) / 100;


const styles = StyleSheet.create({

    searchView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.searchBgColor,
        width: '100%',
        borderRadius: 8,
        borderColor: colors.searchbarBorderColor,
        borderWidth: 1,
        height: 45,
    },
    input: {
        paddingHorizontal: 10,
        color: colors.blackColor,
    },
    image: {
        width: 30,
        height: 30,
        marginHorizontal: 50,
        tintColor: colors.primaryColor
    },

})


export default styles