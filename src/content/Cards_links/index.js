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

      <Text style={styles.titleprincipal}>Binance</Text>
      <Text style={styles.title}>
      A plataforma mais completa com guias sobre todos os tópicos do 
      mundo cripto. Seja você um iniciante tentando aprender sobre 
      mineração ou um veterano que busca desenvolver uma estratégia de 
      trading, podemos ajudar.
      </Text>
    
      <Link_1  style={styles.button}/>

    </View>

    <Separator />

    <View>

      <Text style={styles.titleprincipal}>Warren Cripto</Text>
      <Text style={styles.title}>
      Seus investimentos
      em cripto rendem.
      O seu tempo também.
      Invista em um fundo com as melhores criptomoedas.
      </Text>
     
      <Link_2 style={styles.button}/>

    </View>

    <Separator /> 
   
  </SafeAreaView>
  
);

export default App;