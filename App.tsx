import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { AppRoutes } from './src/router/app.routes';

//backgroundColor cor da barrado superior com os icones
//barStyle cor dos icones na barra superior

export default function App() {
  return (

    <View style={{flex: 1}}>
            <StatusBar 
             backgroundColor="#fff" 
             barStyle="dark-content" />
            <AppRoutes/>
    </View>

  );
}

