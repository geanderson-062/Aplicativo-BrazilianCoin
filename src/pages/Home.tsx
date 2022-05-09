
import React from 'react'
import {View} from 'react-native'

//importando componente com a imagem
import { Img_home } from '../components/Img_home'
import Subtitulo_home from '../components/Subtitulo_home'
import Title_home from '../components/Titulo_home'

//importando o conteudo
import Cards_home from '../content/Cards_home'

export function Home() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

          <br />{/*quebra de linha */}
          
          <Title_home/>{/*recebendo titulo da pagina*/}

          <Img_home/>{/*imagem da pagina*/}

          <br />{/*quebra de linha */}

          <Subtitulo_home/>{/*subtitulo dessa pagina*/}

          <br />{/*quebra de linha */}

          <Cards_home/>{/*cards desssa pagina*/}

        </View>
    )
    
    
  }