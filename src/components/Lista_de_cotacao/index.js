import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React, { Component, Fragment } from 'react'
import styles from './style'

//nessa secao deve ser mostrado o preco atual em destaque

export default function Lista_de_cotacao() {
 
    return (

    //o fragment permite que componentes sejam criados fora da view
    <Fragment>

       <View style={styles.Filtros}> {/*dentro dessa view vai ficar os botoes de dias e mes do app*/}

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> {} } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>7D</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> {} } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>15D</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> {} } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>1M</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> {} } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>3M</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.buttonClick}
           onPress={ ()=> {} } //quando o botao for clicado
         >
             <Text style={styles.buttonText}>6M</Text>
         </TouchableOpacity>

       </View>

       <ScrollView>

       </ScrollView>
    
    </Fragment>
  
    )
  
}