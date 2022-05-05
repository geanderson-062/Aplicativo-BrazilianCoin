
import React from 'react'
import { View } from 'react-native'

//importando o conteudo / sistema 
import { BitcoinSistem } from '../content/BitcoinSistem/BitcoinSistem'
  
export function Sistema() {

    return (

        <View style={{ flex: 1 , backgroundColor: '#303030', alignItems: 'center'}}>

           <BitcoinSistem/>

        </View>

    )
    
    
  }