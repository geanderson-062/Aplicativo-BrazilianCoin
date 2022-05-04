import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { View } from 'react-native';
import { AppRoutes } from './src/router/app.routes';

export default function App() {
  return (

    <View style={{flex: 1}}>
            <StatusBar style="auto" />
            <AppRoutes/>
    </View>

  );
}

