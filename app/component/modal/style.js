import { StyleSheet, Dimensions } from 'react-native';
import colors from 'const/encolor';

const { height, width } = Dimensions.get('window')

const modalHeight = (height * 32) / 100;
const modalWidth = (width * 100) / 100;

const buttonHeight = (height * 7) / 100;
const buttonWidth = (width * 50) / 100;


const styles = StyleSheet.create({
    view: {
        position: 'absolute',
        bottom: 0,
        height: modalHeight,
        width: modalWidth,
        backgroundColor: colors.whiteColor,
    },
    modal: {
        width: modalWidth,
        marginBottom: 0,
        marginLeft: 0,
    },
    inputView: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    inputFeild: {
        color: colors.blackColor,
        fontSize: 15,
        fontWeight: '500',
        borderColor: colors.inputBorderColor,
        borderWidth: 1,
        borderRadius: 15,
        textAlign: 'center'
    },
    buttonView: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        height: buttonHeight,

    },
    buttonText: {
        color: colors.whiteColor,
        marginTop: 10,
        marginLeft: 5,
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
    },
    button: {
        borderColor: colors.inputBorderColor,
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        backgroundColor: colors.headerbgcolor,

    },
    submitView: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        height: buttonHeight,
        width: buttonWidth,
        alignSelf: 'center',
    },
    submitButton: {
        borderColor: colors.inputBorderColor,
        borderWidth: 1,
        borderRadius: 15,
        height: 45,
        backgroundColor: colors.headerbgcolor,
        alignItems: 'center',
    },
    submitText: {
        color: colors.whiteColor,
        marginTop: 10,
        marginLeft: 5,
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    dateView: {
        marginLeft: 20
    },
    dateButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        color: colors.blackColor,
    },
    clockView: {
        marginRight: 20
    },
    clockButton: {
        flexDirection: 'row', alignItems: 'center'
    },
    clockText: {
        color: 'black'
    }

})

export default styles