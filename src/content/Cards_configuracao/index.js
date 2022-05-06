import React, { Component } from "react";
import { Text, View, SafeAreaView, SectionList} from "react-native";

//import style
import styles from "./style";

const DATA = [
  {
    
    data: [ 
      
    "Versão do sistema: V - 1.0.0"
    
    ,"Desenvolvedores: \n\n Geanderson ferreira \n Feranda Miguel \n Viviane Raquel \n Claudete Maria"
    
    ,"Entuito do Sistema: \n\n Mostrar a variação do preço do bitcoin"
  
  
  ]

  },
 
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.caRd}>
       
        <SectionList
         
         sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => 
          <Item title={item}/>}
          
        />


      </SafeAreaView>
    );
  }
}


export default App;