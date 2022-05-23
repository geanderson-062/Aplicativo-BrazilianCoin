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

              O bitcoin é uma moeda virtual – a primeira criada no mundo – e pode ser usado para a compra de serviços, produtos e quaisquer outros itens em estabelecimentos que aceitem ser pagos com ele. É negociado na internet em uma rede própria, a blockchain: um banco de dados onde são registradas todas as transações bitcoin entre os participantes da rede. Os bitcoins de cada usuário são armazenados nas chamadas carteiras digitais, por onde é possível transferir e acessar as moedas. Elas são, basicamente, programas e softwares instalados em computadores e celulares.

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
          <Text style={styles.textStyle}>      O que é bitcoin e como funciona essa moeda virtual?        </Text>
        </Pressable>

      </View>
 
    );
  }
}



export default App;