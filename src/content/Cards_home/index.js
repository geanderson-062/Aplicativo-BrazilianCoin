import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './style'

//importando o card modal
import Modal_card from './Modal_card/index'

export default function Cards_home() {
 
    return (

       <View style={styles.caRd}>

         

         <Text style={styles.textHome}>Somos uma plataforma livre no qual nosso intuito é ajudar você a entrar no mundo dos investimentos de criptomoedas.</Text>
          
         
         
         <Modal_card/>

       </View>
  
    )
  
}