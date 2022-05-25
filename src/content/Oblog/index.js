import { View } from 'react-native'
import React from 'react'
import styles from './style'

//importando os modals com os textos das perguntas
import O_que_e_blockchain from './cards_modall/o_que_e_blockchain/index'
import O_que_e_bitcoin from './cards_modall/o_que_e_bitcoin/index'
import Principais_cripto from './cards_modall/principais_cripto/index'
import Como_funciona_o_ethereum from './cards_modall/como_funciona_o_ethereum/index'
import O_que_e_uma_criptomoeda from './cards_modall/o_que_uma_cripto/index'
import E_seguro_comprar_criptomoedas from './cards_modall/e_seguro_comprar/index'

export default function Blog() {
 
    return (

       <View style={styles.caRd}>

          <O_que_e_uma_criptomoeda/>

          <O_que_e_blockchain/>

          <E_seguro_comprar_criptomoedas/>

          <Principais_cripto/>

          <O_que_e_bitcoin/>

          <Como_funciona_o_ethereum/>

       </View>
  
    )
  
}