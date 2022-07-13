import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utils/ScreenDimension';


export default function CarruselImage({ image }) {
    return (
        <>
            <Image
                source={{ uri: image }}
                style={{ width: widthPercentageToDP(40), height: heightPercentageToDP(35), padding: 1 }}
                resizeMode='contain'
            />

            <TouchableOpacity style={{ position: 'absolute', right: 10, top: 10 }}>
                <MaterialCommunityIcons name='heart-outline' size={25} color="black" />
            </TouchableOpacity>
        </>
    )
}