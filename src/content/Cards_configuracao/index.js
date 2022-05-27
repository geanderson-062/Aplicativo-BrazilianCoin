import React, { Component } from "react";
import { Text, View, SafeAreaView, SectionList} from "react-native";

//import style
import styles from "./style";

//importando o link do git
import Link_git from "../../components/Link_git/index"

const DATA = [
  {
    
    data: [ 
          
    "Versão do sistema: V - 1.0.0 \n\n\n\n Desenvolvedores: \n\n Geanderson Ferreira \n Fernanda Miguel \n Viviane Raquel \n Claudete Maria \n Erick Soares \n\n" 
    
  ]

  },
 
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Link_git/>
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