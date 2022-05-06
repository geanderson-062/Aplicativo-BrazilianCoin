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

      <br/>

      <Text style={styles.titleprincipal}>www.coinRash</Text>
      <Text style={styles.title}>
        Este siste e Recomendado por especialistas pela confiabilidade
      </Text>
      <Button color="#f7931a"
        title="Ir para o Site."
        onPress={() => Alert.alert('Simple Button pressed')}
      />

      <br/>

    </View>

    <Separator />

    <View>

    <br/>

      <Text style={styles.titleprincipal}>www.coinRash</Text>
      <Text style={styles.title}>
      Este siste e Recomendado por especialistas pela Rapidez da conversão dos valores da moeda
      </Text>
      <Button color="#f7931a"
        title="Ir para o Site."
        onPress={() => Alert.alert('Simple Button pressed')}
      />

    <br/>

    </View>

    <Separator />

    <View>

    <br/>

      <Text style={styles.titleprincipal}>www.coinRash</Text>
      <Text style={styles.title}>
      Este siste e Recomendado por especialistas pela quantidade de avaliaçoes possitivas
      </Text>
      <Button color="#f7931a"
        title="Ir para o Site."
        onPress={() => Alert.alert('Simple Button pressed')}
      />

    <br/>

    </View>

    <Separator />

    <View>

    <br/>

      <Text style={styles.titleprincipal}>www.coinRash</Text>
      <Text style={styles.title}>
      Este siste e Recomendado por especialistas por conta das atualizaçõesperiodicas no sistema
      </Text>
      <Button  color="#f7931a"
        title="Ir para o Site."
        onPress={() => Alert.alert('Simple Button pressed')}
      />

    <br/>
    </View>

    <Separator />
    
  </SafeAreaView>
);

export default App;