import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

//importando o style
import styles from "./style";

class App extends Component {
 
    state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>

              Ethereum é uma plataforma blockchain que possibilita transações descentralizadas, como transferências e até mesmo empréstimos de criptomoedas entre pessoas sem precisar de uma instituição financeira para intermediar. Este movimento é conhecido como DeFi – sigla em inglês para finanças descentralizadas.
              Essa possibilidade inclusive permitiu que novas moedas digitais fossem criadas a partir da plataforma Ethereum, bem como tokens não fungíveis (NFT) e games dentro do metaverso.
              A possibilidade de criação de outras criptomoedas dentro do Ethereum acontece graças aos contratos inteligentes (smart contracts) Muita gente confunde Ethereum com ether. A rede blockchain (plataforma) é chamada de “Ethereum”. Já a moeda digital (criptomoeda) utilizada no pagamento de trocas de contratos inteligentes e taxas de transações é chamada de “ether” (ETH).
   
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>      Ethereum: como funciona a segunda criptomoeda mais famosa do mundo?      </Text>
        </Pressable>
        
      </View>
 
    );
  }
}



export default App;