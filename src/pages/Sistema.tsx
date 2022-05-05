
import React from 'react'
import { View } from 'react-native'

//importando o componentes

//valor atual do bitcoin
import Preco_atual from '../components/Preco_atual'

//grafico mostrando a variacao do preco
import Grafico from '../components/Grafico'

//botoes de filtragem de dados da api
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