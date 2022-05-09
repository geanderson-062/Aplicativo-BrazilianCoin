
import React from 'react'
import {View} from 'react-native'

//importando os componentes
import Title_link from '../components/Titulo_links'
import { Img_link } from '../components/Img_link/index'

//importando o conteudo
import Cards_links from '../content/Cards_links/index'

export function Links() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

         <br />{/*quebra de linha */}

         <Title_link/>{/*recebendo titulo da pagina*/}

         <br />{/*quebra de linha */}

         <Img_link/>{/*imagem da pagina*/}

         <br />{/*quebra de linha */}

         <Cards_links/>{/*cards dessa pagina*/}

        </View>
    )
    
    
  }
