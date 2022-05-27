import React, { useCallback } from "react";
import { Alert, Button, Linking, View } from "react-native";

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

  return <Button color={'#f7931a'} title={children} onPress={handlePress} />;
};

const App = () => {
  return (
    
    <View>

      <OpenURLButton url={supportedURL}>Ir para o site</OpenURLButton>
     
    </View>

  );
};

export default App;