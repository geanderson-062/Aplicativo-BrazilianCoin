import {  StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5fcff"
	},

	title: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 10
	},

	timeWrapper: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
        borderRadius: 5,
		backgroundColor:"#303030", //cor de fundo da seleçao de dias
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

	header: {
		position: "absolute",
		top: 50,
		fontSize: 22,
		fontWeight: "bold"
	},

	underline: { 
	
	//quando for selecioando vai ficar assim
	textDecorationLine: "underline",
	color:"#f7931a",

    }
})

export default styles