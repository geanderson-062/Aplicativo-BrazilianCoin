
import React from 'react'
import {View} from 'react-native'

//importando componente com a imagem
import { Img_home } from '../components/Img_home'

export function Home() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030'}}>

          <Img_home/>

        </View>
    )
    
    
  }