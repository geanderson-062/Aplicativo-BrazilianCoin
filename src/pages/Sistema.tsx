
import React from 'react'
import {View} from 'react-native'

//importando o componente
import Preco_atual from '../components/Preco_atual'
import Grafico from '../components/Grafico'
import Lista_de_cotacao from '../components/Lista_de_cotacao'

export function Sistema() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

          <Preco_atual/>

          <Grafico/>

          <Lista_de_cotacao/>

 
        </View>
    )
    
    
  }