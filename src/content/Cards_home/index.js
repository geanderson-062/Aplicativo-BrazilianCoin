import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './style'

//importando o card modal
import Modal_card from './Modal_card/index'

export default function Cards_home() {
 
    return (

       <View style={styles.caRd}>

         <br/>

         <Text style={styles.textHome}>Somos um plataforma no qual nosso intuito e ajudar você a entrar no mundo dos investimentos de cripto moedas.</Text>
          
         <br/>
         
         <Modal_card/>

       </View>
  
    )
  
}