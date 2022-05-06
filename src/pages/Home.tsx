
import React from 'react'
import {View} from 'react-native'

//lib com as animacoes
import LottieView from 'lottie-react-native';

//importando componente com a imagem
import { Img_home } from '../components/Img_home'
import Title_home from '../components/Titulo_home'

export function Home() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

          <br />
          
          <Title_home/>

          <LottieView source={require('../Animation/bemvindo.json')} />

          <Img_home/>

        </View>
    )
    
    
  }