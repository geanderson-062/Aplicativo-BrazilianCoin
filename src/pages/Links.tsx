
import React from 'react'
import {View} from 'react-native'

//lib com as animacoes
import LottieView from 'lottie-react-native';

//importando os componentes
import Title_link from '../components/Titulo_links';

//importando o conteudo
import Cards_links from '../content/Cards_links/index'

export function Links() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

         <br />

        <Title_link/>

         <br />

         <LottieView source={require('../Animation/link.json')} />

         <Cards_links/>

        </View>
    )
    
    
  }
