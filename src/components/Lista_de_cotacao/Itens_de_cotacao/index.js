import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from './style'


// aqui vai mostrar a lista com os resultados da API
export default function Itens_de_cotacao() {
 
    return (

    <View style={styles.menuConteudo}>

        <View style={styles.conteudoEsquedo}>

            <View style={styles.caixaLogo}>
            <Image style={styles.imagemLogo} source={require("../../../img/BCicon.png")}/> 
                <Text style={styles.dataTexto}>{props.data}</Text>
            </View>

        </View>

            <View style={styles.conteudoDireito}>
                <Text style={styles.precoTexto}>{props.valor}</Text>
            </View>
    
    </View>

    )
  
}