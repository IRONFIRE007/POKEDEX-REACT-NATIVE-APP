import React from 'react'
import { Image,FlatList, ActivityIndicator, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginated } from '../hooks/UsePokemonPaginated';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

const {top} =useSafeAreaInsets();
const {simplePokemonList,loadPokemons}= usePokemonPaginated();
   



    return (
        <>
          
             <Image
             source={require('../assets/pokebola.png')}
             style={styles.image}
             
             />

        <View style={{...styles.globalMargin,alignItems:'center'}}>


        <FlatList
         data={ simplePokemonList}
         keyExtractor={ (pokemon)=> pokemon.id}
        renderItem={({item:pokemon})=> 
        (  <PokemonCard  pokemon={pokemon} /> )
         
      
      }

            numColumns={2}

         showsVerticalScrollIndicator={false}
       onEndReached={loadPokemons }
         onEndReachedThreshold={.4}

         ListFooterComponent={
         <ActivityIndicator style={{height:100,}} 
         color='grey'
         size={20}
         /> 
        }

  ListHeaderComponent={<Text style={{...styles.title,...styles.globalMargin,top:top+20,marginBottom:top+20}}>Pokedex</Text>}

        />
        </View>

           


        </>
    )
}


