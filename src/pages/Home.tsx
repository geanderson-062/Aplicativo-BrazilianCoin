
import React from 'react'
import {View} from 'react-native'

//importando componente com a imagem
import { Img_home } from '../components/Img_home'
import Title_home from '../components/Titulo_home'

export function Home() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

          <br />

          <Title_home/>

          <Img_home/>

        </View>
    )
    
    
  }