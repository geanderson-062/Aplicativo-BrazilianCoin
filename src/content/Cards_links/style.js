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
       
        color:'#fff',
        fontSize:24,
        fontWeight:'bold',
        textAlign: 'center',

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