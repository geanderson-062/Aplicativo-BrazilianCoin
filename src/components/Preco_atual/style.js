import {  StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    headerPreco : {  //aqui fica cabecalho ele vai alinhar tudo 

        width: "100%", //largura de 100% 
        height: "auto", // altura automatica dicaordo com nosso sistema
        alignItems: "center", //esses itens serao alinhados ao centro

    },

    precoAtual: {

        color: "#F7931A",//cor das letras
        fontSize: 32,//tamanho da fonte
        fontWeight: "bold",//negrito
        paddingTop: 20,//altura que o item está do topo

    },

    textoPreco: {

        color: "#fff",//cor das letras
        fontSize: 16,//tamanho da fonte
        fontWeight: "bold",//negrito
        paddingTop: 20,//altura que o item está do topo

    },

});

export default styles