import React from 'react';
import { Button, View, SafeAreaView, Text, Alert } from 'react-native';

import styles from './style';

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
      <Button color="#f7931a"
        title="Ir para o Site."
        onPress={() => Alert.alert('Simple Button pressed')}
      />

    </View>

    <Separator />

    <View>

      <Text style={styles.titleprincipal}>www.coinRash</Text>
      <Text style={styles.title}>
      Este siste e Recomendado por especialistas pela Rapidez da conversão dos valores da moeda
      </Text>
      <Button color="#f7931a"
        title="Ir para o Site."
        onPress={() => Alert.alert('Simple Button pressed')}
      />

    </View>

    <Separator />
   
  </SafeAreaView>
  
);

export default App;