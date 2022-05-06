
import React from 'react'
import {View} from 'react-native'

//lib com as animacoes
import LottieView from 'lottie-react-native';

//importando componentes
import Title_configuracao from '../components/Titulo_configuracao'

//importando conteudo
import Cards_configuracao from '../content/Cards_configuracao'

export function Configuracao() {
  
    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

            <br />

            <Title_configuracao/>

            <LottieView source={require('../Animation/config.json')} />

            <Cards_configuracao/>

      
            
        </View>
    )
    
    
  }
