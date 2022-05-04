
import React from 'react'
import {View} from 'react-native'

//importando o componente
import Preco_atual from '../components/Preco_atual'

export function Grafico() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030'}}>

          <Preco_atual/>
 
        </View>
    )
    
    
  }