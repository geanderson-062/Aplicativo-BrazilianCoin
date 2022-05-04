import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './style'

//nessa secao deve ser mostrado o preco atual em destaque

export default function Preco_atual() {
 
    return (
      <View style={styles.headerPreco}>

        <Text style={styles.precoAtual}>$ 15.000.00</Text>
        <Text style={styles.textoPreco}>Ultima Cotação</Text>

      </View>
    )
  
}