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

              Nos últimos anos, diversas moedas virtuais surgiram – já são quase 20 mil disponíveis, mas apenas cerca de 10 mil têm algum valor de mercado, que soma em torno de US$ 2 trilhões. Somente o bitcoin e o ethereum representam quase 60% desse valor e são, portanto, as criptos mais estáveis e sólidas desse mercado.

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
          <Text style={styles.textStyle}>      Quais são as principais e maiores criptomoedas do mundo?       </Text>
        </Pressable>
        
      </View>
 
    );
  }
}



export default App;