import React from 'react'
import {View,Image} from 'react-native'

//importando o style
import styles from './style'

//criando componente img_home
export function Img_config() {
  
    return (

      <View>
            <Image style={styles.imagem} source={require('../../img/img_config.png')}/>
      </View>
    
    )
     
  }