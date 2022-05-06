import { Text, View } from 'react-native'
import  React from 'react'
import styles from './style'; //exportando css style 

export default function Title_home() {
    
  //aqui fica o titulo do app

    return (
      
      <View >

        <Text style={styles.textTitle}>Bem-Vindo!</Text>

      </View>

    );
  }