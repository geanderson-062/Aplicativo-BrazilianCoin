
import React from 'react'
import {View} from 'react-native'

//importando o conteudo
import Blog from '../content/Oblog/index'

//importando compoenentes
import Title_blog from '../components/Titulo_blog'
import { Img_blog } from '../components/Img_blog/index'

export function Oblog() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

             <br />

             <Title_blog/>

             <br />

             <Img_blog/>

             <br />

             <Blog/>

        </View>
    )
    
    
  }