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


                O bitcoin e uma moeda digital pode ser comprada em sistes confiaveis,
                 e uma moeda instavel e sofrem uito com a variação de valores.

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
          <Text style={styles.textStyle}>      Como funciona o bitcoin?        </Text>
        </Pressable>
        
      </View>
 
    );
  }
}



export default App;