import React, { Component } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";

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

              Esse tipo de gráfico é usado para obter informações sobre as mudanças nos preços de uma criptomoeda durante um determinado período, sendo representado por uma simples linha. O gráfico é baseado no preço de fechamento diário da criptomoeda, e
              com o gráfico linear, você pode julgar melhor a velocidade da mudança do preço.
             
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
          <Text style={styles.textStyle}>      Como funciona o gráfico?       </Text>
        </Pressable>
        
      </View>
 
    );
  }
}



export default App;