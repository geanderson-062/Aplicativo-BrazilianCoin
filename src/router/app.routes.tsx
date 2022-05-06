import React from 'react'

//importando a lib de navegação;
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importando as telas
import { Home } from '../pages/Home';
import { Sistema } from '../pages/Sistema';
import { Links } from '../pages/Links';
import { Oblog } from '../pages/Blog';
import { Configuracao } from '../pages/Configuracao';

//importando os icones para tabbar
import { Feather} from '@expo/vector-icons';

//criando as rotas para o projeto
const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){

  return(


    <NavigationContainer >

     <Navigator>
      
       <Screen name="Home" component={Home} 
       
       options={ {
         tabBarIcon: () => {
          return <Feather name="home" size={25} color="#000"
          /> }
        }}  
        
        />
    
       <Screen name="Links" component={Links}
        options={ {
          tabBarIcon: () => {
           return <Feather name="link" size={25} color="#000"
           /> }
         }} 
       />
    
       <Screen name="Grafico" component={Sistema} 
        options={ {
          tabBarIcon: () => {
           return <Feather name="trending-up" size={25} color="#000"
           />
            }
         }} 
       />

       <Screen name="Blog" component={Oblog}
        options={ {
          tabBarIcon: () => {
           return <Feather name="link" size={25} color="#000"
           /> }
         }} 
       />

       <Screen name="Configuracoes" component={Configuracao}
        options={ {
          tabBarIcon: () => {
           return <Feather name="link" size={25} color="#000"
           /> }
         }} 
       />
    
     </Navigator>
    </NavigationContainer>
  
  )
}




