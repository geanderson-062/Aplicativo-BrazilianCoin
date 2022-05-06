
import React from 'react'
import {View} from 'react-native'

//lib com as animacoes
import LottieView from 'lottie-react-native';

//importando os componentes
import Title_link from '../components/Titulo_links';

export function Links() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

         <br />

        <Title_link/>

         <br />

         <LottieView source={require('../Animation/link.json')} />

        </View>
    )
    
    
  }
