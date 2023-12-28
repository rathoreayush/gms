import { StyleSheet, Dimensions } from "react-native";


const { height, width } = Dimensions.get('window')

//calculate % into pixel
const sliderWidth = (width * 80) / 100;
const sliderHeight = (height * 40) / 100;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerbottom: {
        height: height / 2
    },
    sliderContainer: {
        width: width,
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slider: {
        width: sliderWidth,
        height: sliderHeight,
        backgroundColor: 'green',
        borderRadius: 10,
    },
    textView: {
        marginTop: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: '500',
        color: 'black',
    },
    dotContainer: {
        flexDirection: 'row',
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    dot: {
        borderRadius: 4,
        marginLeft: 5
    },
    buttonView: {
        width: width,
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    buttonText: {
        color: '#5969E3',
        fontSize: 20,
        fontWeight: '900'
    }
})


export default styles