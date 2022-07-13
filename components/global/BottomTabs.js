import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs({ navigation }) {
    return (
        <View style={{
            flexDirection: "row",
            margin: 10,
            marginHorizontal: 30,
            justifyContent: 'space-between'
        }}>
            <Icon icon="home" text="Home" OnPress={() => { navigation.navigate('Scratch') }} />
            <Icon icon="search" text="Buscar" />
            <Icon icon="heart" text="Mi lista" />
            <Icon icon="user" text="Mi cuenta" />
        </View>
    )
}

const Icon = (props) => {
    return (
        <TouchableOpacity onPress={props.OnPress}>
            <FontAwesome5
                name={props.icon}
                size={20}
                style={{
                    marginBottom: 3,
                    alignSelf: "center"
                }} />
            <Text>{props.text}</Text>
        </TouchableOpacity>

    )
}