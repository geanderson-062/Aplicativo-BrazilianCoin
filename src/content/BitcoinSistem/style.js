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
		backgroundColor: "#fff",
		width: "80%",
		height: "60%",

	},

	title: {

		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
		color:"#fff",

	},

	timeWrapper: {

		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
        borderRadius: 5,
		backgroundColor:"#232323", //cor de fundo da seleçao de dias
		width: "80%",

	},

	coins: {

		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between"

	},

	time: {

		margin: 10,
		color:"#fff",//cor do texto
		fontSize: 20,//tamanho da fonte 
		fontWeight:'bold',//cor em negrito

	},

	header: { //cor do titulo

		position: "absolute",
		top: 50,
		fontSize: 25,
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