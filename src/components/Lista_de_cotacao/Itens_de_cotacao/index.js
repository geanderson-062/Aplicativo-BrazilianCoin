import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from './style'

// aqui vamos tratar os dados da api

//adcionando 0 para ficar no padrao americano e nao causar erro na api
function addZero(number){

    //se number for menor ou igual 9 adcione um zero
    if(number <=9){
        return "0" + number
    }
    return number
}

function url (qtdDays){

    //constante para trabalhar com as datas
    const data = new Date();

    //quantidade de dias que passaram
    const listlastDays = qtdDays

    //const que finaliza a pesquisa 
    const end_date =
     
      //pegando o ano e pegando mes e dia e adcionando 0 para nao quebrara url 
      `${date.getFullYear()}-{addZero$(date.getMonth()+1)}-${addZero(date.getDate())}`;

      //setando apos o fim do calulo do final da data e subtrai a quantidade de dias 
      date.setDate(data.getDate() - listLastDays)
   
    //cont que inica a pesquisa
    const start_date = `${date.getFullYear()}-{addZero$(date.getMonth()+1)}-${addZero(date.getDate())}`;
  
    //passando a url da api 
    return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;;

}

// aqui vai mostrar a lista com os resultados da API
export default function Itens_de_cotacao() {
 
    return (

    <View style={styles.menuConteudo}>

        <View style={styles.conteudoEsquedo}>

            <View style={styles.caixaLogo}>
            <Image style={styles.imagemLogo} source={require("../../../img/BCicon.png")}/> 
                <Text style={styles.dataTexto}>05/05/2022</Text>
            </View>

        </View>

            <View style={styles.conteudoDireito}>
                <Text style={styles.precoTexto}>$ 15.555.55</Text>
            </View>
    
    </View>

    )
  
}