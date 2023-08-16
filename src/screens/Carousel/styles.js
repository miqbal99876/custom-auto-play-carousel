import { StyleSheet } from "react-native";

// define your styles
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c7593f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 200,
        width: screenWidth,
        borderRadius: 10
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
});
