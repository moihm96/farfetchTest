import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';

export default function ClotheButton({ title, image, navigation, route }) {

    return (
        <ImageBackground
            source={{ uri: image }}
            style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} style={styles.buttonStyle} onPress={() => { navigation.navigate('Home', { title: title }) }}>
                <Text style={styles.textStyle}>{title}</Text>
            </TouchableOpacity>

        </ImageBackground >
)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonStyle: {
        backgroundColor: "#fff",
        width: "55%",
        height: "29%",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%"
    },
    textStyle: {
        fontSize: 12
    }
});