
import React from 'react'
import { View } from 'react-native'

//importando o conteudo / sistema 
import BitcoinSistem from '../content/BitcoinSistem/BitcoinSistem'

//sistema final com back end
import Preco_atual from '../components/Preco_atual/index';
import Grafico from '../components/Grafico/index';
import Lista_de_cotacao from '../components/Lista_de_cotacao/index';

//demonstrações
import Graficodemonstrativo from '../demo/Graficodemonstrativo';
import Preco_atual_demonstrativo from '../demo/Preco_atual_demonstrativo';
import Lista_de_cotacao_demonstrativo from '../demo/Listadecotacao_demonstrativo';
  
export function Sistema() {

    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

        <BitcoinSistem/>
      
         {/*  sitema com back end final

         <Preco_atual/>
         <Grafico/>
         <Lista_de_cotacao/> 
         
         */}

        </View>

    )
    
    
  }