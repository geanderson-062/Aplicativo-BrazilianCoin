
import React from 'react'
import { View } from 'react-native'

//importando o conteudo / sistema 
//import { BitcoinSistem } from '../content/BitcoinSistem/BitcoinSistem'

import Preco_atual from '../components/Preco_atual/index';
import Grafico from '../components/Grafico/index';
import Lista_de_cotacao from '../components/Lista_de_cotacao/index';
  
export function Sistema() {

    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

           <Preco_atual/>
           <Grafico/>

         {/*  <Lista_de_cotacao/> */}

        </View>

    )
    
    
  }