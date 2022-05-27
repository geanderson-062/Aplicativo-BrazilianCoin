import React, { useCallback } from "react";
import { Alert, Button, Linking, View } from "react-native";
import { Feather} from '@expo/vector-icons';

const supportedURL = "https://github.com/geanderson-062/app-BrazilianCoin-react-native";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {

    const supported = await Linking.canOpenURL(url);

    if (supported) {

      await Linking.openURL(url);
    } else {
      Alert.alert(`Não foi possivel abrir este site: ${url}`);
    }
  }, [url]);

  return <Button color={'#f7931a'} title={children} onPress={handlePress}/>   ;
};

const App = () => {
  return (
    
    <View>
  
      <OpenURLButton url={supportedURL}>Ir para o Repositório</OpenURLButton>

    </View>

  );
};

export default App;