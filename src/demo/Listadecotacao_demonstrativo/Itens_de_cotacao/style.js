import {  StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    menuConteudo: {  //aqui fica cabecalho ele vai alinhar tudo 

       width: "90%",
       height: "auto",
       backgroundColor: "#232323",//cor do card
       marginLeft: "3%",
       marginBottom: 15,
       borderRadius: 10,
       flexDirection: "row",
       alignItems: "center",
       padding: 10,
     
    },

    imagemLogo: {

        width: 40,
        height: 40,
        marginLeft: 2,

    },

    caixaLogo: {

       flexDirection: "row",
       alignItems: "center",
       
    },

    conteudoEsquedo: {

       width: "36%",
       height: "100%",
       alignItems: "flex-start",
            
    },

    conteudoDireito: {

       width: "60%",
       height: "100%",
       alignItems: "flex-end",

    },

    dataTexto: {

      fontSize: 16,
      paddingLeft: 2, 
      color: "#fff",
      fontWeight: "bold"

    },

    precoTexto: {

      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
     
    },

});

export default styles