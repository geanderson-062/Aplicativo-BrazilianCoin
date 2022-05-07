import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './style'

//importando os modals com os textos das perguntas
import O_que_e_bitcoin from './cards_modall/o_que_e_bitcoin/index'
import Como_funciona_o_bitcoin from './cards_modall/como_funciona_o_bitcoin/index'
import O_que_e_ethereum from './cards_modall/o_que_e_ethereum/index'
import Como_funciona_o_ethereum from './cards_modall/como_funciona_o_ethereum/index'
import O_que_e_uma_criptomoeda from './cards_modall/o_que_uma_cripto/index'
import E_seguro_comprar_criptomoedas from './cards_modall/e_seguro_comprar/index'

export default function Blog() {
 
    return (

       <View style={styles.caRd}>

          <br/>
          <br/>

          <O_que_e_uma_criptomoeda/>

          <br/>

          <O_que_e_bitcoin/>

          <br/>

          <Como_funciona_o_bitcoin/>

          <br/>

          <O_que_e_ethereum/>

          <br/>

          <Como_funciona_o_ethereum/>

          <br/>

          <E_seguro_comprar_criptomoedas/>

          <br/>

       </View>
  
    )
  
}