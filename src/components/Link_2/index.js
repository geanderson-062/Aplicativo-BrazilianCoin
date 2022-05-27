import React, { useCallback } from "react";
import { Alert, TouchableOpacity,Text, Linking, View } from "react-native";

//importando o style
import styles from './style'

//importando os icones para tabbar
import { Feather} from '@expo/vector-icons';

const supportedURL = "https://lp.warren.com.br/invista-no-fundo-warren-cripto?utm_source=google&utm_medium=paid&utm_campaign=ppc-warren_google-ads_google_search_criptomoedas_consideracao_key&utm_content=ppc-warren_google-ads_google_search_criptomoedas_consideracao_key_1-2-3-4-5-6-7_text-ad_criptomoedas_&gclid=CjwKCAjwyryUBhBSEiwAGN5OCHauN8SNgIc31N-ygWshYy_cKtZBu3oHE2OeCp-RFAF2gPc44Glo-xoCkvwQAvD_BwE";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {

    const supported = await Linking.canOpenURL(url);

    if (supported) {

      await Linking.openURL(url);
    } else {
      Alert.alert(`Não foi possivel abrir este site: ${url}`);
    }
  }, [url]);

  return <TouchableOpacity  style={styles.button} title={children} onPress={handlePress} >
  <Text style={styles.text}>Ir para o site <Feather name="link" size={20} color={"#fff"}/></Text></TouchableOpacity>;
  
};

const App = () => {
  return (
    
    <View>

      <OpenURLButton url={supportedURL}>Ir para o site</OpenURLButton>
     
    </View>

  );
};

export default App;