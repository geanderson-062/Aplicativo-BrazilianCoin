import React from 'react';
import { Button, View, SafeAreaView, Text, Alert } from 'react-native';

import styles from './style';

//importando os links
import  Link_1  from '../../components/Link_1/index';
import  Link_2  from '../../components/Link_2/index';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>

    <Separator />
   
    <View>

      <Text style={styles.titleprincipal}>www.coinRash</Text>
      <Text style={styles.title}>
        Este siste e Recomendado por especialistas pela confiabilidade
      </Text>
    
      <Link_1  style={styles.button}/>

    </View>

    <Separator />

    <View>

      <Text style={styles.titleprincipal}>www.coinRash</Text>
      <Text style={styles.title}>
      Este siste e Recomendado por especialistas pela Rapidez da conversão dos valores da moeda
      </Text>
     
      <Link_2 style={styles.button}/>

    </View>

    <Separator /> 
   
  </SafeAreaView>
  
);

export default App;