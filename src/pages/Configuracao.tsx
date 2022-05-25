
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

            <Title_configuracao/>{/*recebendo titulo da pagina*/}

            <Img_config/>{/*imagem da pagina*/}

            <Cards_configuracao/>{/*csrds dessa pagina*/}

        </View>
    )
    
    
  }
