import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Image, ActivityIndicator} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonDetails } from '../components/PokemonDetails';
import { usePokemon } from '../hooks/usePokemon';
import { usePokemonPaginated } from '../hooks/UsePokemonPaginated'
import { RootStackParams } from './navigator/StackNavigator'

interface Props extends StackScreenProps<RootStackParams,'PokemonScreen'>{};

export const PokemonScreen = ({navigation,route}:Props) => {
  usePokemonPaginated()

  const { simplePokemon,color } = route.params
  const { id,name,picture }=simplePokemon;
   const {top}=  useSafeAreaInsets();
  const {isLoading,pokemon} = usePokemon(id)
     

    return (
        <View style={{flex:1}}>


            <View style={{...styles.headerContainer,backgroundColor:color}} > 
             <TouchableOpacity style={{...styles.btn,top: top+10}} 
             onPress={() => navigation.pop() }
             
             >
                    <Icon
           name="arrow-back-outline"
           color='#fff'
           size={40}
           />
             </TouchableOpacity>
             

             <Text style={{...styles.titleP,top:top+40}} >{name +'\n'}# {id}</Text>

             <Image
           source={require('../assets/pokebolaBlanca.png')}
           style={styles.imgP}
         />

         <FadeInImage
          uri={picture}
           style={styles.imgPokemon}
         />
            </View>
        
          {
              isLoading ? (
                <View  style={styles.indicator}>
                <ActivityIndicator
                 color={color}
                 size={50}
                />
            </View>
              )
              : <PokemonDetails pokemon={pokemon} />
          }
        
        
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer:{
        height:370,
        zIndex:999,
        alignItems: 'center',
        borderBottomLeftRadius:1000,
        borderBottomRightRadius:1000

    },
    btn:{
        position: 'absolute',
        left:10
    },
    titleP:{
        color:'#FFF',
        fontSize:45,
        alignSelf:'flex-start',
        left:20,
        textTransform:'capitalize',
    },
    imgP:{
      width:250,
      height:250,
      bottom:-10,
      opacity:.6
    },
    imgPokemon:{
        width:250,
        height:250,
        position:'absolute',
        bottom:0
    },
    indicator:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
        
    }
})