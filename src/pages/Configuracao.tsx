
import React from 'react'
import {View} from 'react-native'

//importando componentes
import Title_configuracao from '../components/Titulo_configuracao';
import { Img_config } from '../components/Img_config/index';

//importando conteudo
import Cards_configuracao from '../content/Cards_configuracao'

export function Configuracao() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

            <br />

            <Title_configuracao/>

            <br />

            <Img_config/>

            <br />

            <Cards_configuracao/>

        </View>
    )
    
    
  }
