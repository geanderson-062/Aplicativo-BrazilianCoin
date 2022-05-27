import React from 'react'

//importando a lib de navegação;
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//importando as telas
import { Home } from '../pages/Home';
import { Sistema } from '../pages/Sistema';
import { Links } from '../pages/Links';
import { Oblog } from '../pages/Blog';
import { Configuracao } from '../pages/Configuracao';

//importando os icones para tabbar
import { Feather} from '@expo/vector-icons';

//criando as rotas para o projeto

//tabbar
const Tab = createBottomTabNavigator();

export function Routes(){

  return(

    //aqui passamos a rotas das paginas e os icones  da  tabbar

    <NavigationContainer>
   
     <Tab.Navigator
     screenOptions={({ route }) => ({

      //cor do item ativado
      tabBarActiveTintColor: "#f7931a",

      //cor do item desativado
      tabBarInactiveTintColor: "#000",

      //customização da tabbar
      tabBarStyle: {

        //cor da tabbar
        backgroundColor: "#fff",

        //distanciamento da barra
        paddingBottom: 5,
        paddingTop: 5,
        
      }
     })}
     >

       <Tab.Screen name="Home" component={Home} 
       
       options={ {
         tabBarIcon: ({ size,color }) => {
          return <Feather name="home" size={size} color={color}
          /> }
        }}       
        />
    
       <Tab.Screen name="Links" component={Links}
        options={ {
          tabBarIcon: ({ size,color }) => {
           return <Feather name="link" size={size} color={color}
           /> }
         }} 
       />
    
       <Tab.Screen name="Grafico" component={Sistema} 
        options={ {
          tabBarIcon: ({ size,color }) => {
           return <Feather name="trending-up" size={size} color={color}
           />
            }
         }} 
       />

       <Tab.Screen name="Blog" component={Oblog}
        options={ {
          tabBarIcon: ({ size,color }) => {
           return <Feather name="navigation" size={size} color={color}
           /> }
         }} 
       />

       <Tab.Screen name="Configurações" component={Configuracao}
        options={ {
          tabBarIcon: ({ size,color }) => {
           return <Feather name="settings" size={size} color={color}
           /> }
         }} 
       />
    
     </Tab.Navigator>
    </NavigationContainer>
  
  )
}




