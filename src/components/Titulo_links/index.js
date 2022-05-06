import { Text, View } from 'react-native'
import  React from 'react'
import styles from './style'; //exportando css style 

export default function Title_link() {
    
  //aqui fica o titulo do app

    return (
      
      <View >

        <Text style={styles.textTitle}>Onde investir ?</Text>

      </View>

    );
  }