import {  StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },

      title: {
        textAlign: 'center',
        marginVertical: 8,
        color: "#fff",
      },

      titleprincipal: {
        textAlign: 'center',
        fontSize: "35",
        color: "#fff",
      },

      button: {
       
        backgroundColor: "#f7931a"

      },

      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

      separator: {
        marginVertical: 8,
        borderBottomColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
        
});

export default styles