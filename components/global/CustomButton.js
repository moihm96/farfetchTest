import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/ScreenDimension';


export default function CustomButton({ buttonText }) {
    return (
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>{buttonText}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "black",
        width: widthPercentageToDP(30),
        height: heightPercentageToDP(7),
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: heightPercentageToDP(5)
    },
    buttonTextStyle: {
        color: "#eee",
        fontSize: 15
    }

})