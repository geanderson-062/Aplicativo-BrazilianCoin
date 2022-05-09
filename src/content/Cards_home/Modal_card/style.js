import {  StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    centeredView: {
   
        justifyContent: "center",
        alignItems: "center",
     
      },
      modalView: {
        
        marginTop: "60%",
        width: "60%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,

        },

        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

      },

      button: {

        borderRadius: 20,
        padding: 10,
        elevation: 2,

      },

      buttonOpen: {

        backgroundColor: "#f7931a",

      },

      buttonClose: {

        backgroundColor: "#f7931a",

      },

      textStyle: {

        color: "white",
        fontWeight: "bold",
        textAlign: "center",

      },

      modalText: {
        marginBottom: 15,
        textAlign: "center",
      },
    
    });

export default styles