import React from 'react'
import {View} from 'react-native'

//importando o style
import styles from './style'

//importando a imagem utilizada
import img from '../../img/home.png'

//criando componente img_home
export function Img_home() {
  
    return (

      <View>
            <img src={img}  alt="" />
            {/* compoenete para dormatar a imagem dentro de img style={styles.imagem} */}
      </View>
    
    )
     
  }