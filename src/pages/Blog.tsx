
import React from 'react'
import {View} from 'react-native'

//lib com as animacoes
import LottieView from 'lottie-react-native';

//importando o conteudo
import Blog from '../content/Oblog/index'

//importando compoenentes
import Title_blog from '../components/Titulo_blog'

export function Oblog() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

            <br />

             <Title_blog/>

            <br />

             <LottieView source={require('../Animation/blog.json')} />

             <Blog/>

        </View>
    )
    
    
  }