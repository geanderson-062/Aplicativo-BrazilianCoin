import React, { useCallback } from "react";
import { Alert, TouchableOpacity,Text, Linking, View } from "react-native";

//importando o style
import styles from './style'

//importando os icones para tabbar
import { Feather} from '@expo/vector-icons';

const supportedURL = "https://accounts.binance.com/pt-PT/register?source=academy&utm_source=googleadwords_int&utm_medium=cpc&ref=HDYAHEES&gclid=CjwKCAjwyryUBhBSEiwAGN5OCJ5iszEcCSyZ_zoT7_K42MlJ2LV_h_3PET7DodEfh5RYPSNloQ9wtBoC03EQAvD_BwE";

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