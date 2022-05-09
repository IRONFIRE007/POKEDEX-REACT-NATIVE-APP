import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../HomeScreen';
import { PokemonScreen } from '../PokemonScreen';
import { SimplePokemon } from '../../interfaces/PokemonInterfaces';

export type RootStackParams={
  HomeScreen:undefined
  PokemonScreen:{simplePokemon : SimplePokemon,color:string }

}
const Stack = createStackNavigator<RootStackParams>();



const StackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
              //backgroundColor:'#fff'
            }
          }}
        
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
      );
}

export default StackNavigator
