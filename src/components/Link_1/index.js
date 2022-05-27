import React, { useCallback } from "react";
import { Alert, Button, Linking, View } from "react-native";

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

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
  return (
    
    <View>

      <OpenURLButton url={supportedURL}>Ir para o site</OpenURLButton>
     
    </View>

  );
};

export default App;