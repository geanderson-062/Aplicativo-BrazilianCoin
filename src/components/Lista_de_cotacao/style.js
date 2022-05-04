import {  StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    Filtros : {  //aqui fica cabecalho ele vai alinhar tudo 

       width: "100%", //largura de 100% 
       flexDirection: 'row', // que os botoes fiquem lado a lado
       paddingVertical: 15,
       justifyContent: "space-evenly",

    },

    buttonClick: {

        width: 50,
        height: 30,
        backgroundColor: "#F7931A",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",

    },

    buttonText: {

        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },

  

});

export default styles