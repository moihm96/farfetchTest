import React from 'react';
import { View, ScrollView } from 'react-native';
import { widthPercentageToDP } from '../../../utils/ScreenDimension';
import CarruselImage from './CarruselImage';
import CarruselInfo from './CarruselInfo';

export default function CarruselProducts({ data }) {

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item, index) => (
                <View key={index} style={{ width: widthPercentageToDP(55), marginRight: widthPercentageToDP(3), marginTop: "1%" }}>
                    <View style={{ backgroundColor: "#eee", justifyContent: 'center', alignItems: 'center' }}>
                        <CarruselImage image={item.image} />
                    </View>

                    <View>
                        <CarruselInfo title={item.title} description={item.description} price={item.price} />
                    </View>

                </View>
            ))
            }
        </ScrollView >
    )
};
