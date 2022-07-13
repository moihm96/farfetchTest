import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../utils/ScreenDimension';
import CustomButton from '../global/CustomButton';
import Description from '../global/Description';
import Title from '../global/Title';


export default function Seccion({ navigation, image, title, description, buttonText }) {

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: image,
                    headers: {
                        Accept: '*/*',
                    },
                }}
                style={{ width: '100%', height: '60%' }} resizeMode='contain' />

            <Title title={title} />
            <Description description={description} />
            <CustomButton buttonText={buttonText} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP("100"),
        height: heightPercentageToDP("90"),
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "3%",
    }
});