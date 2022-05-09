//importar os componentes que vamos precisar
import { StatusBar, View  } from 'react-native';

//importando o sistema de rotas
import { AppRoutes } from './src/router/app.routes';

//backgroundColor cor da barrado superior com os icones
//barStyle cor dos icones na barra superior // estatusbar

export default function App() {
  return (

    //aqui importamos o sistema de valegacao e definimos o statusbar
    <View style={{flex: 1}}>
            <StatusBar 
             backgroundColor="#fff" 
             barStyle="dark-content" />
            <AppRoutes/>
    </View>

  );
}

