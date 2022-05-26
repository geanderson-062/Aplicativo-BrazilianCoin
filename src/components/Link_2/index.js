import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const supportedURL = "https://www.somdoradio.com/2008/06/s-playlists-100-sucessos-da-msica-brega.html";

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