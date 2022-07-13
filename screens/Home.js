import React from 'react';
import { ScrollView, View, SafeAreaView, StyleSheet } from 'react-native';
import BottomTabs from '../components/global/BottomTabs';
import Seccion from '../components/home/Seccion';
import SeccionProducts from '../components/home/SeccionProducts';
import { heightPercentageToDP } from '../utils/ScreenDimension';


export default function Home({ navigation, route }) {
    const { title } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.seccionContainer}>
                    <Seccion
                        image='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3629874/data/5c6fa4bb27224fbb54b540ee10a84b80/1x1_messaging-side/637/data.png'
                        title='10 000 PIEZAS, AHORA CON -60%'
                        description='La mejor selección de diseñadores, boutiques y marcas del mundo en rebajas'
                        buttonText='Ver rebajas'
                    />
                </View>
                <View style={styles.productsSeccionContainer}>
                    <SeccionProducts
                        title="Novedades"
                        description="Selección de las mejores marcas y boutiques del mundo"
                        buttonText="Comprar ahora"
                    />
                </View>
                <View style={styles.productsSeccionContainer}>
                    <SeccionProducts
                        title="Novedades"
                        description="Selección de las mejores marcas y boutiques del mundo"
                        buttonText="Comprar ahora"
                    />
                </View>
                <View style={styles.seccionContainer}>
                    <Seccion
                        image='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3629874/data/5c6fa4bb27224fbb54b540ee10a84b80/1x1_messaging-side/637/data.png'
                        title='10 000 PIEZAS, AHORA CON -60%'
                        description='La mejor selección de diseñadores, boutiques y marcas del mundo en rebajas'
                        buttonText='Ver rebajas'
                    />
                </View>
                <View style={styles.productsSeccionContainer}>
                    <SeccionProducts
                        title="Novedades"
                        description="Selección de las mejores marcas y boutiques del mundo"
                        buttonText="Comprar ahora"
                    />
                </View>
            </ScrollView>
            <BottomTabs navigation={navigation} />
        </SafeAreaView>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    productsSeccionContainer: {
        width: "100%",
        height: heightPercentageToDP("80")
    },
    seccionContainer: {
        width: "100%",
        height: heightPercentageToDP("85")
    }
});
