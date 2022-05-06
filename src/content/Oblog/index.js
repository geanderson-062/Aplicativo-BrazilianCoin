import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './style'

//importando os modals
import O_que_e_bitcoin from './cards_modall/o_que_e_bitcoin/index'
import Como_funciona_o_bitcoin from './cards_modall/como_funciona_o_bitcoin/index'

export default function Blog() {
 
    return (

       <View style={styles.caRd}>

          <br/>

          <O_que_e_bitcoin/>

          <br/>

          <Como_funciona_o_bitcoin/>

       </View>
  
    )
  
}