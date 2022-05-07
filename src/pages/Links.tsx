
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

         <br />

         <Title_link/>

         <br />

         <Img_link/>

         <br />

         <Cards_links/>

        </View>
    )
    
    
  }
