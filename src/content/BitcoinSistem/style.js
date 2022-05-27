import {  StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: { //formatação do container principal

		flex: 1,
		justifyContent: "center",
		alignItems: "center",

	},

    grafico: { //formatação do grafico
		
		borderRadius: 5,
		alignItems: "center",
		backgroundColor: "#232323",
		//width: "40%",
		height: "50%",

	},

	title: {//configuração do titulo das moedas

		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
		color:"#fff",

	},

	timeWrapper: { //card do filtro de dias

		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
        borderRadius: 5,
		backgroundColor:"#232323", //cor de fundo da seleçao de dias
		width: "80%",
        marginTop: 20,

	},

	coins: {

		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginTop: 20,

	},

	time: { //cinfiguração do texto de dias

		margin: 10,
		color:"#fff",//cor do texto
		fontSize: 15,//tamanho da fonte 
		fontWeight:'bold',//cor em negrito

	},

	header: { //configuração do titulo

		position: "absolute",
		top: 50,
		fontSize: 20,
		fontWeight: "bold",
		color:"#fff",

	},

	underline: { //cor da barra de dias
	
	     //quando for selecioando vai ficar assim
    	textDecorationLine: "underline",
     	color:"#f7931a",

    }
})

export default styles