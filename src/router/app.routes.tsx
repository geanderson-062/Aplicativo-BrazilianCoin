import React from 'react'

//importando a lib de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//importando as telas
import { Home } from '../pages/Home';
import { Media } from '../pages/Media';
import { Calcular } from '../pages/Calcular';

//importando os icones para tabbar
import { Feather} from '@expo/vector-icons'

//criando as rotas para o projeto
const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){

  return(
    
    <NavigationContainer>
     <Navigator>

       <Screen name="Home" component={Home} 
       
       options={ {
         tabBarIcon: () => {
          return <Feather name="home" size={25} color="#000"
          /> }
        }}  
        
        />
    
       <Screen name="Media" component={Media}
        options={ {
          tabBarIcon: () => {
           return <Feather name="home" size={25} color="#000"
           /> }
         }} 
       />
    
       <Screen name="Calcular" component={Calcular}
        options={ {
          tabBarIcon: () => {
           return <Feather name="home" size={25} color="#000"
           /> }
         }} 
       />
    
     </Navigator>
    </NavigationContainer>
  )
}


