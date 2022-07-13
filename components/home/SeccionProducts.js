import React from 'react';
import { View } from 'react-native';

import CarruselProducts from './CarruselProduct/CarruselProducts'
import Title from '../global/Title'
import Description from '../global/Description'
import CustomButton from '../global/CustomButton'
import { heightPercentageToDP } from '../../utils/ScreenDimension';

const data = [
  {
    image: "https://cdn-images.farfetch-contents.com/18/55/35/53/18553553_40111691_1000.jpg",
    title: 'Prada',
    description: 'top corto en strass',
    price: '1.590 €'
  },
  {
    image: 'https://cdn-images.farfetch-contents.com/18/36/75/78/18367578_40366256_1000.jpg',
    title: 'Balenciaga',
    description: 'bolso combonera LE Cagole XS',
    price: '1.550 €'
  },
  {
    image: 'https://cdn-images.farfetch-contents.com/18/62/27/17/18622717_40313829_1000.jpg',
    title: 'Alexander McQueen',
    description: 'pantalones de vestir bootcut',
    price: '650 €'
  },
  {
    image: 'https://cdn-images.farfetch-contents.com/17/91/58/62/17915862_40407785_1000.jpg',
    title: 'Amina Muaddi',
    description: 'mules Lily con tacón de 95 mm',
    price: '960 €'
  },
  {
    image: 'https://cdn-images.farfetch-contents.com/18/55/35/53/18553553_40111691_1000.jpg',
    title: 'Prada',
    description: 'top corto en strass',
    price: '1.590 €'
  },
  {
    image: 'https://cdn-images.farfetch-contents.com/18/36/75/78/18367578_40366256_1000.jpg',
    title: 'Balenciaga',
    description: 'bolso combonera LE Cagole XS',
    price: '1.550 €'
  },
  {
    image: 'https://cdn-images.farfetch-contents.com/18/62/27/17/18622717_40313829_1000.jpg',
    title: 'Alexander McQueen',
    description: 'pantalones de vestir bootcut',
    price: '650 €'
  },
  {
    image: 'https://cdn-images.farfetch-contents.com/17/91/58/62/17915862_40407785_1000.jpg',
    title: 'Amina Muaddi',
    description: 'mules Lily con tacón de 95 mm',
    price: '960 €'
  }
]

export default function SeccionProducts({ title, description, buttonText }) {
  return (


    < View style={{
      marginTop: heightPercentageToDP(1),
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingLeft: 20
    }
    }>
      <Title title={title} size="L" />
      <Description description={description} />
      <CarruselProducts data={data} />

      <CustomButton buttonText={buttonText} />
    </View >
  )
};