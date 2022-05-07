import axios from "axios"
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { VictoryLine } from "victory"

//importnado o style
import styles from "./style"

export default function BitcoinSistem() {
  
	const [ data, setData ] = useState()
	const [ coin, setCoin ] = useState("bitcoin")
	const [ period, setPeriod ] = useState(30)

	useEffect(
		() => {
			getData()
		},
		[ coin, period ]
	)

	async function getData() {
		try {
			const response = await axios.get(
				`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${period}`
			)
			const formatData = response.data.prices.map(function(i) {
				return {
					x: i[0],
					y: i[1]
				}
			})
			setData(formatData)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Qual criptomoeda vale mais hoje?</Text>
			<View style={styles.coins}>
				<Text
					style={[ styles.title, coin === "bitcoin" ? styles.underline : null ]}
					onPress={() => setCoin("bitcoin")}
				>
					{/*nome da cripto moeda*/}
					Bitcoin
				</Text>
				<Text
					style={[ styles.title, coin === "ethereum" ? styles.underline : null ]}
					onPress={() => setCoin("ethereum")}
				>
					{/*nome da cripto moeda*/}
					Ethereum
				</Text>
			</View>
			<VictoryLine
				style={{
					data: {
						stroke: "#000",
						strokeWidth: 2
					}
				}}
				width={400}
				height={200}
				data={data}
			/>
			<View style={styles.timeWrapper}>
				<Text style={[ styles.time, period === 1 ? styles.underline : null ]} onPress={() => setPeriod(1)}>
					1 Dia
				</Text>
				<Text style={[ styles.time, period === 7 ? styles.underline : null ]} onPress={() => setPeriod(7)}>
					1 Semana
				</Text>
				<Text style={[ styles.time, period === 30 ? styles.underline : null ]} onPress={() => setPeriod(30)}>
					1 Mês
				</Text>
				<Text style={[ styles.time, period === 365 ? styles.underline : null ]} onPress={() => setPeriod(365)}>
					1 Ano
				</Text>

                <br/>

			</View>
		</View>
	)
}
