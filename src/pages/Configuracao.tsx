
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

            <br />{/*quebra de linha */}

            <Title_configuracao/>{/*recebendo titulo da pagina*/}

            <br />{/*quebra de linha */}

            <Img_config/>{/*imagem da pagina*/}

            <br />{/*quebra de linha */}

            <Cards_configuracao/>{/*csrds dessa pagina*/}

        </View>
    )
    
    
  }
